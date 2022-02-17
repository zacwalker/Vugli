import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';


export default function Header(props) {
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" align='center'>
          Virtual Undergrauate Library
        </Typography>
      </Toolbar>
    </AppBar>
  )
}