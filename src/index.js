import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardActions, TextField } from '@mui/material';
import Skills from './components/Skills';
import backgroundImage from './assets/fonds.avif';
import './index.css';

function App() {
  return (
    <div>
    <Container maxWidth="lg" className="container-margin">
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" className="flex-grow-1">
            Mon Portfolio
          </Typography>
          <Button color="inherit" href='#accueil'>Accueil</Button>
          <Button color="inherit" href='#parcours'>Parcours</Button>
          <Button color="inherit" href='#competences'>Compétences</Button>
          <Button color="inherit" href='#projets'>Projets</Button>
          <Button color="inherit" href='#a-propos'>A propos</Button>
          <Button color="inherit" href='#contact'>Contact</Button>
        </Toolbar>
      </AppBar>
    </Container>

    <Container id="accueil" maxWidth="lg" className="background-container"> 
      <img src={backgroundImage} alt="Background" className="background-image" />
        <Typography variant="h2" align="center" gutterBottom>
          Bonjour, je suis Isabelle COLOMBIE
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

      <Container id="parcours" maxWidth="lg" className="container-margin-large">
        <Typography variant="h4" gutterBottom>
          Mon parcours
        </Typography>
        <Typography component="p">
          Après une longue carrière dans l'ADV, j'ai décidé de me reconvertir dans un métier-passion, le développement informatique. Pourquoi ce choix ? Dans l'entreprise que j'ai quitté dernièrement, notre informaticien créait des programmes de statistiques en Java, et en voyant ces lignes de codes, je pensais que c'était soit très ennuyeux soit très intéressant. J'ai décidé d'en avoir le coeur net en profitant de cette pause dans ma carrière pour m'initier au code, et j'ai trouvé cela passionnant. Voilà pourquoi je me suis inscrite à une formation de Développeur Web chez Open Classrooms. Je suis consciente d'avoir un profil atypique pour ce job, et d'être assez novice même après cette formation, mais je suis très motivée, j'aime apprendre et j'apprends vite. Ce que je cherche, c'est la pratique avant tout, en contrat court ou long, y compris en alternance afin d'approfondir mes connaissances.
        </Typography>
      </Container>

      <Container id="competences" maxWidth="lg" className="container-margin-large">
        <Skills />
      </Container>

      <Container id="projets"  maxWidth="lg" className="container-margin-large">
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

      <Container id="a-propos" maxWidth="lg" className="container-margin-large">
        <Typography variant="h4" gutterBottom>
          A propos
        </Typography>
        <Typography component="p">
          [Personnel]
        </Typography>
      </Container>

      <Container id="contact" maxWidth="lg" className="container-margin-large">
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
