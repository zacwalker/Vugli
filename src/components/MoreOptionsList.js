import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useLocation } from 'react-router-dom'


export default function MoreOptionsList(props) {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const anchorRef = React.useRef(null);
  const location = useLocation();

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  // Using event obejct to determine which function to fire
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    const option = event.target.id;

    switch (option) {
      case 'hide':
        props.handleHideClick();
        break;
      case 'save':
        props.handleSaveClick();
        break;
      case 'delete':
        setOpenDialog(true);
        break;
      default:
        console.log('option not chosen');
    }
  };

  return <div>
    <Paper>
      <ClickAwayListener onClickAway={handleClose}>
        {location.pathname === "/saved" ? (
          <MenuList
            autoFocusItem={open}
            id="composition-menu"
            aria-labelledby="composition-button"
            onKeyDown={handleListKeyDown}
          >
            <MenuItem id="unsave" onClick={handleClose}>Unsave</MenuItem>
          </MenuList>
        ) : (
          <MenuList
            autoFocusItem={open}
            id="composition-menu"
            aria-labelledby="composition-button"
            onKeyDown={handleListKeyDown}
          >
            <MenuItem id="save" onClick={handleClose}>Save</MenuItem>
            <MenuItem id="hide" onClick={handleClose}>Hide</MenuItem>
            <MenuItem id="delete" onClick={handleClose}>Delete</MenuItem>
          </MenuList>
        )}
      </ClickAwayListener>
    </Paper>
  </div>;
}
