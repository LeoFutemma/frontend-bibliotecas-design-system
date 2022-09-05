import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Planta from '../../assets/planta.png';
import './styles.css';

export default function ProductCard() {
  return (
    <div className='container-productCard'>
      <Card sx={{ maxWidth: 232 }}>
        <CardActionArea style={{ border: "none" }}>
          <CardMedia
            component="img"
            height="240"
            image={Planta}
            alt="planta"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nome do Produto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
            </Typography>

            <div className='unitPrice'>
              <Typography variant="caption" component="div" style={{
                fontFamily: "Roboto",
                fontSize: 12,
                letterSpacing: 1,
                color: "#656565",
                opacity: 0.87
              }}>
                3 UNIDADES
              </Typography>

              <Typography variant="caption" component="div" style={{
                fontFamily: "Roboto",
                fontSize: 13,
                letterSpacing: 0.07,
                color: "#000",
                opacity: 0.87
              }}>
                R$ 99.99
              </Typography>
            </div>

          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
