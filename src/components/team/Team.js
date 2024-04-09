import React from 'react'
import antonio_neves from '../static-images/antonio.jpeg'
import marilia from '../static-images/marilia.jpg'
import alexandre from '../static-images/alexandre.png'
import miguel from '../static-images/miguel.png'

import user1 from '../static-images/antonio.jpeg'

import './Team.css'

const Team = () => {
    return (
        <div className='team' id='team'>
            <div className='container'>
                <h2>Our Team</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={antonio_neves} alt='user1'/>
                        <p><span>António Neves</span></p>
                        <p>Supervisor</p>
                    </div>
                    <div className='card'>
                        <img src={marilia} alt='user1'/>
                        <p><span>Marília Moura</span></p>
                        <p>Product Owner & Collaborator</p>
                    </div>
                    <div className='card'>
                        <img src={alexandre} alt='user1'/>
                        <p><span>Alexandre Martins</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Bruno Gomes</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Daniel Frank</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Diogo Silva</span></p>
                        <p>Developer</p>
                    </div>                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>João Gonçalves</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={miguel} alt='user1'/>
                        <p><span>Miguel Marques</span></p>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team