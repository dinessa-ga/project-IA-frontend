import { useTheme } from '@mui/material/styles';
import { NavLink} from "react-router-dom";
//import { NavLink, Link } from "react-router-dom";


const Header = () => {
  const theme = useTheme();

  return (
    <header style={{ backgroundColor: theme.palette.primary.main }}>
      <div id="toggle" className="menu-hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </div>
      {/* <Link className="navbar-logo" to="/">
        <img src="" alt="Buddy Writer" />
      </Link> */}
      <nav className="navbar">
        <ul className="navbar-options" color>
          <NavLink className="navbar-options__option" to="/">
            HomePage
          </NavLink>
          <NavLink className="navbar-options__option" to="/LinkPage">
            Comienza aquí
          </NavLink>
          <NavLink className="navbar-options__option" to="/TechPage">
            Proyectos
          </NavLink> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;


