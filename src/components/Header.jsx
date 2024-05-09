import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";
import { styled } from '@mui/system';

const StyledTab = styled((props) => <Tab component={NavLink} {...props} />)({
  '&.Mui-selected': {
    color: 'primary',
    fontWeight: 'bold',
  },
});

export default function ColorTabs() {
  const location = useLocation();

  return (
    <Box sx={{ width: '100%' }} id="box__content">
      <Tabs
        value={location.pathname}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <StyledTab value="/" label="Inicio" to="/" className="navbar-options__option" />
        <StyledTab value="/LinkPage" label="Comienza aquí" to="/LinkPage" className="navbar-options__option" />
        <StyledTab value="/TechPage" label="Proyectos" to="/TechPage" className="navbar-options__option" />
      </Tabs>
    </Box>
  );
}
