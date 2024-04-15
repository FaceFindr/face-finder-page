import React from 'react'


import './Team.css'

const Team = () => {
    // TODO: use map
    return (
        <div className='team' id='team'>
            <div className='container'>
                <h2>Our Team</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={"static-images/antonio.jpeg"} alt='user1'/>
                        <p><span>António Neves</span></p>
                        <p>Supervisor</p>
                    </div>
                    <div className='card'>
                        <img src={"static-images/marilia.jpg"} alt='user1'/>
                        <p><span>Marília Moura</span></p>
                        <p>Product Owner & Collaborator</p>
                    </div>
                    <div className='card'>
                        <img src={"static-images/alexandre.png"} alt='user1'/>
                        <p><span>Alexandre Martins</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={"/static-images/bruno.jpg"} alt='user1'/>
                        <p><span>Bruno Gomes</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={"static-images/daniel.png"} alt='user1'/>
                        <p><span>Daniel Bueno</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={"static-images/diogo.png"} alt='user1'/>
                        <p><span>Diogo Silva</span></p>
                        <p>Developer</p>
                    </div>                    
                    <div className='card'>
                        <img src={"static-images/joao.png"} alt='user1'/>
                        <p><span>João Gonçalves</span></p>
                        <p>Developer</p>
                    </div>
                    <div className='card'>
                        <img src={"static-images/miguel.png"} alt='user1'/>
                        <p><span>Miguel Marques</span></p>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team