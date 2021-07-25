import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import './DropDownInput.scss';
import { DropDownInputProps } from "./DropDownInput.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { IValue } from "../DropDown.props";

const DEFAULT_DELAY = 300;

interface IDropDownInputState {
    inputValue: IValue<string| number>;
    delay: number;
    timeoutRef: any
}

export function DropDownInput(props: DropDownInputProps) {
    const [state , setState] = useState<IDropDownInputState>({inputValue: props.value ?? {value:'' , id:''} , delay: props.delay ?? DEFAULT_DELAY , timeoutRef: null } );

    const onChangeEvent = (event: ChangeEvent<HTMLInputElement>)=>{
         setState({...state , inputValue: {value: event.target.value, id: event.target.id }});
        if(props.changeEvent) {
            let timeoutRef = state.timeoutRef;
            if(state.timeoutRef) {
                clearTimeout(timeoutRef);
            }

            timeoutRef = setTimeout(()=>{
                if(props.changeEvent) {
                    props.changeEvent(state.inputValue);
                }
             },state.delay) ;
        }
    }
    
    const onClickEvent= (event: SyntheticEvent)=>{
        if(props.triggerInputClickEvent){
            props.triggerInputClickEvent();
        }
    }

    return (
        <div className="dropdowninput-wrapper"> 
            <div className="dropdowninput" onClick={onClickEvent}>
                <input className="dropdowninput__input" type="text" value={state.inputValue.value} onChange={onChangeEvent} />           
                <span className="dropdowninput__caret-icon">     
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div> 
        </div>
    );
}