import Icon from '../icons';
import { useEffect, useState } from 'react';
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

type TPagesLinks = {
  total: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

type Fallback = {
  startPage: number;
  endPage: number;
  rowsCount: number;
  totalPages: number;
};

const PagesLinks = ({ total, currentPage, setCurrentPage }: TPagesLinks) => {
  const [pagesLinks, setPagesLinks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generatePagesLinks = () => {
      const pagesLinks_: JSX.Element[] = [];

      // the loop start in (current - 2), because we need to consider the previous ellipsis and we want to put the current page in the middle of the pages links. It's work fine, but can be improved i think. Note you will need to change the value according to the number of pages links you want to show.
      const startIn = currentPage > 4 ? currentPage - 2 : 1;
      for (let page = startIn; page <= total; page++) {
        if (currentPage < total && pagesLinks_.length === 8) {
          pagesLinks_[7] = (
            <span
              className={`${
                currentPage === page
                  ? 'z-10 bg-sky-50 border-sky-500 text-sky-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              key={`ellipsis_${page}`}
            >
              ...
            </span>
          );
          pagesLinks_[8] = (
            <a
              key={total}
              href="#"
              className={`${
                currentPage === page
                  ? 'z-10 bg-sky-50 border-sky-500 text-sky-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              aria-current="page"
              onClick={() => setCurrentPage(total)}
            >
              {total}
            </a>
          );
          break;
        }

        if (currentPage > 4) {
          pagesLinks_[0] = (
            <a
              key={1}
              href="#"
              className={`${
                currentPage === page
                  ? 'z-10 bg-sky-50 border-sky-500 text-sky-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              aria-current="page"
              onClick={() => setCurrentPage(1)}
            >
              1
            </a>
          );

          pagesLinks_[1] = (
            <span
              className={`${
                currentPage === page
                  ? 'z-10 bg-sky-50 border-sky-500 text-sky-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              key={`ellipsis_${page}`}
            >
              ...
            </span>
          );
        }

        if (page === currentPage) {
          pagesLinks_.push(
            <a
              key={page}
              href="#"
              className={`${
                currentPage === page
                  ? 'z-10 bg-sky-50 border-sky-500 text-sky-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              aria-current="page"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </a>,
          );
        } else {
          pagesLinks_.push(
            <a
              key={`link_${page}`}
              href="#"
              className={`${
                currentPage === page
                  ? 'z-10 bg-sky-50 border-sky-500 text-sky-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              aria-current="page"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </a>,
          );
        }
      }

      setPagesLinks(pagesLinks_);
    };

    generatePagesLinks();
  }, [currentPage, setCurrentPage, total]);

  return <>{pagesLinks}</>;
};

export default function Pagination({
  currentPage,
  rowsCount,
  pageRange = 10,
  onPageChange,
}: TPagination) {
  const startPage = Math.max(currentPage * pageRange - pageRange + 1, 1);
  const endPage = Math.min(currentPage * pageRange, rowsCount);
  const totalPages = Math.ceil(rowsCount / pageRange);
  const [fallback, setFallback] = useState<null | Fallback>(null);

  useEffect(() => {
    if (!fallback || rowsCount || totalPages) {
      setFallback({
        startPage: startPage,
        endPage: endPage + 10,
        rowsCount: rowsCount,
        totalPages: totalPages,
      });
    }
  }, [pageRange, rowsCount, totalPages]);

  return (
    <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => {
            if (currentPage > 1) onPageChange(currentPage - 1);
          }}
        >
          Back
        </button>
        <button
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => {
            if (currentPage <= rowsCount) onPageChange(currentPage + 1);
          }}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {startPage || fallback?.startPage || 0}
            </span>{' '}
            of{' '}
            <span className="font-medium">
              {endPage || fallback?.endPage || 0}
            </span>{' '}
            Showing{' '}
            <span className="font-medium">
              {rowsCount || fallback?.rowsCount || 0}
            </span>{' '}
            Results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => {
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
            >
              <Icon name="chevron-left" className="h-5 w-5" />
              {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
            </a>

            <PagesLinks
              total={totalPages || fallback?.totalPages || 0}
              currentPage={currentPage}
              setCurrentPage={onPageChange}
            />

            <button
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => {
                if (currentPage <= rowsCount) onPageChange(currentPage + 1);
              }}
            >
              <Icon name="chevron-right" className="h-5 w-5" />
              {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
