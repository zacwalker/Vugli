import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from '@mui/material';
import AlertDeleteDialog from './AlertDeleteDialog';

export default function MoreOptions(props) {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // close dialog and call delete if confirmed
  const handleConfirmDialog = (event) => {
    if (event.target.id === "confirm-delete") {
      props.handleDeleteClick();
    }
    setOpenDialog(false);
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

  return (
    <div>
      <AlertDeleteDialog openDialog={openDialog} handleConfirmDialog={handleConfirmDialog} />
      <IconButton
        ref={anchorRef}
        sx={{color: "#FFCB05"}}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MoreVertIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
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
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
