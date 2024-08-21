import React from 'react';
export type TPagination = {
    /** the current page */
    currentPage: number;
    /** the rows count */
    rowsCount: number;
    /** the number of pages to show */
    pageRange?: number;
    /** the callback function called when page changes. */
    onPageChange: (page: number) => void;
};
export default function Pagination({ currentPage, rowsCount, pageRange, onPageChange, }: TPagination): React.JSX.Element;
