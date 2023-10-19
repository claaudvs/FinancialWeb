'use client'
import React from 'react'
import ingresos from '../assets/images/ingresos.png'
import gastos from '../assets/images/gastos.png'
import historico from '../assets/images/historico.png'
import { CardComponent } from './components'
import './page.css'

export default function Home(): React.JSX.Element {
  return (
    <div className="content-page">
      <div className="title-description">
        <h1 className="title-welcome">Bienvenido, Pepito !</h1>
        <p>Registrar tus ingresos nunca fue tan fácil </p>
        <p>
          Ahora podrás tener el control de tus finanzas en línea desde la
          comodidad de tu celular 
        </p>
      </div>
      <div className="row">
        <CardComponent
          title="Registro de Ingresos"
          icon={ingresos}
          onCardClick={() => {}}
          path={'/income'}
        />
        <CardComponent
          title="Registro de Gastos"
          icon={gastos}
          onCardClick={() => {} }
          path={'/egress'}
        />
        <CardComponent
          title="Historial"
          icon={historico}
          onCardClick={() => {}}
          path={'/history'}
        />
      </div>
    </div>
  )
}
