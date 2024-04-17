import React from 'react'
import './Footer.css'

const Footer = () => {
    
    const footerItems = [
        { item: "Introduction", link: "introduction" }, 
        { item: "Context", link: "context" },
        { item: "Key Features", link: "key-features" }, 
        { item: "Team", link: "team" }, 
        { item: "FAQ", link: "faq" }
    ]

    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                {
                    footerItems.map(footerLink => {
                        return(
                            <li className='nav-item'>
                                <a href={`#${footerLink.link}`} className=''>{footerLink.item}</a>
                            </li>
                        )
                    })
                }
                </ul>
                <div className='bottom'>
                    <span className='line-footer'></span>
                    <p>2024 FaceFindr. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer