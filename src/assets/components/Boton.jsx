import React from 'react';
import { Box } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import GetAppIcon from '@mui/icons-material/GetApp';

const Boton = () => {
  return (
    <Box>
      {/* Botón de WhatsApp */}
      <div style={{
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
      }}>
        <FaWhatsapp />
      </div>

      {/* Botón de Descargar CV */}
      <div style={{
        position: 'fixed',
        bottom: '5%',
        right: '5%',
        backgroundColor: '#3f51b5',
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
      }}>
        <GetAppIcon />
        <div style={{ fontSize: '12px', marginTop: '5px' }}>CV</div>
      </div>
    </Box>
  );
};

export default Boton;




