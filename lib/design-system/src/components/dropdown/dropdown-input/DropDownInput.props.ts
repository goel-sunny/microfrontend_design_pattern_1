import { IValue } from "../DropDown.props";

export interface DropDownInputProps{
    value?: IValue<string | number>;
    delay?: number; // in milisec 
    changeEvent?: Function;
    triggerInputClickEvent? :Function;
}