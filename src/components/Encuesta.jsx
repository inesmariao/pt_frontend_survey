import React from 'react'
import { CapituloI } from './CapituloI'
import { CapituloII } from './CapituloII'
import { CapituloIII } from './CapituloIII'

export const Encuesta = () => {
  return (
    <div>
      <div className="App">
        <div className="container">
          <CapituloI />
          <CapituloII />
          <CapituloIII />
        </div>
      </div>
    </div>
  )
}
