import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';

const Contacto = () => {
  return (
    <Container sx={{ backgroundImage: 'url("../../public/images/green.jpg")', backgroundSize: 'cover' }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Contacto
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <p justifyContent="center">solabango@gmail.com</p>
          <MailIcon />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <a href="https://www.facebook.com/quiero.sol" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{ marginRight: '50px' }} />
            </a>
            <a href="https://www.instagram.com/quiero_sol/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ marginRight: '50px' }} />
            </a>
            <a href="https://wa.me/1558683197" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon  />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacto;
