import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#434343" }}>
        <Toolbar variant="dense" style={{ padding: "12px 16px" }}>
          <img src={Logo} alt='logo' />
          <Typography variant="h6" color="#AAA5A5" component="div"
            style={{
              fontFamily: 'Salsa',
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "0.4px",
              marginLeft: "17px"
            }}>
            MARKET CUBOS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
