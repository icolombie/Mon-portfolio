import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import backgroundImage from './assets/images/8093.jpg';
import './index.css';


function App() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(false);
  const [showIntro1, setShowIntro1] = useState(false);
  const [showIntro2, setShowIntro2] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const welcomeText = "Bienvenue dans mon Portfolio";
  const introText1 = "Je suis Isabelle COLOMBIE";
  const introText2 = "Développeuse Web et Applications";
  const wordsWelcome = welcomeText.split(" ");
  const wordsIntro1 = introText1.split(" ");
  const wordsIntro2 = introText2.split(" ");
  

  useEffect(() => {
    const timer0 = setTimeout(() => {
      setStartAnimation(true); }, 50); // Délai de démarrage pour l'animation de bienvenue

    const timer1 = setTimeout(() => {
      setHideWelcome(true);
    }, wordsWelcome.length * 400 + 200); // Durée de l'animation du texte de bienvenue

    const timer2 = setTimeout(() => {
      setShowIntro1(true);
    }, wordsWelcome.length * 400 + 400); // Délai pour afficher le texte "Je suis Isabelle COLOMBIE"

    const timer3 = setTimeout(() => {
      setShowIntro2(true);
    }, wordsWelcome.length * 400 + wordsIntro1.length * 400 + 600); // Délai pour afficher le texte "Développeuse Web et Applications"

    const timer4 = setTimeout(() => {
      setShowButton(true);
    }, wordsWelcome.length * 400 + wordsIntro1.length * 400 + wordsIntro2.length * 400 + 800); // Délai pour afficher le bouton

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [wordsWelcome.length, wordsIntro1.length, wordsIntro2.length]);

  const wordVariants = {
    hidden: { opacity: 0, y: -10 }, //ajuster y ou x pour changer la direction des mots (négatif pour haut, positif pour bas)
    visible: (i) => ({
      opacity: 1,
      x: 0,
      rotate: 0, //ajuster pour changer la direction de rotation des mots (négatif pour à gauche, positif pour à droite)
      transition: {
        delay: i * 0.3, //le délai entre les mots
        duration: 0.6, //la durée de l'animation
        ease: "linear" //la courbe de transition
      },
    }),
  };

  useEffect(() => { 
    const buttons = document.querySelectorAll('a[href^="#"]'); 
    const offset = 60; // Ajustez cette valeur selon la hauteur de votre barre de navigation 
    buttons.forEach(button => { 
      button.addEventListener('click', function(event) { 
        event.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset; 
        window.scrollTo({ 
          top: targetPosition, 
          behavior: 'smooth' 
        });
       });
       }); 
       return () => { 
        buttons.forEach(button => { 
          button.removeEventListener('click', null); 
        });
       };
       }, []);

  return (
    <div>
      <Container maxWidth="lg" className="container-margin">
        <AppBar position="static" className="app-bar custom-app-bar">
          <Toolbar>
            <Typography className='welcome' variant="h6">Mon Portfolio</Typography>
            <div className='nav-menu'>
            <Button color="inherit" href="#accueil">Accueil</Button> 
            <Button color="inherit" href="#competences">Compétences</Button>
            <Button color="inherit" href="#projets">Projets</Button>
            <Button color="inherit" href="#parcours">Parcours</Button>
            <Button color="inherit" href="#contact">Contact</Button> 
            </div>
          </Toolbar>
        </AppBar>
      </Container>
      <Container id="accueil" maxWidth="lg" className="background-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <div style={{ visibility: hideWelcome ? 'hidden' : 'visible' }}>
            <AnimatePresence>
              {startAnimation && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  style={{ display: 'inline-block' }}
                >
                  {wordsWelcome.map((word, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                      className='word-spacing'
                      style={{ marginRight: '5px', display: 'inline-block' }}
                    >
                      <Typography variant="h3">{word}</Typography>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div style={{ marginTop: '20px' }}>
            <AnimatePresence>
              {showIntro1 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  style={{ display: 'inline-block' }}
                >
                  {wordsIntro1.map((word, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                      className='word-spacing'
                      style={{ marginRight: '5px', display: 'inline-block' }}
                    >
                      <Typography variant="h3">{word}</Typography>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div style={{ marginTop: '20px' }}>
            <AnimatePresence>
              {showIntro2 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  style={{ display: 'inline-block' }}
                >
                  {wordsIntro2.map((word, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                      className='word-spacing'
                      style={{ marginRight: '5px', display: 'inline-block' }}
                    >
                      <Typography variant="h3">{word}</Typography>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Box textAlign="center" className="box-margin" marginTop="40px">
            <AnimatePresence>
              {showButton && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                >
                  <Button variant="contained" color="primary" size="large">
                    Contactez-moi
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </div>
      </Container>
    


      <Container id="competences" maxWidth="lg" className="container-margin-large">
        <Skills />
      </Container>

      <Container id="projets" maxWidth="lg" className=" projects-section container-margin-large"> 
        <Projects /> 
      </Container>

      <Container id="parcours" maxWidth="lg" className="parcours-section container-margin-large">
        <Typography variant="h4" gutterBottom>
          Mon parcours
        </Typography>
        <Typography component="p">
          Après avoir longtemps travaillé dans l'ADV, j'ai décidé de me reconvertir dans un métier-passion, le développement informatique. J'ai profité d'un break dans ma carrière pour m'initier au code, et j'ai trouvé cela passionnant. J'ai donc suivi la formation de Développeur Web chez Open Classrooms pour l'obtention de la certification *Développeur Informatique - code NSF 326, 326t - Diplôme de niveau 5" du RNCP. Je suis consciente d'être encore assez novice, mais je suis très motivée, j'aime apprendre et j'apprends vite. Je recherche la pratique avant tout, en contrat court ou long, y compris en alternance afin d'approfondir mes connaissances.
        </Typography>
      </Container>
       <Container id="contact" maxWidth="lg" className="container-margin-large">
         <ContactForm /> 
      </Container>
      </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
