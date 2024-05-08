import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { NavLink} from "react-router-dom";

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        
        <NavLink className="navbar-options__option" to="/"> <Tab value="one" label="Inicio" /> </NavLink>
        <NavLink className="navbar-options__option" to="/LinkPage"> <Tab value="two" label="Comienza aquí" /></NavLink>
        <NavLink className="navbar-options__option" to="/TechPage"><Tab value="three" label="Tecnologías" /></NavLink>
      
      </Tabs>
    </Box>
  );
}




