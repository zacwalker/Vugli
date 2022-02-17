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
import { useLocation } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';


export default function MoreOptions(props) {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSaveSnackbar, setOpenSaveSnackbar] = React.useState(false);
  const [openDeleteSnackbar, setOpenDeleteSnackbar] = React.useState(false);
  const [openHideSnackbar, setOpenHideSnackbar] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const location = useLocation();
  const anchorRef = React.useRef(null);

  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSnackbarClose = () => {
    setOpenSaveSnackbar(false);
  }

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
      setOpenDeleteSnackbar(true);
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
        setOpenHideSnackbar(true);
        break;
      case 'save':
        props.handleSaveClick();
        setOpenSaveSnackbar(true);
        break;
      case 'delete':
        setOpenDialog(true);
        break;
      case 'unsave':
        props.handleUnsaveClick();
        setTransition(() => TransitionRight);
        setOpenSaveSnackbar(true)
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
        sx={{ color: "#FFCB05" }}
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
                {/* change menu options depending on the page */}
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
          </Grow>
        )}
      </Popper>
      <Snackbar
        open={openSaveSnackbar}
        onClose={handleSnackbarClose}
        TransitionComponent={transition}
        message="Post Unsaved"
        key={transition ? transition.name : ''}
      />
      <Snackbar
        open={openDeleteSnackbar}
        onClose={handleSnackbarClose}
        TransitionComponent={transition}
        message="Post Succesfully Deleted"
        key={transition ? transition.name : ''}
      />
      <Snackbar
        open={openHideSnackbar}
        onClose={handleSnackbarClose}
        TransitionComponent={transition}
        message="Post Hidden"
        key={transition ? transition.name : ''}
      />
      <Snackbar
        open={openSaveSnackbar}
        onClose={handleSnackbarClose}
        TransitionComponent={transition}
        message="Post Saved"
        key={transition ? transition.name : ''}
      />
    </div>
  );
}
