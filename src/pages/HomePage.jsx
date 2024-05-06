//import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
   // const navigate = useNavigate();
    return (
      <>
        <Header />
        <div className="landing">
          <div className="landing__content">
            <h1>Stay updated with your technical documentation!</h1>
            {/* <button onClick={() => navigate("/register")} type="button" className="landing__button-register">
              Register
            </button> */}
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  };
  
  export default HomePage;