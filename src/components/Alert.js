import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useAnimals } from '../context/Animals'

export default function Alert({ handleClose}){
  const AnimalsContext = useAnimals()
  const { message, error } = AnimalsContext

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={!!message}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      className={error ? "error": "success"}
      action={
        <IconButton size="small" aria-label="close" style={{color: "white"}} onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  )
}

