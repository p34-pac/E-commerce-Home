import React, { Component } from 'react'
import './header.styles.css'
import Logo from '../../components/headerComponents/Logo/Logo'
import DeliveryLocation from '../../components/headerComponents/DeliveryLocation/DeliveryLocation'
import Search from '../../components/headerComponents/Search/Search'
import NavCont from '../../components/headerComponents/Nav/NavCont'

class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       deliveryLocation: 'India'
    }
  }


  render() {
    return (
      <div className='Header'>
        <Logo/>
        <DeliveryLocation>{this.state.deliveryLocation}</DeliveryLocation>
        <Search/>
        <NavCont/>
      </div>
    )
  }
}

export default Header