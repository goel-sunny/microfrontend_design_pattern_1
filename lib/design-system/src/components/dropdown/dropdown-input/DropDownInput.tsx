import React from "react";
import './DropDownInput.scss';
import { DropDownInputProps } from "./DropDownInput.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export function DropDownInput(props: DropDownInputProps){
    return (
        <div className="dropdowninput-wrapper"> 
            <div className="dropdowninput">
                <input className="dropdowninput__input" type="text" value={props.value ?? ""} />           
                <span className="dropdowninput__caret-icon">     
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div> 
        </div>
    );
}