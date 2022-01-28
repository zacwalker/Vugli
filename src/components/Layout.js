import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from './Navbar';
// import Header from './Header'


const drawerWidth = 240;

function Layout(props) {



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <Header /> */}
      {/* appbar */}
      <Navbar />
      {/* main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default Layout;
