import { ReactElement } from "react";

export interface ITableColumnProps {
    field: string;
    label: string;
    width?: string;
    children?: ReactElement;
    value?: string;
    searchable?: boolean;
    sortable?: boolean;
    frozen?: boolean;
}
