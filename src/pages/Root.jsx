import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../compents/Navbar/Nav';
import Drawer from '../compents/drawer/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

const Root = () => {
  const [noneblock, setnoneblock] = useState("none");
  const [vari, setvari] = useState("Permanent");
  const [mode, setmode] = useState(localStorage.getItem('v')===null?"light":localStorage.getItem('v')===
  "light"?"dark":"light"
  );
  const drawerWidth = 240;
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    
    },
  });
  return (
  < >
  <ThemeProvider theme={darkTheme}>
      
  <CssBaseline />
<Nav setnoneblock={setnoneblock} setvari={setvari}/>
< Drawer setmode={setmode} mode={mode} setnoneblock={setnoneblock} noneblock={noneblock} vari={vari}
setvari={setvari}
/>
<Box sx={{ ml:{sm:`${drawerWidth}px`} ,display:"flex",justifyContent:'center',marginTop:8}}>

<Outlet   />
</Box>

  </ThemeProvider>
  
  </>
  );
}

export default Root;
