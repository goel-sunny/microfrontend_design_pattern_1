import React, { SyntheticEvent } from "react";
import { DropDownList } from "./dropdown-list/DropDownList";
import { DropDownLabel } from "./dropdown-label/DropDownLabel";
import { IDropDownProps, IValue } from "./DropDown.props";
import "./DropDown.scss";
import { DropDownInput } from "./dropdown-input/DropDownInput";

interface IDropDownState {
    selectedValue?: IValue<string | number>;
    enableList: boolean;
}

export class DropDown extends React.Component<IDropDownProps , IDropDownState> {
    constructor(props: IDropDownProps){
        super(props);
        this.state = {enableList: false};
    }

    public onChangeEvent(value: IValue<string | number>, event: SyntheticEvent){
        console.log('onSelect the value   ', value);      
        if(this.props.onChangeEvent)
            this.props.onChangeEvent(value, event);
    }

    private renderDropDownLabel(label?: string, required?:boolean){
         if(label && label.length) {
            return <DropDownLabel label={label} required={required} />
         }  
    }

    private renderDropDownList() {
        if(this.state.enableList) {
            return  <div className="dropdown__list">
                        <DropDownList options = {this.props.options} 
                            onSelectEvent={this.onChangeEvent.bind(this)} />
                    </div>;
            }   
        return;  
    }

    private triggerInputEvent(){
        this.setState({...this.state , enableList: !this.state.enableList});
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
                        <DropDownInput  value={this.state.selectedValue}  triggerInputClickEvent= {this.triggerInputEvent.bind(this)} /> 
                    </div>
                    {this.renderDropDownList()}
               </div>
            </section>
        );
    }
}