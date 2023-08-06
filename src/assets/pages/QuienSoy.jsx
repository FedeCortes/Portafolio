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
        marginBottom:'200px',
        backgroundColor: '#f7f7f7', // Color de fondo
        padding: '3rem',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography variant="h2" component="h1" sx={{ marginBottom: "1rem", textAlign: "center" }}>
            ¡Hola! Soy Fede Cortes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Tengo 21 años y vivo en Zona Norte, Buenos Aires, Argentina. Actualmente estoy estudiando la carrera <strong>“Analista de sistemas”</strong>. Además, he realizado cursos sobre desarrollo web y he aprendido <strong>ReactJS</strong> y <strong>Java</strong> en la universidad.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography variant="body1">
           Aparte de mis estudios, he vendido páginas web por mi cuenta y en épocas de finales, brindo <strong>clases particulares</strong> de Java.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Me apasionan las redes sociales, por lo que completé un curso de Community Manager y tengo un emprendimiento de reventa de suplementos deportivos.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography variant="body1">
          En mi tiempo libre generalmente estoy en el gimnasio. Creo que el entrenamiento no solo es bueno para el cuerpo, sino que también es bueno para la disciplina y la determinación.          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Actualmente, estoy en busca de mi primer empleo formal relacionado con mis estudios. ¡No dudes en contactarme!
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default QuienSoy;