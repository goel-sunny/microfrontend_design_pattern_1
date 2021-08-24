import React, { useCallback } from "react";
import { PageSize } from "../../pagination.props";
import './PaginationPages.scss';

export interface IPaginationPagesProps {
    totalCount: number;
    pageSelectEvent: Function;
    pageSize?: PageSize;
    activePage?: number;
}

const DEFAULT_PAGE_SIZE = 10;

export function PaginationPages(props: IPaginationPagesProps) {
    const calculateTotalPages = React.useMemo(()=>{
         if(props.totalCount % (props.pageSize ?? DEFAULT_PAGE_SIZE)=== 0) {
            return props.totalCount / (props.pageSize ?? DEFAULT_PAGE_SIZE);
         } else {
            return props.totalCount / (props.pageSize ?? DEFAULT_PAGE_SIZE)+ 1;
         }
    }, [props.totalCount])

    const selectPageEvent = useCallback((selectedPage)=>{
        props.pageSelectEvent(selectedPage);
    }, [props.totalCount]);

    const preparePages = useCallback(function(){
        const pagesList = [];
        for(let i =1; i <= calculateTotalPages; i++){
              pagesList.push(<div className="pagination-pages__list-item" aria-label="Pagination Pages No"  onClick={selectPageEvent.bind({}, i)}> {i}</div>);  
        }
        return pagesList;
    },[props.totalCount]);

    return <section className="pagination-pages-wrapper">
                <div className="pagination-pages" arial-label="Pagination Pages" role="list">
                    {preparePages()}
                </div>      
           </section>;
} 