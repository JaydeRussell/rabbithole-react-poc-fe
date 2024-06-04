import "./searchPagination.css"

import React from "react";
import Pagination from 'react-bootstrap/Pagination';
import { OnPageChange } from "@/types";

interface SearchPaginationProps {
    currentPage: number,
    numPages: number,
    onPageChange: OnPageChange,
}

const SearchPagination: React.FC<SearchPaginationProps> = (props:SearchPaginationProps) => {
    const {
        currentPage,
        numPages,
        onPageChange,
    } = props;

    let items = [];
    for (let i = 1; i <= numPages; i++) {
        items.push(
            <Pagination.Item className="page" key={i} active={i == currentPage} onClick={() => onPageChange(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return <Pagination className="pagination">{items}</Pagination>;
}

export default SearchPagination