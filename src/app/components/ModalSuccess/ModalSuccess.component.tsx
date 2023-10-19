import TypeModal from '@/app/common/enum/typeModal'
import type ModalSuccessProps from '@/app/common/models/ModalSuccessProps'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'
import iconError from '../../../assets/icon/error.svg'
import iconSuccess from '../../../assets/images/success.png'
import './ModalSuccess.component.css'

export default function ModalSuccess (
  {
    isOpen,
    onClose,
    onRedirect,
    typeTransaction,
    type
  }: ModalSuccessProps): React.JSX.Element {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div style={{ width: '100%' }}>
            <Image
              className="modal-image"
              src={type === TypeModal.sucess ? iconSuccess : iconError}
              alt="registro exitoso"
            />
            <Typography
              variant="h6"
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
            >
              Registro Exitoso
            </Typography>
            <button className="btn-repeat" onClick={onClose}>
              {`Nuevo ${typeTransaction}`}
            </button>
            <button className="btn-redirect" onClick={onRedirect}>
              Continuar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
