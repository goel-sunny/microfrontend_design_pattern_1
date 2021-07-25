import { IDropDownLabelProps } from "./DropDownLabel.props";
import "./DropDownLabel.scss";

export function DropDownLabel(props: IDropDownLabelProps) {
    return (<div className="dropdownlabel-wrapper">
                <span>{props.label}</span> 
           </div>);
}

