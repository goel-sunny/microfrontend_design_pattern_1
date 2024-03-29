import React from "react";
import { ReactElement } from "react";
import { ITableBodyProps } from "./TableBody.props";

export function TableBody(props: ITableBodyProps) {

    const prepareCell = function(cellElement: ReactElement , data: Object) {
        console.log('cell Elment');
        if(cellElement.props?.children?.length){
            return React.cloneElement(cellElement.props.children[1], {...data});
        }
    }

    
    const prepareRowData = (data: any):ReactElement=>{
        return ( <tr> 
                {   props.children.map((child)=>{
                        console.log(child.props.children, '  type');  
                        return <td  key={child.props.field} 
                                    rowSpan={1} 
                                    colSpan={1}>
                                        {child.props.children ? prepareCell(child, data) : data[child.props.field]}
                                </td>
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

