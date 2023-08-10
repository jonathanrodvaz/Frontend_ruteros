import './ReadOnlyUserRating.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { getUserAverageScore } from '../../../util/ratings';

const ReadOnlyUserRating = ({ user }) => {
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const averageScore = getUserAverageScore(user);
    setAverageScore(averageScore);
  }, [user]);

  return (
    <Rating
      name="half-rating-read"
      defaultValue={0}
      value={averageScore}
      precision={0.5}
      readOnly
    />
  );
};
export default ReadOnlyUserRating;
