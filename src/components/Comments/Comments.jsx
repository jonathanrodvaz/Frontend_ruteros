import { Avatar, Divider, Grid } from '@mui/material';

import ToggleButton from '../Toggle/Toggle';

const Comments = ({ comment, setComentsByChild }) => {
  const { owner, commentContent, createdAt } = comment;

  const creationDate = new Date(createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={owner?.image} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: 'left' }}>{owner?.name}</h4>
          <p style={{ textAlign: 'left' }}>{commentContent}</p>
          <p style={{ textAlign: 'left', color: 'gray' }}>{formattedDate}</p>{' '}
          <div>
            <ToggleButton comment={comment} setAllElementByPather={setComentsByChild} />
          </div>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
    </>
  );
};

export default Comments;
