import React from 'react'
import './footerPages.css'


function FooterPages() {
    const pages = [
        "Conditions of Use",
        "Privacy Notice",
        "Your Ads Privacy Choices"
    ].map(page => <a>{page}</a>)
    
  return (
    <div className='footerClose'>
        <div className='pages'>
            {
                pages
            }
        </div>

        <b className='copyWrite'>© 1996-2023, Amazon.com, Inc. or its affiliate</b>
    </div>
  )
}

export default FooterPages