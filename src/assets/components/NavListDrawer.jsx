import React from 'react'
import { Box } from "@mui/system";
import { List, ListItem, ListItemText, ListItemButton, Divider } from "@mui/material";

const NavListDrawer = ({navLinks}) => {
  return (
    <Box sx={{width:250}}>
        
            <nav>
                <List>
                    {
                    navLinks.map(item =>(
                    <ListItem disablePadding key={item.title}>
                        <ListItemButton
                        component="a"
                        href={item.path}>
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