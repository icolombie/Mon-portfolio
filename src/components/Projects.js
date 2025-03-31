import React, { useEffect, useState, useRef } from "react";
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
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import projectsData from "../assets/projects.json";
import ImageModal from "./ImageModal";
import "./Projects.css";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|svg|webp)$/)
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const accordionRefs = useRef({});

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

  const handleToggleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleScrollToAccordion = (panel) => {
    if (accordionRefs.current[panel]) {
      accordionRefs.current[panel].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseAccordion = (panel) => {
    setExpanded(false);
    handleScrollToAccordion(panel);
  };

  return (
    <Container maxWidth="lg" className="container-margin-large main-container">
      <Typography variant="h3" gutterBottom className="title">
        Quelques projets de formation
      </Typography>
      <Box className="projects-container">
        {projects.map((project) => (
          <Accordion
            key={project.name}
            slotProps={{
              timeout: 600,
            }}
            expanded={expanded === project.name}
            onChange={handleToggleAccordion(project.name)}
            className="accordion"
            ref={(el) => (accordionRefs.current[project.name] = el)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className="accordion-summary"
            >
              <Typography variant="h5" className="project-title">
                {project.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <CardContent id="project-card-content">
                <Typography variant="body1" color="secondary" gutterBottom>
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
                    href={project.githubLink}
                    target="_blank"
                    id="github-button"
                  >
                    Voir le github du projet
                  </Button>
                </CardActions>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="flex-start"
                  gap={2}
                  marginTop={2}
                  id="project-images-container"
                  className="project-images-container"
                >
                  {project.images.map((imageObj, index) => (
                    <Box
                      key={index}
                      width={{ xs: "100%", sm: "45%", md: "30%" }}
                      padding={1}
                      className="project-image-container"
                    >
                      <Typography
                        variant="subtitle1"
                        align="center"
                        fontWeight="500"
                        color=" #ffffff"
                      >
                        {imageObj.title}
                      </Typography>
                      <Box className="project-image-wrapper">
                        <img
                          src={images[imageObj.src]?.default}
                          alt={imageObj.title}
                          loading="lazy"
                          className="project-image"
                          onClick={() =>
                            handleImageClick(
                              project.images.map(
                                (img) => images[img.src]?.default
                              ),
                              index
                            )
                          }
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        align="center"
                        fontStyle="italic"
                        color=" #ffffff"
                      >
                        {imageObj.comment}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box textAlign="center" marginTop={2}>
                  <IconButton
                    onClick={() => handleCloseAccordion(project.name)}
                    color="primary"
                  >
                    <ExpandLessIcon />
                  </IconButton>
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
