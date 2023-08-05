import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import imagenPerfil from './fotoperfil.jpeg';

const Inicio = () => {
  return (
    <Grid container marginTop={20} style={{marginBottom:'200px',}}>
      <Grid item xs={12} sm={6}>
        <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Typography variant="h2">Federico Cortes</Typography>
          <Box marginTop={1}>
            <Typography variant="p" sx={{fontSize:"23px"}}>Estudiante de Sistemas</Typography>
          </Box>
          <Box marginTop={1}>
            <Typography variant="p" sx={{fontSize:"23px"}}>Desarrollador ReactJS</Typography>
          </Box>
          <Box marginTop={1}>
            <Typography variant="p" sx={{fontSize:"23px"}}>Community manager</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <img src={imagenPerfil} alt="Foto de perfil" style={{width:"300px", borderRadius: "20%", border:"black"}}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inicio;