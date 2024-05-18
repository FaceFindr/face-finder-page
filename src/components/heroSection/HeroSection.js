import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <p className='hero-title'>Your Vision</p>
                <p className='hero-subtitle'>Our Inovation</p>
                <button href='/' className='button'>Explore</button>
            </div>
            <div className = 'hero-image-div'>
                <img className = 'hero-image' src={`static-images/hero1.gif`} alt=''/>
            </div>
        </div>
    )
}

export default Hero