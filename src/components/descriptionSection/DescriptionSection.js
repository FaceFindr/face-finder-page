import TextImageBlock from "../text-image-block/TextImageBlock";

export default function DescriptionSection(){
    return(
        <TextImageBlock 
            title="Empowering Shared Moments" 
            text="Welcome to a advanced solution that transforms the way you
            capture and share moments in large gatherings. Our powerful system 
            leverages advanced facial recognition and image processing technologies, 
            empowering users to seamlessly locate individuals amidst bustling crowds and 
            elevate the overall quality of event photography." 
            img='./static-images/description.jpg'
            imgClass='image-description'
        />
    );
}