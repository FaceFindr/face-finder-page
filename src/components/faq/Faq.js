import { useState } from 'react'
import './Faq.css'

function Faq() {

    const data = [
        { 
            question: 'How can photographers upload photos to the application?', 
            answer: 'For photographers to upload photos to the application, they simply need to have an account and log in to it.' 
        },
        {   
            question: 'Is there a limit to the number of photos that can be uploaded?', 
            answer: 'No. There is no limit to the number of photos that can be uploaded.' 
        },
        {   
            question: 'How is privacy maintained when identifying people in photos?', 
            answer: 'Often at the events they attend, individuals are asked to provide explicit consent before being photographed. This can be done through written agreements or consent forms that specify how the photos will be used.' 
        },
        { 
            question: 'What types of events is this application best suited for?', 
            answer: 'This applications is best suited for large events, such as concerts, sporting events, and political rallies, as they can generate a large number of photos of people.' 
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