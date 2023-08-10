import './WriteRatingForCityRoute.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/authContext';
import {
  createRating,
  getByReference,
  // getCityRouteRating,
  updateRating,
} from '../../../services/API_proyect/rating.service';

// We made the rating to cityToRate
const WriteRatingForCityRoute = ({ cityToRate }) => {
  const { user } = useAuth();
  const [ratingValue, setRatingValue] = useState(-1);
  const [cityRatingsFromDB, setCityRatingsFromDB] = useState({});
  const [cityRatingsFromDBFirstTime, setCityRatingsFromDBFirstTime] = useState({});
  const [responseCreateRating, setResponseCreateRating] = useState({});
  const [responseUpdateRating, setReponsesUpdateRating] = useState({});

  const userLoged = user;

  if (cityToRate === null) {
    console.log('WriteRatingForCity -> cityToRate: ', cityToRate);
    return null;
  }

  const getCityRatingsFromDB = async () => {
    const dataFromDB = await getByReference('CityRoute', cityToRate._id);

    if (dataFromDB.status == 200) {
      setCityRatingsFromDB(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getCityRatingsFromDB');
    }

    // TODO: Show error with swal
  };

  const getCityRatingsFromDBFirstTime = async () => {
    const dataFromDB = await getByReference('CityRoute', cityToRate._id);

    if (dataFromDB.status == 200) {
      setCityRatingsFromDBFirstTime(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getCityRatingsFromDBFirstTime');
    }

    // TODO: Show error with swal
  };

  const createOrUpdateRating = async (cityRatingsFromDB) => {
    if (cityRatingsFromDB?.data) {
      const filterRating = cityRatingsFromDB.data.filter(
        (rating) => rating.owner?._id == userLoged._id,
      );

      if (filterRating.length == 0) {
        setResponseCreateRating(
          await createRating({ score: ratingValue, referenceCityRoute: cityToRate._id }),
        );
        setCityRatingsFromDB({});
      } else {
        setReponsesUpdateRating(
          await updateRating(
            { score: ratingValue, referenceCityRoute: cityToRate._id },
            filterRating[0]._id,
          ),
        );
        setCityRatingsFromDB({});
      }
    }
  };

  const showFirstTimeRating = async (cityRatingsFromDB) => {
    if (cityRatingsFromDB?.data) {
      const filterRating = cityRatingsFromDB.data.filter((rating) => {
        return rating.referenceCityRoute._id == cityToRate._id;
      });

      if (filterRating.length == 0) {
        setRatingValue(-1);
        setCityRatingsFromDBFirstTime({});
      } else {
        setRatingValue(filterRating[0].score);
        setCityRatingsFromDBFirstTime({});
      }
    }
  };

  useEffect(() => {
    if (ratingValue != -1) {
      getCityRatingsFromDB();
    }
  }, [ratingValue]);

  ////////////////////////////////////
  useEffect(() => {
    getCityRatingsFromDBFirstTime();
  }, []);
  ////////////////////////////////////

  useEffect(() => {
    console.log('response create Rating: ', responseCreateRating);
  }, [responseCreateRating]);

  useEffect(() => {
    console.log('response update Ratins: ', responseUpdateRating);
  }, [responseUpdateRating]);

  useEffect(() => {
    createOrUpdateRating(cityRatingsFromDB);
  }, [cityRatingsFromDB]);

  ///////////////////////////////////
  useEffect(() => {
    showFirstTimeRating(cityRatingsFromDBFirstTime);
  }, [cityRatingsFromDBFirstTime]);
  ////////////////////////////////////

  return (
    <div>
      <Rating
        name="Write Ratings For City"
        //value={ratingValue}
        value={ratingValue === -1 ? 0 : ratingValue}
        onChange={(event, newRatingValue) => {
          setRatingValue(newRatingValue);
        }}
      />
    </div>
  );
};

export default WriteRatingForCityRoute;
