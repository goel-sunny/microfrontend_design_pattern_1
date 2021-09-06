import React from 'react';
import { IFlexItemProps } from './flex-item.props';
import './flexItem.scss';




export const FlexItem = function(props:IFlexItemProps) {
    const prepareFlexItemStyle = function(){
        return {
            flex: props.flex ?? 1,
        } as React.CSSProperties;
    }
    return (<div className="FlexItemContainer" style={prepareFlexItemStyle()}>
            {props.children}
            </div>);    
    }  