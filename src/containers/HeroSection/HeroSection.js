import React from 'react'
import './heroSection.css'
import Hero from '../../components/Hero/Hero'
import heroImage from '../../assets/images/hero_image.jpg'

function HeroSection() {
  return (
    <div className='heroSection' >
      <Hero heroImage={heroImage}>
        <b>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery</b>
        <a>Click here to go to amazon.in</a>
      </Hero>
    </div>
  )
}

export default HeroSection