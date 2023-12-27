import './style.css'
export default function TextImageBlock({title, text, img, imgClass}){
    return(
        <div className="section-container">
            
            <div className="text-block">
                <h3 className='title'>{title}</h3>
                <p className='text'>
                    {text}
                </p>
            </div>

           <div className="image-block">
                <img className={imgClass} src={img} alt='section'/>
           </div>
        </div>
    );
}