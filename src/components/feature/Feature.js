import './style.css'

export default function Feature({title, text, img}){
    return(
        <div className="feature-container">
            <img className='image' src={img} alt='feature'/>
            <h4 className='feature-title'>{title}</h4>
            <p className='feature-text'>
               {text}
            </p>
        </div>
    );
}