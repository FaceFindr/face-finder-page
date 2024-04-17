import React from 'react'

import './Description.css'
import TextImageBlock from '../text-image-block/TextImageBlock'

const Description = () => {
    return (
        <div className='description' id='description'>
            <div className='container' id='introduction'>
                <img src={"static-images/camera.gif"} alt='description' />
                <div className='col-2'>
                    <h2>Empowering Shared Moments</h2>
                    <span className='line'></span>
                    <p style={{color: "#08263b"}}>Welcome to an advanced solution that transforms the way you
            capture and share moments in large gatherings. Our powerful system 
            leverages advanced facial recognition and image processing technologies, 
            empowering users to seamlessly locate individuals amidst bustling crowds and 
            elevate the overall quality of event photography.</p>
                </div>
            </div>
        </div>
    )
}

export default Description