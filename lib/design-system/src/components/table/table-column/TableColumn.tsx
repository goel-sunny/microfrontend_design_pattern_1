import { ITableColumnProps } from "./TableColumn.props";

export function TableColumn(props: ITableColumnProps){
    return (<td key={props.field}> </td>);
}