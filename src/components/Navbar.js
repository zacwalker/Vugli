import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useHistory, useLocation } from 'react-router-dom';
// import Header from './Header';
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;

function Navbar(props) {
  const history = useHistory();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const active = "#f4f4f4";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      text: 'My Posts',
      icon: <SubjectOutlined color="primary" />,
      path: '/'
    },
    {
      text: 'Create Post',
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: '/create'
    },
  ];

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <div id="drawer-header" backgroundcolor="secondary">
        <Typography variant="h5" padding={2} align='center' color="primary">
          VUgLi
        </Typography>
      </div>
      <Divider />
      {/* links/list section */}
      <List>
        {menuItems.map((item) => (

          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            sx={location.pathname === item.path ? { backgroundColor: active } : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* second list of links here */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* <AppBar
        position="fixed"
        color="secondary"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" align='center'>
            Virtual Undergrauate Library
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // for mobile performance
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="persistent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>

    </Box>
  );
}

export default Navbar;