import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Card, CardContent, CardActions, Button, Typography, Container, Box, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import projectsData from '../assets/projects.json';
import './Projects.css';

const importAll = (r) => { 
  let images = {}; 
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); }); 
  return images; 
};

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => { 
    setProjects(projectsData);
  }, []);

  return (
    <Container maxWidth="lg" className="container-margin-large main-container">
      <Typography variant="h4" gutterBottom className='title'>
        Derniers projets de formation
      </Typography>
      <Box className="projects-container">
        {projects.map(project => (
          <Accordion key={project.name} className="accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="accordion-summary">
              <Typography variant="h5">
                {project.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  {project.description}
                </Typography>
                <Divider />
                <Typography variant="subtitle1" className="project-technologies">
                  Technologies utilisées :
                </Typography>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <Divider />
                <Typography variant="subtitle1" className="project-features">
                  Fonctionnalités implémentées :
                </Typography>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <CardActions>
                  <Button size="small" color="primary" href={project.githubLink} target="_blank">
                    Voir le code
                  </Button>
                </CardActions>
                <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={2} marginTop={2}>
                  {project.images.map((image, index) => (
                    <Box key={index} width={{ xs: '100%', sm: '45%', md: '30%' }} padding={1} className="project-image-container">
                      <img src={images[image]?.default} alt={project.name} className="project-image" />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
