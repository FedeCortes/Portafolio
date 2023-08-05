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
            Tengo 21 años, y  estoy estudiando la carrera <strong>“Analista de sistemas”</strong>. Hice varios cursos sobre desarrollo web y además aprendi ReactJS y Java en la universidad.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
           Por mi cuenta vendi paginas web, y tambien en epocas de finales doy <strong>clases particulares</strong> de Java.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Me gustan las redes sociales, por lo que hice un curso de Community Manager y ademas tengo un emprendimiento de suplementos deportivos.
            <br />
            <hr />

          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
          En mi tiempo libre generalmente estoy en el gimnasio de Crossfit. Creo que el entrenamiento no solo es beneficioso para el cuerpo, sino que también es bueno para la disciplina y la determinación.💪
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={8}>
          <Typography variant="body1">
            Actualmente me encuentro buscando mi primer empleo formal relacionado a mis estudios, ¡no dudes en contactarme!
            <hr />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuienSoy;