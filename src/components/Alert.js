import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function Alert({errorMsg, handleClose}){
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={!!errorMsg}
      autoHideDuration={6000}
      onClose={handleClose}
      message={errorMsg}
      action={
        <IconButton size="small" aria-label="close" style={{color: "white"}} onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  )
}