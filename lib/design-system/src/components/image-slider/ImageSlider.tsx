// useMemo -- return the result and useCallback  return the memo  callback :- 
// concept behind alot of hooks is infunction basically if rendering happen complete function get called
//

import React, { RefObject, useEffect, useState } from "react";
import { ImageContainer } from "./component/image-container/ImageContainer";
import { RandomImage } from "./component/random-image/RandomImage";
import { IImageSliderData, IImageSliderProps } from "./ImageSlider.props";
import "./ImageSlider.scss";

const ImageSlider = React.forwardRef(function ImageSlider(props: IImageSliderProps, ref: any){
        const [selectedImage, setSelectedImage] = useState({});
        const [selectedIndex, setSelectedIndex] = useState(0);

        const setCurrentImage = function(selectedImage: Partial<IImageSliderData>, currentIndex?: number) {
            let selectedIndex = 0;
            if(currentIndex === undefined) {
                props.data.forEach((imgData, index)=>{
                    if(imgData.id === selectedImage.id) {
                        selectedIndex = index;
                    }
                });
            } else {
                selectedIndex = currentIndex;
            }  
            setSelectedImage(selectedImage);
            setSelectedIndex(selectedIndex);
        }

        useEffect(()=>{
            if(props.defaultImage) {
                setCurrentImage(props.defaultImage);
            }else {
                setCurrentImage(props.data[0]);
            }
        }, [props.data, props.auto]);

    return (<section className="image-slider-wrapper"> 
                <div arial-label="Previous Action Button" className="image-slider__prev-action"></div>
                <div aria-label="Current Shown Image" className="image-slider__current-img"><ImageContainer {...selectedImage}></ImageContainer></div>
                <div arial-label="Next Action Button" className="image-slider__next-action"></div>
                <div arial-label="Random Image Selector Buttons" className="image-slider__random"> {props.random && <RandomImage/>}</div>
            </section>);
});

export default ImageSlider;