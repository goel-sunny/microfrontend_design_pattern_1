import React, { Ref, useState } from "react";
import { PaginationPages } from "./components/pagination-pages/PaginationPages";
import { IPaginationProps } from "./pagination.props";
import './Pagination.scss';

const DEFAULT_PAGE_COUNT = 10;

export const Pagination =  React.forwardRef(function Pagination(props: IPaginationProps , ref: Ref<unknown>){
    const [pageCount, setPageCount] = useState(props.size ?? DEFAULT_PAGE_COUNT);
    const [total, setTotal] = useState(props.totalCount);
    
    const pageSelectEvent = function(selectedPage: number) {
        console.log('Current Selected Page', selectedPage);
    }
    
    return (<section className="pagination-wrapper">
                <div className="pagination">
                    <div className="pagination__page-count"></div>
                    <div className="pagination__pages">
                        <PaginationPages totalCount={total} pageSize={props.size} pageSelectEvent= {pageSelectEvent}/>
                    </div>
                    <div className="pagination__totalPages"></div>
                </div>
             </section>);
});
