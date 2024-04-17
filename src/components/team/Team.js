import React from 'react';
import './Team.css';

const teamMembers = [
    { name: 'António Neves', role: 'Supervisor', image: 'antonio.jpeg' },
    { name: 'Marília Moura', role: 'Product Owner & Collaborator', image: 'marilia.jpg' },
    { name: 'Alexandre Martins', role: 'Developer', image: 'alexandre.png' },
    { name: 'Bruno Gomes', role: 'Developer', image: 'bruno.jpg' },
    { name: 'Daniel Bueno', role: 'Developer', image: 'daniel.png' },
    { name: 'Diogo Silva', role: 'Developer', image: 'diogo.png' },
    { name: 'João Gonçalves', role: 'Developer', image: 'joao.png' },
    { name: 'Miguel Marques', role: 'Developer', image: 'miguel.png' }
];

const Team = () => {
    return (
        <div className='team' id='team'>
            <div className='container'>
                <h2>Our Team</h2>
                <span className='line'></span>
                <div className='content'>
                    {
                        teamMembers.map((member, index) => (
                            <div className='card' key={index}>
                                <img src={`static-images/${member.image}`} alt={member.name} />
                                <p><span>{member.name}</span></p>
                                <p>{member.role}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Team;