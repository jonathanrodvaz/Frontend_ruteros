import './OrderByRatingSelect.css';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const OrderByRatingSelect = ({ valueByRating, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="orderByRatingSelect-label">Ordenar por valoración</InputLabel>
      <Select
        labelId="orderByRatingSelect-label"
        id="orderByRatingSelect-select"
        value={valueByRating}
        label="Ordenar por valoración"
        onChange={onChange}
      >
        <MenuItem value={'Descendente'}>Descendente</MenuItem>
        <MenuItem value={'Ascendente'}>Ascendente</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderByRatingSelect;
