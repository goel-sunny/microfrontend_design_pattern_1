import React, { CSSProperties } from "react";

export interface IFlexProp {
    flexDirection?: string;
    flexWrap?: string;
    children: Array<React.ReactElement>
}