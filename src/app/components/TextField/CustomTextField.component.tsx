'use client'

import React from 'react'
import './CustomTextField.component.css'
import { TextField, styled } from '@mui/material'
import { type InputProps } from '@mui/material/Input'

interface CustomTextFieldProps {
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  variant?: 'standard' | 'outlined' | 'filled'
  label?: string
  helperText?: string
  error?: boolean
  inputProps?: InputProps
}

const CustomTexField = styled(TextField)(({ theme }) => ({
  // input label when focused
  '& label.Mui-focused': {
    color: '#73028e'
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: '#73028e'
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: '#73028e'
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#73028e'
    }
  }
}))
function CustomTextField ({
  id,
  value,
  onChange,
  onBlur,
  variant,
  label,
  helperText,
  error,
  inputProps
}: CustomTextFieldProps): JSX.Element {
  return (
    <CustomTexField
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className='form-input'
      variant={variant}
      label={label}
      helperText={helperText}
      error={error}
      InputProps={inputProps}
    />
  )
}

export default CustomTextField
