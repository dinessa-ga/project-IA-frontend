import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button } from '@mui/material';

const HomePage = () => {
   const navigate = useNavigate();
    return (
      <>
        <Header />
        <div className="landing">
          <div className="landing__content">
            <h1>Hackaton IA</h1>
            <Button onClick={() => navigate("/LinkPage")} type="button" color="secondary">
              Comienza Ahora
            </Button>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  };
  
  export default HomePage;