import Alert from '@mui/material/Alert';

export default function Modal() {
  return (
    <Alert variant="filled" severity="success" style={{
      padding: "8px 16px",
      width: 400,
      position: "fixed",
      bottom: 65,
      left: 800
    }}>
      Produto inserido com sucesso!
    </Alert>
  );
}