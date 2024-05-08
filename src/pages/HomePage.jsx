import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import Prueba from "./Prueba"
import { Button } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      
      <div className="landing">
        <div className="landing__content">
          <h1>Hackaton IA</h1>
          <Button
            onClick={() => navigate("/LinkPage")}
            type="button"
            className="landing__button"
            variant="contained"
            color="secondary"
            style={{ color: '#f7fffe', fontWeight:'bold' }} //   código de color para el texto
          >
            Comienza aquí
          </Button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;