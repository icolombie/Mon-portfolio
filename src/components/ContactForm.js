import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Ce champ est requis.";
    tempErrors.email = email ? "" : "Ce champ est requis.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
      ? ""
      : "L'email n'est pas valide.";
    tempErrors.message = message ? "" : "Ce champ est requis.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_octi4xm",
          "template_3udrkp5",
          {
            name,
            email,
            message,
          },
          "PpfZM6pEu9lJT0CjS"
        )
        .then((response) => {
          setSuccessMessage("Message envoyé avec succès !");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi du message:", error);
        });
    }
  };

  return (
    <Container
      id="contact"
      maxWidth="lg"
      className="container-margin-large contact-form"
    >
      <Typography
        variant="h3"
        gutterBottom
        textAlign={"center"}
        className="contact-title"
      >
        Contact
      </Typography>
      <Box component="form" className="form-container" onSubmit={handleSubmit}>
        <TextField
          className="textfield"
          label="Nom"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          className="textfield"
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          className="textfield"
          label="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
        />
        <Box textAlign="center" className="box-margin">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
          >
            Envoyer
          </Button>
        </Box>
        {successMessage && (
          <Typography
            variant="body1"
            color="green"
            align="center"
            className="success-message"
          >
            {successMessage}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ContactForm;
