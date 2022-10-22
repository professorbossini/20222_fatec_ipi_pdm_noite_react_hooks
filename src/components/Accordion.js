import { Card } from 'primereact/card'
import React from 'react'

const Accordion = ({itens}) => {
  const jsx = itens.map((item, i) => {
    return (
      <Card 
        key={i}
        className="border-1 border-400">
          <div>
            <i className="pi pi-angle-down"></i>
            <h5 className='inline ml-3'>{item.titulo}</h5>
          </div>
      </Card>
    )
  })
  return jsx
}

export default Accordion
