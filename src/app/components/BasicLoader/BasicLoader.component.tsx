import { CircularProgress } from '@mui/material'
import React from 'react'
import './BasicLoader.component.css'

interface BasicLoaderProps {
  isLoading?: boolean
}

const BasicLoader = ({
  isLoading = true
}: BasicLoaderProps): React.JSX.Element => {
  return (
    <div>
      {isLoading
        ? <CircularProgress
          size={50}
          className='loading'
        />
        : null}
    </div>
  )
}

export default BasicLoader
