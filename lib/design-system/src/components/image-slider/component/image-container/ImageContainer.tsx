import { IImageSliderData } from '../../ImageSlider.props';
import './ImageContainer.scss';

export function ImageContainer(props: Partial<IImageSliderData>) {
    console.log('let see what it is printing over here', props);
    return (<div className="image-container-wrapper" aria-label="Image Container"> 
                <div className="image" aria-label="Current Image" id={props.id} style={{backgroundImage:`url("${props.imgUrl}")`}}></div> 
            </div>); 
}