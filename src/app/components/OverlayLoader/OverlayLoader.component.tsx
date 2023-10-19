import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import './OverlayLoader.component.css'

interface OverlayLoaderProps {
  isLoading: boolean
}

const OverlayLoader = ({
  isLoading
}: OverlayLoaderProps): React.JSX.Element => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: '#fff' }}
      open={isLoading}
    >
      <CircularProgress
        size={50}
        className='load-style'
      />
    </Backdrop>
  )
}

export default OverlayLoader
