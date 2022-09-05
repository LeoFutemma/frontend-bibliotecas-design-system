import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import './styles.css';

export default function AddProductForm() {
  return (
    <div className='container-form'>
      <TextField
        label="Nome do produto"
        sx={{ width: 392 }}
        defaultValue=" "
        variant="standard"
        style={{ marginTop: 70 }}
      />

      <div style={{ margin: "48px 0" }}>
        <TextField
          label="Preço"
          sx={{ width: 184 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
          variant="standard"
          style={{ marginRight: 24 }}
        />

        <TextField
          label="Estoque"
          sx={{ width: 184 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">Un</InputAdornment>,
          }}
          variant="standard"
        />
      </div>

      <TextField
        label="Descrição do produto"
        sx={{ width: 392 }}
        defaultValue=" "
        variant="standard"
        style={{ marginBottom: 48 }}
      />

      <TextField
        label="Imagem"
        sx={{ width: 392 }}
        defaultValue=" "
        variant="standard"
      />
    </div>
  );
}
