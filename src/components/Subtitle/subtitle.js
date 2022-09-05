import Typography from '@mui/material/Typography';

function Subtitle({ subtitle }) {
  return (
    <Typography variant="h4" color="#000" component="div">
      {subtitle}
    </Typography>
  );
}

export default Subtitle;