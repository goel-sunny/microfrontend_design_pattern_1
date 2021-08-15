import { IImageSliderData } from '../../ImageSlider.props';
import './ImageContainer.scss';

export function ImageContainer(props: Partial<IImageSliderData>) {
    return (<div className="image-container-wrapper" aria-label="Image Container"> 
                <div className="image" aria-label="Current Image" id={props.id} style={{backgroundImage:`url("${props.imgUrl}")`}}></div> 
            </div>); 
}