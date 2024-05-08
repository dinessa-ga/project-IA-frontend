import { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import Header from "../components/Header";

function TechPage() {
    const [technologies, setTechnologies] = useState([]);
    const [checked, setChecked] = useState({});

    useEffect(() => {
        // Reemplaza 'api-url' con la URL de tu API
        fetch('api-url')
            .then((response) => response.json())
            .then((data) => setTechnologies(data));
    }, []);

    const handleCheckChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };

    const handleSubmit = () => {
        // Aquí puedes manejar el envío de las tecnologías seleccionadas
        const selectedTechnologies = Object.keys(checked).filter((tech) => checked[tech]);

        // Ahora, 'selectedTechnologies' es un array que contiene solo las tecnologías que el usuario ha seleccionado

        // Aquí puedes hacer lo que necesites con las tecnologías seleccionadas. Por ejemplo, podrías enviarlas a una API:
        fetch('api-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedTechnologies),
        })
            .then((response) => response.json())
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
            {technologies.map((tech, index) => (
                <FormControlLabel
                    key={index} // Añade una prop key aquí
                    control={<Checkbox checked={checked[tech] || false} onChange={handleCheckChange} name={tech} />}
                    label={tech}
                />
            ))}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Confirmar
            </Button>
        </div>
    );
}

export default TechPage;
