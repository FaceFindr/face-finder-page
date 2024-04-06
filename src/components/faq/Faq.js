import { useState } from 'react'
import './style.css'
import './Faq.js'

function Faq() {

    const[selected, setSelected] = useState(null)

    const  toggle = (i) => {
        if(selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='wrapper'>
            <div id='faq' className='accordion'>
            <span>FAQ</span>
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected == i ? '-' : '+'}</span>
                        </div>
                        <div className={
                                selected == i ? 'content show' : 'content'
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

const data = [
    {
        question: 'Question 1',
        answer: 'Answer 1',
    },
    {
        question: 'Question 2',
        answer: 'Answer 2',
    },
    {
        question: 'Question 3',
        answer: 'Answer 3'
    },
]

export default Faq