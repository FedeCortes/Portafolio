import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const QuienSoy = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="h2" component="h1" sx={{ marginBottom: "50px" }}>
            ¡Hola! Soy Fede Cortes.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            <hr />
            Soy un estudiante de Analista de Sistemas y desarrollador Front-end especializado en ReactJS. Estoy emocionado por comenzar mi carrera profesional en el desarrollo de software.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Mi enfoque principal se centra en el Front-end, utilizando ReactJS para crear interfaces de usuario interactivas y dinámicas. Aunque soy relativamente nuevo en el campo laboral, estoy comprometido a aprender y crecer como profesional.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Además de mi experiencia en ReactJS, también tengo conocimientos en Java. Me considero una persona sociable, proactiva y disfruto trabajar en equipo.
            <br />
            <hr />
            Actualmente tengo un emprendimiento donde vendo suplementos y por otro lado brindo clases particulares de Java.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Para complementar mi formación y mantenerme actualizado en las últimas tendencias y herramientas del mundo digital, he realizado cursos de desarrollo web y community management.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Estoy entusiasmado por poner en práctica mis habilidades y conocimientos en proyectos desafiantes. Si estás buscando a alguien con pasión por el desarrollo Front-end y un enfoque en la excelencia, ¡no dudes en contactarme!
            <hr />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuienSoy;