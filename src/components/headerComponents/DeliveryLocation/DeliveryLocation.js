import React from 'react'
import './deliverTo.css'


function DeliveryLocation(props) {
  return (
    <div className='deliverTo'>
        <i>Deliver to</i>
        <b>{props.children}</b>
    </div>
  )
}

export default DeliveryLocation