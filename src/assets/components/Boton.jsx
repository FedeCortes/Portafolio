import React from 'react';
import { Box } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import GetAppIcon from '@mui/icons-material/GetApp';

const Boton = () => {
  return (
    <Box>
      {/* Botón de WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=1121608606"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '5%',
          left: '5%',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '24px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <FaWhatsapp />
      </a>

      {/* Botón de Descargar CV */}
      <a
        
        href="./CV_Federico_Cortes_2023.pdf" download
  
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '5%',
          backgroundColor: '#3f51b5',
          borderRadius: '20%',
          width: '160px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '24px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <div style={{ fontSize: '17px', fontWeight: 'bold', marginTop: '5px' }}>
          Descarga mi CV
        </div>
        <GetAppIcon />
      </a>
    </Box>
  );
};

export default Boton;