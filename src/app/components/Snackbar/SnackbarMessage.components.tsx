import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { type AlertProps } from '@mui/material/Alert'

interface SnackbarProps {
  open: boolean
  eventType: string
  onClose: () => void
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert (props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  }
)
const SnackbarMessage = ({
  open,
  eventType,
  onClose
}: SnackbarProps): JSX.Element => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      {eventType === 'success'
        ? (
        <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
          Datos obtenidos exitosamente!
        </Alert>
          )
        : (
        <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
          Error al obtener los datos!
        </Alert>
          )}
    </Snackbar>
  )
}

export default SnackbarMessage
