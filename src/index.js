import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardActions, TextField } from '@mui/material';
import './index.css';

function App() {
  return (
    <div>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" className="flex-grow-1">
            Mon Portfolio
          </Typography>
          <Button color="inherit">Accueil</Button>
          <Button color="inherit">À propos</Button>
          <Button color="inherit">Projets</Button>
          <Button color="inherit">Expérience</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="container-margin">
        <Typography variant="h2" align="center" gutterBottom>
          Bonjour, je suis [Votre Nom]
        </Typography>
        <Typography variant="h5" align="center">
          Développeur Web et Applications
        </Typography>
        <Box textAlign="center" className="box-margin">
          <Button variant="contained" color="primary" size="large">
            Contactez-moi
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" className="container-margin-large">
        <Typography variant="h4" gutterBottom>
          À propos
        </Typography>
        <Typography component="p">
          [Description de votre parcours, compétences et passions]
        </Typography>
      </Container>

      <Container maxWidth="lg" className="container-margin-large">
        <Typography variant="h4" gutterBottom>
          Projets
        </Typography>
        <Box className="projects-container">
          <Box className="project-box">
            <Card>
              <CardContent>
                <Typography variant="h5">
                  Projet 1
                </Typography>
                <Typography variant="body2">
                  Description du projet, technologies utilisées, etc.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="#">
                  Voir le code
                </Button>
                <Button size="small" color="primary" href="#">
                  Voir la démo
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg" className="container-margin-large">
        <Typography variant="h4" gutterBottom>
          Expérience
        </Typography>
        <Typography component="p">
          [Liste de vos expériences professionnelles, stages et formations]
        </Typography>
      </Container>

      <Container maxWidth="lg" className="container-margin-large">
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Box component="form" className="form-container">
          <TextField label="Nom" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
          <Box textAlign="center" className="box-margin">
            <Button variant="contained" color="primary" size="large">
              Envoyer
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
