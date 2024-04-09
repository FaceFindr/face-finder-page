import Feature from "../feature/Feature";

import './KeyFeatures.css';
export default function KeyFeatures(){
    const features =[
        {
            "title": "Precision Facial Recognition", 
            "text":" Our system utilizes state-of-the-art facial recognition algorithms, ensuring unparalleled accuracy in identifying individuals within any event. Say goodbye to the hassle of manually sorting through photos—let our technology do the work for you.",
            "img":"../static-images/face-recognition.png"
        },
        {
            "title": "Image Processing Excellence", 
            "text":" Capture every moment in stunning detail. Our image processing capabilities enhance the quality of your photos, delivering a visual experience that truly stands out. From vibrant colors to crisp details, your memories are preserved in the best possible light.",
            "img":"../static-images/image-processing.png"
        },
        {
            "title": "Collaborative Albums", 
            "text":"Foster a sense of togetherness by creating collaborative albums where users can seamlessly contribute their photos. Define specific roles for each participant, whether it's an admin overseeing the album or contributors enriching it with their unique perspectives.",
            "img":"../static-images/gallery.png"
        },
        {
            "title":"Role Definition", 
            "text":"Tailor the experience to suit your needs. Assign roles such as admin, participant, and more, granting users specific privileges within the album. This feature ensures a streamlined collaboration process, allowing everyone to contribute in a way that aligns with their role.",
            "img":"../static-images/team.png"
        }
    ]

    return (
        <div id='key-features' className="key-features-container">
            <h3 className="section-title">Key Features</h3>
            <span className='line'></span>
            <div className="features">
                { 
                    features.map(feature=>{
                        return <Feature title={feature.title} text={feature.text} img={feature.img}/>
                    })
                }
            </div>
           
            
        </div>
    );
}