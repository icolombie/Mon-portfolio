import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Container, Box } from '@mui/material';
import projectsData from '../assets/projects.json';
import './Projects.css';

const importAll = (r) => { 
  let images = {}; 
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); }); 
  return images; }; 
  
  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => { 
    setProjects(projectsData);
   }, []);

  return (
    <Container maxWidth="lg" className="container-margin-large">
      <Typography variant="h4" gutterBottom>
        Projets
      </Typography>
      <Box className="projects-container">
        {projects.map(project => (
          <Box className="project-box" key={project.name}>
            <Card>
              <CardContent>
                <img src={images[project.image]?.default} alt={project.name} className="project-image" />
                <Typography variant="h5">
                  {project.name}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
                <Typography variant="subtitle1" className="project-technologies">
                  Technologies utilisées : {project.technologies.join(', ')}
                </Typography>
                <Typography variant="subtitle1" className="project-features">
                  Fonctionnalités implémentées :
                </Typography>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.githubLink} target="_blank">
                  Voir le code
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
