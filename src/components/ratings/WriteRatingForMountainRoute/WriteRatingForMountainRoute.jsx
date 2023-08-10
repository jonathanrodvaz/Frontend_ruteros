import './WriteRatingForMountainRoute.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/authContext';
import {
  createRating,
  getByReference,
  updateRating,
} from '../../../services/API_proyect/rating.service';

const WriteRatingForMountainRoute = ({ mountainRouteToRate }) => {
  const { user } = useAuth();
  const [ratingValue, setRatingValue] = useState(-1);
  const [mountainRouteRatingsFromDB, setMountainRouteRatingsFromDB] = useState({});
  const [mountainRouteRatingsFromDBFirstTime, setMountainRouteRatingsFromDBFirstTime] =
    useState({});
  const [responseCreateRating, setResponseCreateRating] = useState({});
  const [responseUpdateRating, setReponsesUpdateRating] = useState({});

  const userLoged = user;

  if (mountainRouteToRate === null) {
    console.log(
      'WriteRatingForMountainRoute -> mountainRouteToRate: ',
      mountainRouteToRate,
    );
    return null;
  }

  const getMountainRouteRatingsFromDB = async () => {
    const dataFromDB = await getByReference('MountainRoute', mountainRouteToRate._id);

    if (dataFromDB.status == 200) {
      setMountainRouteRatingsFromDB(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getMountainRouteRatingsFromDB');
    }

    // TODO: Show error with swal
  };

  const getMountainRouteRatingsFromDBFirstTime = async () => {
    const dataFromDB = await getByReference('MountainRoute', mountainRouteToRate._id);

    if (dataFromDB.status == 200) {
      setMountainRouteRatingsFromDBFirstTime(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getMountainRouteRatingsFromDB');
    }

    // TODO: Show error with swal
  };

  const createOrUpdateRating = async (mountainRouteRatingsFromDB) => {
    if (mountainRouteRatingsFromDB?.data) {
      const filterRating = mountainRouteRatingsFromDB.data.filter(
        (rating) => rating.owner?._id == userLoged._id,
      );

      if (filterRating.length == 0) {
        setResponseCreateRating(
          await createRating({
            score: ratingValue,
            referenceMountainRoute: mountainRouteToRate._id,
          }),
        );
        setMountainRouteRatingsFromDB({});
      } else {
        setReponsesUpdateRating(
          await updateRating(
            { score: ratingValue, referenceMountainRoute: mountainRouteToRate._id },
            filterRating[0]._id,
          ),
        );
        setMountainRouteRatingsFromDB({});
      }
    }
  };

  const showFirstTimeRating = async (mountainRouteRatingsFromDB) => {
    if (mountainRouteRatingsFromDB?.data) {
      const filterRating = mountainRouteRatingsFromDB.data.filter((rating) => {
        return rating.referenceMountainRoute._id == mountainRouteToRate._id;
      });

      if (filterRating.length == 0) {
        setRatingValue(-1);
        setMountainRouteRatingsFromDBFirstTime({});
      } else {
        setRatingValue(filterRating[0].score);
        setMountainRouteRatingsFromDBFirstTime({});
      }
    }
  };

  useEffect(() => {
    if (ratingValue != -1) {
      getMountainRouteRatingsFromDB();
    }
  }, [ratingValue]);

  ////////////////////////////////////
  useEffect(() => {
    getMountainRouteRatingsFromDBFirstTime();
  }, []);
  ////////////////////////////////////

  useEffect(() => {
    console.log('response create Rating: ', responseCreateRating);
  }, [responseCreateRating]);

  useEffect(() => {
    console.log('response update Ratins: ', responseUpdateRating);
  }, [responseUpdateRating]);

  useEffect(() => {
    createOrUpdateRating(mountainRouteRatingsFromDB);
  }, [mountainRouteRatingsFromDB]);

  ///////////////////////////////////
  useEffect(() => {
    showFirstTimeRating(mountainRouteRatingsFromDBFirstTime);
  }, [mountainRouteRatingsFromDBFirstTime]);
  ////////////////////////////////////

  return (
    <div>
      <Rating
        name="Write Ratings For Mountain Route"
        //value={ratingValue}
        value={ratingValue === -1 ? 0 : ratingValue}
        onChange={(event, newRatingValue) => {
          setRatingValue(newRatingValue);
        }}
      />
    </div>
  );
};

export default WriteRatingForMountainRoute;
