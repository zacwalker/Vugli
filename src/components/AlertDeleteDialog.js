import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDeleteDialog(props) {
  return (
    <div>
      <Dialog
        open={props.openDialog}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you wish to delete this post?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you wish to delete this post?
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={props.handleConfirmDialog}>Cancel</Button>
          <Button id="confirm-delete" onClick={props.handleConfirmDialog} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}