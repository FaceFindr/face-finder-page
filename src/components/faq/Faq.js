import { useState } from 'react'
import './Faq.css'

function Faq() {

    const data = [
        { 
            question: 'How can photographers upload photos to the application?', 
            answer: 'Answer' 
        },
        {   
            question: 'Is there a limit to the number of photos that can be uploaded?', 
            answer: 'Answer' 
        },
        {   
            question: 'How is privacy maintained when identifying people in photos?', 
            answer: 'Answer' 
        },
        { 
            question: 'What types of events is this application best suited for?', 
            answer: 'Answer' 
        }
    ]

    const[selected, setSelected] = useState(null)

    const  toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className='wrapper'>
            <div id='faq' className='accordion'>
            <h2>FAQ</h2>
            <span className='line' style={{marginBottom:"2rem"}}></span>
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h3>{item.question}</h3>
                            <span style={{fontSize:"1.5rem"}}>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={
                                selected === i ? 'faqContent show' : 'faqContent'
                            }
                        >
                            {item.answer}
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Faq