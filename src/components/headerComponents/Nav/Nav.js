import React from 'react'
import './nav.css'

function Nav(props) {
  return (
    <div className='navigate'>
        <i>{props.children}</i>
        <b>{props.content}</b>
    </div>
  )
}

export default Nav