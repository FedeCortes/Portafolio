import React from 'react';
import NavListDrawer from './NavListDrawer';
import { Button, Drawer, AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material';
import {useState} from "react";
import App from '../../App';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';


const NavBar = ({navLinks}) => {
    const [open, setOpen]= useState(false)
  return (
    <>
    <AppBar>
        <Toolbar>
            <IconButton
            color="inherit"
            size="large"
            onClick={()=> setOpen(true)}
            sx={{display:{xs:"flex", sm:"none"}}}
            >
                <MenuIcon/>
                
            </IconButton>
            <Typography variant="h6" sx={{flexGrow:"1"}}>Fede Cortes</Typography>
            
            <Box sx={{display:{xs:"none", sm:"block"}}}>
           {navLinks.map(item=>(
            <Button 
            color="inherit"
            key={item.title}
            component={NavLink}
            to={item.path}>
                {item.title}
            </Button>
           ))
}
        </Box>  
        </Toolbar>
    </AppBar>

    
    <Drawer 
    open= {open}
    anchor="left"
    onClose={()=> setOpen(false)}
    sx={{display:{xs:"flex", sm:"none"}}}
    >
        <NavListDrawer navLinks={navLinks} setOpen={setOpen}></NavListDrawer>
    </Drawer>
    </>
  )
}

export default NavBar