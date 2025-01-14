import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Modal,
  Tooltip,
  IconButton,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import htmlLogo from "../assets/images/html-logo.webp";
import cssLogo from "../assets/images/css-logo.webp";
import jsLogo from "../assets/images/js-logo.webp";
import reactLogo from "../assets/images/react-logo.webp";
import sassLogo from "../assets/images/sass-logo.webp";
import nodejsLogo from "../assets/images/nodejs-logo.webp";
import expressLogo from "../assets/images/express-logo.webp";
import mongodbLogo from "../assets/images/mongodb-logo.webp";
import skillsMap from "../assets/images/skills-map.webp";
import "./Skills.css";

const skillData = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Sass", logo: sassLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "Express", logo: expressLogo },
  { name: "MongoDB", logo: mongodbLogo },
];

const Skills = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container className="skills-container">
      <Typography variant="h4" gutterBottom align="center">
        Mes Compétences
      </Typography>
      <Box className="skills-list">
        {skillData.map((skill) => (
          <Box key={skill.name} className="skill-item">
            <img
              src={skill.logo}
              alt={`${skill.name} -logo`}
              className="skill-logo"
            />
            <Typography variant="subtitle1">{skill.name}</Typography>
          </Box>
        ))}
      </Box>
      <Tooltip title="Voir la carte des compétences" arrow>
        <Button
          variant="contained"
          color="primary"
          className="skills-button"
          onClick={handleOpen}
        >
          <WorkspacePremiumIcon />
        </Button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="skills-map-modal"
        aria-describedby="skills-map-modal-description"
        className="skills-modal"
      >
        <Box className="skills-modal-content">
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <TransformWrapper>
            <TransformComponent>
              <img
                src={skillsMap}
                alt="Carte des Compétences"
                className="skills-map"
              />
            </TransformComponent>
          </TransformWrapper>
        </Box>
      </Modal>
    </Container>
  );
};

export default Skills;
