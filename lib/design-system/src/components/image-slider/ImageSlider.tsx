// useMemo -- return the result and useCallback  return the memo  callback :- 
// concept behind alot of hooks is infunction basically if rendering happen complete function get called
//

import React, { RefObject, useCallback, useEffect, useState } from "react";
import { ImageContainer } from "./component/image-container/ImageContainer";
import { RandomImage } from "./component/random-image/RandomImage";
import { IImageSliderData, IImageSliderProps } from "./ImageSlider.props";
import "./ImageSlider.scss";

const ImageSlider = React.forwardRef(function ImageSlider(props: IImageSliderProps, ref: any){
        const [selectedImage, setSelectedImage] = useState({});
        const [selectedIndex, setSelectedIndex] = useState(0);
        console.log('how many time it is calling ', selectedIndex , selectedImage);
         

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
            setSelectedIndex(selectedIndex);
            setSelectedImage(props.data[selectedIndex]);
        }

        const prevImage = useCallback(function() {
            if(selectedIndex === 0){
                setSelectedIndex(props.data.length-1);
                setSelectedImage(props.data[props.data.length-1]);
            } else {
                setSelectedIndex(selectedIndex - 1);
                setSelectedImage(props.data[selectedIndex - 1]);
            }
        },[selectedIndex]);

        const nextImage = useCallback(function() {
            if(selectedIndex === props.data.length-1){
                setSelectedIndex(0);
                setSelectedImage(props.data[0]);
            } else {
                setSelectedIndex(selectedIndex + 1);
                setSelectedImage(props.data[selectedIndex + 1]);
            }
        },[selectedIndex]);

        useEffect(()=>{
            if(props.defaultImage) {
                setCurrentImage(props.defaultImage);
            }else {
                setCurrentImage(props.data[0]);
            }
        }, [props.data, props.auto]);

    return (<section className="image-slider-wrapper"> 
                <div arial-label="Previous Action Button" className="image-slider__prev-action" onClick={prevImage}>{'<'}</div>
                <div aria-label="Current Shown Image" className="image-slider__current-img"><ImageContainer {...selectedImage}></ImageContainer></div>
                <div arial-label="Next Action Button" className="image-slider__next-action"  onClick={nextImage}>{'>'}</div>
                <div arial-label="Random Image Selector Buttons" className="image-slider__random"> {props.random && <RandomImage/>}</div>
            </section>);
});

export default ImageSlider;