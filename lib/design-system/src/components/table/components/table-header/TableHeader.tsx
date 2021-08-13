import React, { ReactElement, ReactNode, SyntheticEvent } from "react";
import { ITableHeaderProps } from "./TableHeader.props";

export function TableHeader(props: ITableHeaderProps){

    const constructColumns = function(children: Array<ReactElement>){
        return children.map((child)=>{
            return <th key={child.props.field} rowSpan={1} colSpan={1} >{child.props.label}</th>
        })
    }

    return (<div className="table-heade-wrapper">
        <table className="table-header">
            <thead>
                <tr>
                    {(event: SyntheticEvent)=>{constructColumns(props.children)}}
                </tr>
            </thead>
        </table>
    </div>);
}