import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function AddProductsButton() {
  return (
    <Button variant="contained">
      <Link to='/add-product' style={{ textDecoration: "none", color: "white" }}>
        Adicionar produto
      </Link>
    </Button>
  );
}

export default AddProductsButton;