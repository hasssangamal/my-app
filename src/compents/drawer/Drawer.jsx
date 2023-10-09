import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Brightness4, Brightness7, Create, Home, Logout, Person3, Settings, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import { addtocart } from '../../redux/cartslic';
import { useSelector, useDispatch } from 'react-redux'
export default function PermanentDrawerLeft({setmode,modee,setnoneblock ,noneblock,vari,setvari}) {

  const {carts}=useSelector((state) => {
    return   state.cart
    })
    console.log(carts);
  
  const drawerWidth = 240;
  const theme =useTheme();
  const loaction =useLocation();


const navigate = useNavigate();
  return (
    

    <>
    
    
    
    
    <Drawer 
        sx={{

      display:{xs:noneblock,sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        
        }}
        variant={vari}
        anchor="left"
        open={true}
        onClose={() => {
          setnoneblock('none')
          setvari('Permanent')
        }}
      >

        {/* <Button variant="text" color="primary" onClick={() => {
    
      setmode(theme.palette.mode ==="light"?"dark":"light")
    
        }} >
          <Brightness4/>
        </Button> */}
      
      
      
        <List>
        <ListItem disablePadding sx={{display:"flex",justifyContent:"center"}}>
        <IconButton sx={{ ml: 1 }} onClick={() => {
    
    setmode(theme.palette.mode ==="light"?"dark":"light")
    localStorage.setItem('v',theme.palette.mode ==="light"?"light":"dark")
  
      }}   color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 sx={{color:"orange"}} /> : <Brightness4 />}
      </IconButton>
        </ListItem>
        <Divider />
          <ListItem disablePadding sx={{background:loaction.pathname ==="/"?"red":null}}> 
            <ListItemButton onClick={() => {
                   navigate("/");
            }}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{background:loaction.pathname ==="/Cart"?"#90A8EE":null}}>
            <ListItemButton onClick={() => {
                   navigate("Cart");
            }}>
              <ListItemIcon>
              <Badge badgeContent={carts.length} color="success">
              <ShoppingCart />
      </Badge>
              
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        
      </Drawer>
    
    </>
        
  
      
  );
}