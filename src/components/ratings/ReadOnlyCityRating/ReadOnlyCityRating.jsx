import './ReadOnlyCityRating.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { getCityAverageScore } from '../../../util/ratings';

const ReadOnlyCityRating = ({ city }) => {
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const averageScore = getCityAverageScore(city);
    setAverageScore(averageScore);
  }, [city]);

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

export default ReadOnlyCityRating;
