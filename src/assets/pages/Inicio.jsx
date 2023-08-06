import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import imagenPerfil from './fotoperfil.jpeg';

const Inicio = () => {
  return (
    <Grid container style={{ marginBottom: '200px' }} spacing={4}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ marginBottom: '1rem' }}>
            Federico Cortes
          </Typography>
          <Typography variant="subtitle1">Estudiante de Sistemas</Typography>
          <Typography variant="subtitle1">Desarrollador ReactJS</Typography>
          <Typography variant="subtitle1">Community Manager</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img
            src={imagenPerfil}
            alt="Foto de perfil"
            style={{ width: '100%', maxWidth: '300px', borderRadius: '20%' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inicio;