import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacto = () => {
  return (
    <Box
      sx={{
        marginTop: '100px',
        marginBottom: '200px',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <Divider sx={{ marginBottom: '1.5rem' }} />

      <Typography variant="body1">
        Si te interesa conocerme más o tenes alguna propuesta, te invito a que me contactes.
      </Typography>

      <Box
  sx={{
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
<Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
    <WhatsAppIcon sx={{ marginRight: '0.5rem' }} /> Mándame un WhatsApp o llamame: +54 9 11-2160-8606
  </Typography>
  
  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
    <EmailIcon sx={{ marginRight: '0.5rem' }} /> Envíame un correo: fedecortes01@gmail.com
  </Typography>
</Box>
    </Box>
  );
};

export default Contacto;