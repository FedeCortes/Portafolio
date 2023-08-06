import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import imagenPerfil from './fotoperfil.jpeg';

const Inicio = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f4', // Color de fondo
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '200px',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" sx={{ marginBottom: '1rem', color: '#333' }}>
              Federico Cortes
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#666' }}>
              Estudiante de Sistemas
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#666' }}>
              Desarrollador ReactJS
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#666' }}>
              Community Manager
            </Typography>
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
              style={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '20%',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Inicio;