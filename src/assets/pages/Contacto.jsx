import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contacto = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', marginBottom:'200px',}}>
      <Typography variant="h2" component="h1">
        ¡Contáctame!
      </Typography>
      <Typography variant="body1">
        Si estás interesado en colaborar en un proyecto, tienes alguna pregunta o simplemente quieres saludar, no dudes en contactarme.
      </Typography>
      <Typography variant="body1">
        Puedes enviarme un correo electrónico a fedecortes01@gmail.com o completar el formulario de contacto a continuación. ¡Espero con ansias escuchar de ti!
      </Typography>
      <Paper sx={{ p: 2, mt: 3, width: 400 }}>
        <form>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mensaje"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="contained" fullWidth>
            Enviar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contacto;