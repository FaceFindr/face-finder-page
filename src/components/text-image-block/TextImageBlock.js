import './TextImageBlock.css'
export default function TextImageBlock({id, title, text, img, imgClass}){
    return(
        <div className="section-container">
            
            <div id={id} className="text-block">
                <h3 className='title'>{title}</h3>
                <span className='line'></span>
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