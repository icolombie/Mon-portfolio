import React, { useState } from 'react';
import { Box, Button, Container, Typography, Modal, Tooltip } from '@mui/material';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import htmlLogo from '../assets/images/html-logo.png'; 
import cssLogo from '../assets/images/css-logo.png';
import jsLogo from '../assets/images/javascript-logo.png'; 
import reactLogo from '../assets/images/react-logo.png'; 
import sassLogo from '../assets/images/sass-logo.png'; 
import nodejsLogo from '../assets/images/nodejs-logo.png'; 
import expressLogo from '../assets/images/express-logo.png'; 
import mongodbLogo from '../assets/images/mongodb-logo.png'; 
import skillsMap from '../assets/images/skills-map2.jpg'; 
import './Skills.css'; 

const skillData = [ 
    { name: 'HTML', logo: htmlLogo }, 
    { name: 'CSS', logo: cssLogo }, 
    { name: 'JavaScript', logo: jsLogo }, 
    { name: 'React', logo: reactLogo }, 
    { name: 'Sass', logo: sassLogo }, 
    { name: 'Node.js', logo: nodejsLogo }, 
    { name: 'Express', logo: expressLogo }, 
    { name: 'MongoDB', logo: mongodbLogo }
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
        {skillData.map(skill => (
          <Box key={skill.name} className="skill-item">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <Typography variant="subtitle1">{skill.name}</Typography>
          </Box>
        ))}
      </Box>
      <Tooltip title="Voir la carte des compétences" arrow>
        <Button variant="contained" color="primary" className="skills-button" onClick={handleOpen}>
          +
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
          <TransformWrapper> 
            <TransformComponent> 
              <img src={skillsMap} alt="Carte des Compétences" className="skills-map" /> 
            </TransformComponent> 
          </TransformWrapper>
        </Box> 
      </Modal> 
    </Container>
    );
  };

export default Skills;
