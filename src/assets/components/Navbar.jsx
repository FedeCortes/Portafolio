import React from 'react';
import NavListDrawer from './NavListDrawer';
import { Button, Drawer, AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material';
import {useState} from "react";
import App from '../../App';
import MenuIcon from "@mui/icons-material/Menu";

const navLinks=[
    {
        title:"Inicio", path:"#"
    },
    {
        title:"Quien Soy?", path:"#"
    },
    {
        title:"Proyectos", path:"#"
    },
    {
        title:"Contacto", path:"#"
    },
]
const NavBar = () => {
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
            key={item}
            component="a"
            href={item.path}>
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
        <NavListDrawer navLinks={navLinks}></NavListDrawer>
    </Drawer>
    </>
  )
}

export default NavBar