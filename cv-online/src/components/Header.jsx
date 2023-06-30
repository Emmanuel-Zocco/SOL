import React from 'react';
import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-scroll';


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sol Abango
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} // Ajusta este valor según la altura de tu encabezado
              activeClass="active"
              className="header-link"
            >
              Inicio
            </Link>
            <Link
              to="biografia"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} // Ajusta este valor según la altura de tu encabezado
              activeClass="active"
              className="header-link"
            >
              Biografía
            </Link>
            <Link
              to="proyectos"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} // Ajusta este valor según la altura de tu encabezado
              activeClass="active"
              className="header-link"
            >
              Proyectos
            </Link>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} // Ajusta este valor según la altura de tu encabezado
              activeClass="active"
              className="header-link"
            >
              Contacto
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
