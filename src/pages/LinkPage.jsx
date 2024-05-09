import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Header from "../components/Header";
import { sendLink } from "../utils/apiServices"; 

function LinkPage() {
  const [link, setLink] = useState('');

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  }; 

  const handleSubmit = () => {
    sendLink(link)
      .then((data) => {
        // Aquí puedes manejar la respuesta de la API
        console.log(data);
      })
      .catch((error) => {
        // Aquí puedes manejar cualquier error que ocurra durante la solicitud
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Header />
      <div id="link__content" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <TextField id="link__content__textField" label="Link" variant="outlined" value={link} onChange={handleLinkChange} />
      <Button id="link__content__button" variant="contained" color="primary" onClick={handleSubmit}>
        Enviar
      </Button>
      </div>
    </div>
  );
}

export default LinkPage;
