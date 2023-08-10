import './WriteRatingForOffer.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/authContext';
import {
  createRating,
  getByReference,
  updateRating,
} from '../../../services/API_proyect/rating.service';

// We made the rating to offerToRate
const WriteRatingForOffer = ({ offerToRate }) => {
  const { user } = useAuth();
  const [ratingValue, setRatingValue] = useState(-1);
  const [offerRatingsFromDB, setOfferRatingsFromDB] = useState({});
  const [offerRatingsFromDBFirstTime, setOfferRatingsFromDBFirstTime] = useState({});
  const [responseCreateRating, setResponseCreateRating] = useState({});
  const [responseUpdateRating, setReponsesUpdateRating] = useState({});

  const userLoged = user;

  if (offerToRate === null) {
    console.log('WriteRatingForOffer -> offerToRate: ', offerToRate);
    return null;
  }

  // const getOfferRatingsFromDB = async () => {
  //     setOfferRatingsFromDB(await getByReference("Offer", offerToRate._id))
  // }

  // const getOfferRatingsFromDBFirstTime = async () => {
  //     setOfferRatingsFromDBFirstTime(await getByReference("Offer", offerToRate._id))
  // }

  const getOfferRatingsFromDB = async () => {
    const dataFromDB = await getByReference('Offer', offerToRate._id);

    if (dataFromDB.status == 200) {
      setOfferRatingsFromDB(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getOfferRatingsFromDB');
    }

    // TODO: Show error with swal
  };

  const getOfferRatingsFromDBFirstTime = async () => {
    const dataFromDB = await getByReference('Offer', offerToRate._id);

    if (dataFromDB.status == 200) {
      setOfferRatingsFromDBFirstTime(dataFromDB);
    } else {
      console.log('error: Fail getByReference in getOfferRatingsFromDB');
    }

    // TODO: Show error with swal
  };

  const createOrUpdateRating = async (offerRatingsFromDB) => {
    if (offerRatingsFromDB?.data) {
      const filterRating = offerRatingsFromDB.data.filter(
        (rating) => rating.owner?._id == userLoged._id,
      );

      if (filterRating.length == 0) {
        setResponseCreateRating(
          await createRating({ score: ratingValue, referenceOffer: offerToRate._id }),
        );
        setOfferRatingsFromDB({});
      } else {
        setReponsesUpdateRating(
          await updateRating(
            { score: ratingValue, referenceOffer: offerToRate._id },
            filterRating[0]._id,
          ),
        );
        setOfferRatingsFromDB({});
      }
    }
  };

  const showFirstTimeRating = async (offerRatingsFromDB) => {
    if (offerRatingsFromDB?.data) {
      const filterRating = offerRatingsFromDB.data.filter((rating) => {
        return rating.referenceOffer._id == offerToRate._id;
      });

      if (filterRating.length == 0) {
        setRatingValue(-1);
        setOfferRatingsFromDBFirstTime({});
      } else {
        setRatingValue(filterRating[0].score);
        setOfferRatingsFromDBFirstTime({});
      }
    }
  };

  useEffect(() => {
    if (ratingValue != -1) {
      getOfferRatingsFromDB();
    }
  }, [ratingValue]);

  ////////////////////////////////////
  useEffect(() => {
    getOfferRatingsFromDBFirstTime();
  }, []);
  ////////////////////////////////////

  useEffect(() => {
    console.log('response create Rating: ', responseCreateRating);
  }, [responseCreateRating]);

  useEffect(() => {
    console.log('response update Ratins: ', responseUpdateRating);
  }, [responseUpdateRating]);

  useEffect(() => {
    createOrUpdateRating(offerRatingsFromDB);
  }, [offerRatingsFromDB]);

  ///////////////////////////////////
  useEffect(() => {
    showFirstTimeRating(offerRatingsFromDBFirstTime);
  }, [offerRatingsFromDBFirstTime]);
  ////////////////////////////////////

  return (
    <div>
      <Rating
        name="Write Ratings For Offer"
        //value={ratingValue}
        value={ratingValue === -1 ? 0 : ratingValue}
        onChange={(event, newRatingValue) => {
          setRatingValue(newRatingValue);
        }}
      />
    </div>
  );
};

export default WriteRatingForOffer;
