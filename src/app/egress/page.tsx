import React from 'react'
import FornFinancial from '../components/FormFinancial/FornFinancial.component'

export default function Egress (): React.JSX.Element {
  return (
    <div>
      <FornFinancial TypeTransaction="Gasto"></FornFinancial>
    </div>
  )
}
