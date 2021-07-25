import { ReactEventHandler } from "react";
import { IOption } from "../DropDown.props";
import { IDropDownListProps } from "./DropDownList.props";
import "./DropDownList.scss";

export function DropDownList(props: IDropDownListProps) {
    const listItems = prepareListItems(props.options, props.onSelectEvent);
    return (<section className="dropdownlist-wrapper">
                <ul>
                    {listItems} 
                </ul>
           </section>);
}

function prepareListItems(options: IOption<string | number>[] , onSelectEvent: Function) {
    return options.map((option)=>{
        return <li key={option.id} value={option.value} data-disable={option.disable} onClick={onSelectEvent.bind({}, option.id)}> {option.name} </li>
    });
}
