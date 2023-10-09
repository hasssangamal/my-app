import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Avatar, Menu } from '@mui/material';
import photo1 from '../../Assats/IMG_٢٠٢٣٠٦٢٣_١٧٤٢٠١.jpg'
import { Home, HorizontalSplit } from '@mui/icons-material';
const drawerWidth = 240;
const Nav = ({setnoneblock,setvari}) => {
  return (
    <>
        <AppBar position="static"  sx={{
      
          width: {sm:`calc(100% - ${drawerWidth}px)`}, ml: {sx:0,sm:`${drawerWidth}px`} }}>
        <Toolbar component={"nav"} sx={{flexDirection:{xs:'column-reverse',sm:"row"}}}>
    <IconButton sx={{display:{xs:"block",sm:"none"}}}
    onClick={() => {
      setnoneblock('block')
      setvari('temporary')
    }}>
    <HorizontalSplit />
    </IconButton>
    
          <Link href="home" variant="h6" component="div" sx={{ flexGrow: 1, textDecoration:"none",cursor:"pointer","&:hover":{color:"red"} }} color="inherit">
          my expensuves
          </Link>
          <Typography variant="body1" color="inherit"><Button color="inherit">Hassan Gamal</Button></Typography>
          <Avatar alt="Remy Sharp" src={photo1} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
