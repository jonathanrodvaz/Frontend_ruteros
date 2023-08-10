import Rating from '@mui/material/Rating';
import { useState } from 'react';

const SimpleRating = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Rating
        name="simple Rating component"
        value={value}
        // value={3}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default SimpleRating;
