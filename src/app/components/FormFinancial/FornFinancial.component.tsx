'use client'
import { MenuItem, TextField } from '@mui/material'
import React from 'react'
import './FormFinancial.component.css'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import transactionDescriptionType from '@/app/common/constants/TransactionDescriptionType.constant'
import { ModalSuccess, OverlayLoader } from '@/app/components'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'

import TypeModal from '@/app/common/enum/typeModal'
import SnackbarMessage from '@/app/components/Snackbar/SnackbarMessage.components'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { Financial } from '@/app/models/financial.model'
import { usePostSaveFinancialMutation } from '@/app/redux/services/financialApi'
type TypeTransaction = 'Ingreso' | 'Gasto'

interface FormFinancialProps {
  TypeTransaction: TypeTransaction
}
export default function FornFinancial({
  TypeTransaction
}:FormFinancialProps): React.JSX.Element {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const today = dayjs()
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Financial>({
    mode: 'onChange',
    defaultValues: {
      userId: 100,
      expenseDate: today,
      type: TypeTransaction
    }
  })
  const [isOpen, setIsOpen] = React.useState(false)
  const [eventType, setEventType] = React.useState('')

  const toggleModal = (): void => {
    setOpen(state => !state)
  }

  const handleRedirect = (): void => {
    setOpen(state => !state)
    router.back()
  }

  const [saveFinancial] = usePostSaveFinancialMutation()

  const onSubmit: SubmitHandler<Financial> = data => {
    setLoading(true)
    saveFinancial(data)
      .unwrap()
      .then(() => {
        toggleModal()
        setLoading(false)
        reset()
      })
      .catch(error => {
        setLoading(false)
        setEventType('error')
        console.log('Error=>', error)
        setIsOpen(true)
      })
  }

  const handleClose = (): void => {
    setIsOpen(false)
  }

  return (
    <div className="container">
      <h1>Registro de tus {TypeTransaction=="Gasto"?"Gastos":"Ingresos"}</h1>
      <h4>Ingresa la información que desea registrar</h4>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="form-content"
      >
        <TextField
          label= {TypeTransaction=="Gasto"?"Descripcion del Gasto":"Descripcion del Ingreso"} 
          variant="standard"
          className="input"
          {...register('description', {
            required: { value: true, message: 'El nombre es requerido' },
            minLength: { value: 4, message: 'El minimo de caracteres es 4' }
          })}
          helperText={errors.description?.message}
        />

        <TextField
          select
          fullWidth
          variant="standard"
          label={TypeTransaction=="Gasto"?"Tipo de Gasto":"Tipo de Ingreso"}
          className="input"
          defaultValue=""
          inputProps={register('expenseType', {
            required: { value: true, message: 'Selecione una opcion' }
          })}
          error={(errors.expenseType != null)}
          helperText={errors.expenseType?.message}
        >
          <MenuItem value="">--Seleccione--</MenuItem>
          {transactionDescriptionType.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Monto ingreso total en Bs."
          className="input"
          type="number"
          variant="standard"
          {...register('amount', {
            required: { value: true, message: 'El monto es requerido' },
            valueAsNumber: true
          })}
          helperText={errors.amount?.message}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="expenseDate"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="Fecha de ingreso"
                format="DD/MM/YYYY"
                value={dayjs(value)}
                onChange={onChange}
                className="input"
                slotProps={{
                  textField: {
                    variant: 'standard'
                  }
                }}
              />
            )}
          />
          {(errors?.expenseDate != null) &&
            errors.expenseDate.type === 'required' && (
              <span className="error-msg">La fecha es requerida</span>
            )}
        </LocalizationProvider>

        <button type="submit" className="btn-secondary">
          Continuar
        </button>

        <OverlayLoader isLoading={loading} />
        <ModalSuccess
          isOpen={open}
          onClose={toggleModal}
          onRedirect={handleRedirect}
          typeTransaction={TypeTransaction}
          type={TypeModal.sucess}
          text="Registro Exitoso"
        />
      </form>
      <SnackbarMessage
        open={isOpen}
        eventType={eventType}
        onClose={handleClose}
      />
    </div>
  )
}
