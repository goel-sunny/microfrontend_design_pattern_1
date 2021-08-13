import { ReactElement } from "react";
export interface ITableProps {
    rowData: Array<Object>;
    children: Array<ReactElement>;
    pagination?: boolean;
    searching?: boolean;
    filtering?: boolean;
    export?: boolean;
    multiSeletion?: boolean;
}