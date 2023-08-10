import './ReadOnlyMountainRouteRating.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { getMountainRouteAverageScore } from '../../../util/ratings';

const ReadOnlyMountainRouteRating = ({ mountainRoute }) => {
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const averageScore = getMountainRouteAverageScore(mountainRoute);
    setAverageScore(averageScore);
  }, [mountainRoute]);

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

export default ReadOnlyMountainRouteRating;
