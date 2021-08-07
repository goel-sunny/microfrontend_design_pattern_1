import { ReactEventHandler } from "react";
import { IOption, IValue } from "../DropDown.props";
import { IDropDownListProps } from "./DropDownList.props";
import "./DropDownList.scss";

export function DropDownList(props: IDropDownListProps) {
    const listItems = prepareListItems(props.options, props.values , props.onSelectEvent);
    return (<section className="dropdownlist-wrapper">
                <ul className="dropdownlist">
                    {listItems} 
                </ul>
           </section>);
}

function prepareListItems(options: IOption<string | number>[] , values: Array<IValue<string | number>> , onSelectEvent: Function) {
    return options.map((option)=>{
        const selected = isListItemSelected(option, values);
        return <li className="dropdownlist__item" key={option.id} value={option.value} data-disable={option.disable} data-selected={selected ? selected : null} onClick={onSelectEvent.bind({}, {value: option.value, id: option.id})}> {option.name} </li>
    });
}

function isListItemSelected(option: IOption<string | number>, values: Array<IValue<string | number>>) {
    for(let i=0; i< values.length; i++){
        if(values[i].id === option.id) {
            return true;
        }
    }
    return false;
}

