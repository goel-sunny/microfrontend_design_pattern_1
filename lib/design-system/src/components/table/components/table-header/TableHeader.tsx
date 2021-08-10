import { ITableHeaderProps } from "./TableHeader.props";

export function TableHeader(props: ITableHeaderProps){

    const headerElements = props.children.map((child)=>{
        return <th key={child.props.field} rowSpan={1} colSpan={1} >{child.props.label}</th>
    });

    return (<div className="table-heade-wrapper">
        <table className="table-header">
            <thead>
                <tr>
                    {headerElements}
                </tr>
            </thead>
        </table>
    </div>);
}