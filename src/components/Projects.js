import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import projectsData from "../assets/projects.json";
import ImageModal from "./ImageModal";
import "./Projects.css";

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|svg|webp)$/)
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleImageClick = (imagePaths, index) => {
    setCurrentImages(imagePaths);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Container maxWidth="lg" className="container-margin-large main-container">
      <Typography variant="h4" gutterBottom className="title">
        Quelques projets de formation
      </Typography>
      <Box className="projects-container">
        {projects.map((project) => (
          <Accordion key={project.name} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className="accordion-summary"
            >
              <Typography variant="h5">{project.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  {project.description}
                </Typography>
                <Divider />
                <Typography
                  variant="subtitle1"
                  className="project-technologies"
                >
                  Technologies utilisées :
                </Typography>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <Divider />
                <Typography variant="subtitle1" className="project-features">
                  Compétences acquises par l'implémentation de fonctionnalités :
                </Typography>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.githubLink}
                    target="_blank"
                  >
                    Voir le code
                  </Button>
                </CardActions>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="center"
                  gap={2}
                  marginTop={2}
                >
                  {project.images.map((image, index) => (
                    <Box
                      key={index}
                      width={{ xs: "100%", sm: "45%", md: "30%" }}
                      padding={1}
                      className="project-image-container"
                    >
                      <img
                        src={images[image]?.default}
                        alt={`${image.split(".")[0]} - ${project.description}`}
                        className="project-image"
                        onClick={() =>
                          handleImageClick(
                            project.images.map((img) => images[img]?.default),
                            index
                          )
                        }
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <ImageModal
        open={modalOpen}
        onClose={handleClose}
        images={currentImages}
        currentImageIndex={currentImageIndex}
      />
    </Container>
  );
};

export default Projects;
