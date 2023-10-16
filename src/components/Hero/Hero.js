import React, { Children } from 'react'


function Hero(props) {
  return (
    <div>
        <div className='hero-image'>
            <img src={props.heroImage} />
        </div>
        <div className='hero-msg'>
            {props.children}
        </div>
    </div>
  )
}

export default Hero