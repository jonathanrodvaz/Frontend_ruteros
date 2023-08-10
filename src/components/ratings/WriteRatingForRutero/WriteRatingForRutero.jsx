import './WriteRatingForRutero.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/authContext';
import {
  createRating,
  getByReference,
  updateRating,
} from '../../../services/API_proyect/rating.service';

// We made the rating to userToRate
const WriteRatingForRutero = ({ userToRate }) => {
  const { user } = useAuth();
  const [ratingValue, setRatingValue] = useState(-1);
  const [userRatingsFromDB, setUserRatingsFromDB] = useState({});
  const [ratingValueFirstTime, setRatingValueFirstTime] = useState(-1);
  const [userRatingsFromDBFirstTime, setUserRatingsFromDBFirstTime] = useState({});
  const [responseCreateRating, setResponseCreateRating] = useState({});
  const [responseUpdateRating, setReponsesUpdateRating] = useState({});

  const userLoged = user;

  // If userLogged === null means that we're not logged
  if (userLoged === null) return null;

  // If the user to rate is the user loged, we just leave
  if (userToRate._id === userLoged._id) return null;

  const getUserRatingsFromDB = async () => {
    const dataFromDB = await getByReference('User', userToRate._id);

    if (dataFromDB.status == 200) {
      setUserRatingsFromDB(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getUserRatingsFromDB');
    }

    // TODO: Show error with swal
  };

  const getUserRatingsFromDBFirstTime = async () => {
    const dataFromDB = await getByReference('User', userToRate._id);

    if (dataFromDB.status == 200) {
      setUserRatingsFromDBFirstTime(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getUserRatingsFromDBFirstTime');
    }

    // TODO: Show error with swal
  };

  const createOrUpdateRating = async (userRatingsFromDB) => {
    if (userRatingsFromDB?.data) {
      const filterRating = userRatingsFromDB.data.filter(
        (rating) => rating.owner == userLoged._id,
      );
      //const filterRating = userRatingsFromDB.data.filter((rating) => rating.owner._id == userLoged._id);

      if (filterRating.length == 0) {
        setResponseCreateRating(
          await createRating({ score: ratingValue, referenceDeveloper: userToRate._id }),
        );
        setUserRatingsFromDB({});
      } else {
        setReponsesUpdateRating(
          await updateRating(
            { score: ratingValue, referenceDeveloper: userToRate._id },
            filterRating[0]._id,
          ),
        );
        setUserRatingsFromDB({});
      }
    }
  };

  const showFirstTimeRating = async (userRatingsFromDB) => {
    if (userRatingsFromDB?.data) {
      //const filterRating = userRatingsFromDB.data.filter((rating) => rating.owner._id == userLoged._id);
      const filterRating = userRatingsFromDB.data.filter(
        (rating) => rating.owner == userLoged._id,
      );

      if (filterRating.length == 0) {
        setRatingValueFirstTime(-1);
        setUserRatingsFromDBFirstTime({});
      } else {
        setRatingValueFirstTime(filterRating[0].score);
        setUserRatingsFromDBFirstTime({});
      }
    }
  };

  useEffect(() => {
    if (ratingValue != -1) {
      getUserRatingsFromDB();
    }
  }, [ratingValue]);

  useEffect(() => {
    getUserRatingsFromDBFirstTime();
  }, []);

  useEffect(() => {
    console.log('response create Rating: ', responseCreateRating);
  }, [responseCreateRating]);

  useEffect(() => {
    console.log('response update Ratins: ', responseUpdateRating);
  }, [responseUpdateRating]);

  useEffect(() => {
    createOrUpdateRating(userRatingsFromDB);
  }, [userRatingsFromDB]);

  useEffect(() => {
    showFirstTimeRating(userRatingsFromDBFirstTime);
  }, [userRatingsFromDBFirstTime]);

  return (
    <div>
      <Rating
        name="Write Ratings For Developer"
        value={ratingValue === -1 ? ratingValueFirstTime : ratingValue}
        onChange={(event, newRatingValue) => {
          setRatingValue(newRatingValue);
        }}
      />
    </div>
  );
};

export default WriteRatingForRutero;
