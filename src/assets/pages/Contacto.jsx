import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Contacto = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Typography variant="h2" component="h1">
        ¡Contáctame!
      </Typography>
      <Typography variant="body1">
        Si estás interesado en colaborar en un proyecto, tienes alguna pregunta o simplemente quieres saludar, no dudes en contactarme.
      </Typography>
      <Typography variant="body1">
        Puedes enviarme un correo electrónico a fedecortes01@gmail.com o completar el formulario de contacto a continuación. ¡Espero con ansias escuchar de ti!
      </Typography>
      {/* Aquí puedes agregar el formulario de contacto o cualquier otra información de contacto que desees mostrar */}
    </Box>
  );
};

export default Contacto;