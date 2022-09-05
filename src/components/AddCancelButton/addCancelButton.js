import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function AddCancelButton({ modal, setModal }) {
  return (
    <div style={{ borderTop: "1px solid #BFBFBF", marginTop: 131, paddingTop: 35 }}>
      <Stack spacing={2} direction="row">
        <Button variant="text">
          <Link to='/' style={{ textDecoration: "underline", color: "#007DFF" }}>
            CANCELAR
          </Link>
        </Button>
        <Button variant="contained" onClick={() => setModal(!modal)}>ADICIONAR PRODUTO</Button>
      </Stack>
    </div>
  );
}
