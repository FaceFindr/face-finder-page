import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>FaceFindr.</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#team'>Team</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#faq'>FAQ</a>
                    </li>

                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2024 FaceFindr.. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
