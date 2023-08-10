import './ReadOnlyOfferRating.css';

import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import { getOfferAverageScore } from '../../../util/ratings';

const ReadOnlyOfferRating = ({ offer }) => {
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const averageScore = getOfferAverageScore(offer);
    setAverageScore(averageScore);
  }, [offer]);

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

export default ReadOnlyOfferRating;
