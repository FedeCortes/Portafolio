import React from 'react';
import NavListDrawer from './NavListDrawer';
import { Button, Drawer, AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const NavBar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar sx={{ height: '100px', alignItems:'center', justifyContent:'center', backgroundColor:"black"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <MenuIcon sx={{color:"white"}}/>
          </IconButton>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' }, '& > * + *': { marginLeft: '20px' },  }}>
            {navLinks.map((item) => (
              <Button color="inherit" key={item.title} component={NavLink} to={item.path} sx={{marginLeft:'30px'}}>
              <Typography sx={{ fontSize: '30px', color:"white" }}>  {item.title}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default NavBar;