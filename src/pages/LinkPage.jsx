import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Header from "../components/Header";

function LinkPage() {
    const [link, setLink] = useState('');

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    const handleSubmit = () => {
        // Aquí puedes manejar el envío del link
        console.log(link);
    };

    return (
        <div>
            <Header />
            <TextField label="Link" variant="outlined" value={link} onChange={handleLinkChange} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Enviar
            </Button>
        </div>
    );
}

export default LinkPage;
