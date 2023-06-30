import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const FeaturedProjects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setOpen(false);
  };

  const projects = [
    {
      imageSrc: 'https://tse2.mm.bing.net/th?id=OIP.h9e7c9gh8o799TY2km7wZQHaJr&pid=Api&P=0&h=180',
      title: 'Título del proyecto 1',
      description: 'una obra imposible de perderse',
    },
    {
      imageSrc: 'https://tse3.mm.bing.net/th?id=OIP.Ie0J3CMUo6bsX7vtF73K4gHaFj&pid=Api&P=0&h=180',
      title: 'Título del proyecto 2',
      description: 'una gran gran gran obra de arte',
    },
    {
      imageSrc: 'https://tse2.mm.bing.net/th?id=OIP.QLaia4APzBXAGfgs28cLMgHaFj&pid=Api&P=0&h=180',
      title: 'Título del proyecto 3',
      description: 'simplemente maravillosa',
    },
  ];

  return (
    <Container>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Proyectos Destacados
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img
              src={project.imageSrc}
              alt={`Proyecto ${index + 1}`}
              onClick={() => handleOpenModal(project)}
              style={{ cursor: 'pointer', maxWidth: '100%' }}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>{selectedProject?.title}</DialogTitle>
        <DialogContent sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={selectedProject?.imageSrc}
            alt={selectedProject?.title}
            style={{ maxWidth: '50%', marginRight: '16px' }}
          />
          <Typography variant="body1">{selectedProject?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default FeaturedProjects;
