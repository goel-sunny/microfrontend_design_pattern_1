import { ReactElement } from "react";
import { ITableBodyProps } from "./TableBody.props";

export function TableBody(props: ITableBodyProps) {
    const prepareRowData = (data: any):ReactElement=>{
    return ( <tr> 
                {   props.children.map((child)=>{
                        return <td key={child.props.field} rowSpan={1} colSpan={1}>{data[child.props.field]}</td>
                     })
                }
            </tr>
    )};

    const prepareRows = (): Array<ReactElement>=>{
        return props.rowData.map((data)=>{
            return prepareRowData(data);
        }); 
    }
    
    return (<div className="table-body-wrapper">
        <table className="table-body">
            <tbody>
                {prepareRows()}
            </tbody>
        </table>
    </div>);
}

