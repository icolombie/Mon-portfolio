import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Tooltip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import backgroundImage from "./assets/images/21.webp";
import cv from "./assets/CV.pdf";
import "./index.css";

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    const timer0 = setTimeout(() => {
      setStartAnimation(true);
    }, 500);

    const timer1 = setTimeout(() => {
      if (window.innerWidth > 768) {
        setHideWelcome(true);
      }
    }, wordsWelcome.length * 400 + 400);

    const timer2 = setTimeout(() => {
      setShowIntro1(true);
    }, wordsWelcome.length * 400 + 400);

    const timer3 = setTimeout(() => {
      setShowIntro2(true);
    }, wordsWelcome.length * 300 + wordsIntro1.length * 400 + 400);

    const timer4 = setTimeout(() => {
      setShowButton(true);
    }, wordsWelcome.length * 400 + wordsIntro1.length * 400 + wordsIntro2.length * 400 + 400);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [wordsWelcome.length, wordsIntro1.length, wordsIntro2.length]);

  const wordVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "linear",
      },
    }),
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('a[href^="#"]');
    const offset = 60;
    buttons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      });
    });
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", null);
      });
    };
  }, []);

  return (
    <div>
      <Container id="navbar" maxWidth="lg" className="container-margin">
        <AppBar position="static" className="app-bar custom-app-bar">
          <Toolbar>
            <Typography className="my-portfolio" variant="h6">
              Développeuse Web à Montauban (82)
            </Typography>
            <div className="nav-menu">
              <Button color="inherit" href="#accueil">
                Accueil
              </Button>
              <Button color="inherit" href="#competences">
                Compétences
              </Button>
              <Button color="inherit" href="#projets">
                Projets
              </Button>
              <Button color="inherit" href="#parcours">
                Parcours
              </Button>
              <Button color="inherit" href="#contact">
                Contact
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Container>

      <Container id="accueil" maxWidth="lg" className="background-container">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
        <div className="animation-text">
          <div className={hideWelcome ? "hidden" : "visible"}>
            <AnimatePresence>
              {startAnimation && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  style={{ display: "inline-block" }}
                >
                  {wordsWelcome.map((word, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                      className="word-spacing"
                    >
                      <Typography
                        variant={isMobile ? "h6" : "h3"}
                        className="custom-typography"
                      >
                        {word}
                      </Typography>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="animated-title">
            <AnimatePresence>
              {showIntro1 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  style={{ display: "inline-block" }}
                >
                  {wordsIntro1.map((word, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                      className="word-spacing"
                    >
                      <Typography
                        variant={isMobile ? "h6" : "h3"}
                        className="custom-typography"
                      >
                        {word}
                      </Typography>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="animated-title">
            <AnimatePresence>
              {showIntro2 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  style={{ display: "inline-block" }}
                >
                  {wordsIntro2.map((word, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                      className="word-spacing"
                    >
                      <Typography
                        variant={isMobile ? "h6" : "h3"}
                        className="custom-typography"
                      >
                        {word}
                      </Typography>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Box className="box-margin">
            <AnimatePresence>
              {showButton && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                >
                  <Button
                    className="contact-button"
                    id="contact-button"
                    variant="contained"
                    color="primary"
                    size="large"
                    href="#contact"
                  >
                    Contactez-moi
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </div>
      </Container>

      <Container
        id="competences"
        maxWidth="lg"
        className="container-margin-large"
      >
        <Skills />
      </Container>

      <Container
        id="projets"
        maxWidth="lg"
        className=" projects-section container-margin-large"
      >
        <Projects />
      </Container>

      <Container
        id="parcours"
        maxWidth="lg"
        className="parcours-section container-margin-large"
      >
        <Typography
          variant={isMobile ? "h6" : "h3"}
          gutterBottom
          className="parcours"
        >
          Mon parcours
        </Typography>
        <Typography component="p">
          Après une carrière enrichissante dans le domaine commercial et
          l'Administration des Ventes, j'ai choisi de me reconvertir dans le
          Développement Web pour allier créativité et technique. J'ai suivi avec
          succès le parcours Développement Web chez OpenClassrooms, obtenant la
          certification Développeur Informatique (code NSF 326, 326t), un
          diplôme reconnu de niveau 5 au RNCP.
          <br />
          Passionnée par le front-end pour ses aspects esthétiques et
          interactifs, je possède également des compétences en back-end, me
          permettant d’avoir une vision globale des projets web. Rigoureuse et
          organisée, j'apprécie particulièrement le travail en équipe, où je
          peux m’investir pleinement pour atteindre des objectifs communs.
          Autonome, fiable et profondément motivée, je suis prête à relever de
          nouveaux défis dans ce domaine en constante évolution.
        </Typography>
        <div className="icon-container">
          <Tooltip title="CV">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <IconButton id="cv-button">CV</IconButton>
            </a>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/Isabelle-Colombie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="GitHub">
            <a
              href="https://github.com/icolombie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </Tooltip>
        </div>
      </Container>

      <Container id="contact" maxWidth="lg" className="container-margin-large">
        <ContactForm />
      </Container>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
