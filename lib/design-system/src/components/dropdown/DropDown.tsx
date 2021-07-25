import React, { SyntheticEvent } from "react";
import { DropDownList } from "./dropdown-list/DropDownList";
import { DropDownLabel } from "./dropdown-label/DropDownLabel";
import { IDropDownProps } from "./DropDown.props";
import "./DropDown.scss";
import { DropDownInput } from "./dropdown-input/DropDownInput";

interface IDropDownState {

}

export class DropDown extends React.Component<IDropDownProps , IDropDownState> {
    constructor(props: IDropDownProps){
        super(props);
    }

    public onChangeEvent(id:string, event: SyntheticEvent){
         
        if(this.props.onChangeEvent)
            this.props.onChangeEvent(id, event);
    }

    private renderDropDownLabel(label?: string, required?:boolean){
         if(label && label.length) {
            return <DropDownLabel label={label} required={required} />
         }  
    }

    render(){
        const options = this.props.options.map((option)=>{
            return ( <option value= {option.value} disabled={option.disable ?? false }>{option.name} </option>)
        });
        return (
            <section className="dropdown-wrapper">
                {this.renderDropDownLabel(this.props.label , this.props.required)}      
                <div className="dropdown-content">
                    <div className="dropdown__input">
                        <DropDownInput /> 
                    </div>
                    <div className="dropdown__list">
                        <DropDownList options = {this.props.options} 
                                      onSelectEvent={this.onChangeEvent.bind(this)} />
                    </div>
               </div>
            </section>
        );
    }
}