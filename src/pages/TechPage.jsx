import { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import Header from "../components/Header";
import { fetchTechnologies, submitTechnologies } from "../utils/apiServices"; 

function TechPage() {
  const [technologies, setTechnologies] = useState([]);
  const [checked, setChecked] = useState({});

  useEffect(() => {
    fetchTechnologies()
      .then((data) => setTechnologies(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleCheckChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {
    const selectedTechnologies = Object.keys(checked).filter((tech) => checked[tech]);
    submitTechnologies(selectedTechnologies)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Header />
      {technologies.map((tech, index) => (
        <FormControlLabel
          key={index}
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
