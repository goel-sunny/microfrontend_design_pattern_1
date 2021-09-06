import React, { Ref } from "react";
import { IFlexProp } from "./flex.props";
import './Flex.scss';

export const Flex = React.forwardRef(function Flex(props: IFlexProp, ref: Ref<unknown>){
     const prepareStyles = function(){
         return {
            flexDirection : props.flexDirection ?? 'row',
         } as React.CSSProperties;
     }

    return (<section className="flex-container" style={prepareStyles()}>
                {props.children}
            </section>);
});