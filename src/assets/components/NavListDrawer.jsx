import React from 'react'
import { Box } from "@mui/system";
import { List, ListItem, ListItemText, ListItemButton, Divider } from "@mui/material";
import { NavLink } from 'react-router-dom';

const NavListDrawer = ({navLinks, setOpen}) => {
  return (
    <Box sx={{width:250}}>
        
            <nav>
                <List>
                    {
                    navLinks.map(item =>(
                    <ListItem disablePadding key={item.title}>
                        <ListItemButton
                        component={NavLink}
                        to={item.path}
                        onClick={() => setOpen(false)}>


                            <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                   
                    ))}
                </List>
            </nav>
       

    </Box>
  )
}

export default NavListDrawer