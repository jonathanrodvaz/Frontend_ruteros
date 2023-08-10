import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { useAuth } from '../../../contexts/authContext';
import {
  createRating,
  getByReference,
  updateRating,
} from '../../../services/API_proyect/rating.service';

const WriteRating = ({ userRating }) => {
  const { user } = useAuth(); // el user que me esta en la prop es a quien hago el rating
  const [value, setValue] = useState(null);
  const [initRes, setInitRes] = useState([]);
  const [res, setRes] = useState({});
  const postRating = async () => {
    setInitRes(await getByReference('User', userRating._id));
  };

  const toggleUpdateAndCreate = async (initRes) => {
    console.log('entro a la funcion toggle');
    console.log(initRes);
    console.log(user);

    if (initRes?.data) {
      console.log('entro en el if');
      const filterRating = initRes.data.filter((rating) => rating.owner == user._id);
      console.log(filterRating);
      if (filterRating.length == 0) {
        setRes(await createRating({ score: value, referenceDeveloper: userRating._id }));
        setInitRes([]);
      } else {
        setRes(
          await updateRating(
            { score: value, referenceDeveloper: userRating._id },
            filterRating[0]._id,
          ),
        );
        setInitRes([]);
      }
    }

    // setRes(await updateRating({
    //     "score": value,
    //     "referenceDeveloper": userRating._id
    // }))
  };

  useEffect(() => {
    if (value != null) {
      postRating();
    }
  }, [value]);

  useEffect(() => {
    console.log(res);
  }, [res]);

  useEffect(() => {
    if (initRes.toString() != '[]') {
      console.log('entro useEffect initRes');
      toggleUpdateAndCreate(initRes);
    }
  }, [initRes]);

  return (
    <div>
      <Rating
        name="simple Rating component"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default WriteRating;
