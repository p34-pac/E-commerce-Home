import React, { Component } from 'react'
import './footer.css'
import ToTop from '../../components/FooterComponents/ToTop/ToTop'
import FooterPanel from '../../components/FooterComponents/FooterPanel/FooterPanel'
import Logo from '../../components/headerComponents/Logo/Logo'
import FooterPages from '../../components/FooterComponents/FooterClose/FooterPages'
export class Footer extends Component {
  render() {
    return (
      <div>
        <ToTop />
        <FooterPanel/>
        <div className='Footerlogo'>
            <Logo/>
        </div>
        <FooterPages />
      </div>
    )
  }
}

export default Footer