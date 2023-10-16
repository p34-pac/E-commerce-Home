import React from 'react'
import Nav from './Nav'
import './nav.css'

function NavCont() {
  return (
    <div className='navCont'>
        <Nav content="Account & Lists">Hello, sign in</Nav>
        <Nav content="& Lists">Return </Nav>
        <Nav content="Cart"/>
    </div>
  )
}

export default NavCont