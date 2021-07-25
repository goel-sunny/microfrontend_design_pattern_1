import { ReactEventHandler } from "react";
import { IOption, IValue } from "../DropDown.props";

export interface IDropDownListProps {
    options: Array<IOption<string | number>>;
    values?: Array<IValue<string | number>>; // 
    onSelectEvent: Function
}