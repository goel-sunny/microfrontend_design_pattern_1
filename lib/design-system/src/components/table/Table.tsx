import React from "react";
import { TableBody } from "./components/table-body/TableBody";
import { TableHeader } from "./components/table-header/TableHeader";
import { ITableProps } from "./Table.props";
import './Table.scss';

export function Table<T>(props: ITableProps){

    return(<div className="table-wrapper">
             <div className="table-header">
                <TableHeader >{props.children}</TableHeader>
            </div>   
             <div className="table-body">
                 <TableBody rowData={props.rowData}>{props.children}</TableBody>
             </div>
        </div>);
}