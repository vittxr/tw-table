import React from 'react'
import Icon from '../../../icons'
import { SharedProps } from './types'

const className = "px-3 py-1 border border-transparent rounded-full bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:bg-gray-200 dark:disabled:bg-gray-500 disabled:cursor-not-allowed"

const PageControls = ({table}: SharedProps) => {
  return (
    <>
        <button
            className={`flex ${className}`}
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
        >
            <Icon name="chevron-left" className="h-3 w-3" />
            <Icon name="chevron-left" className="h-3 w-3" />
        </button>
        <button
            className={`${className}`}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
        >
            <Icon name="chevron-left" className="h-3 w-3" />
        </button>
        <button
            className={`${className}`}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
        >
            <Icon name="chevron-right" className="h-3 w-3" />
        </button>
        <button
            className={`flex ${className}`}
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
        >
            <Icon name="chevron-right" className="h-3 w-3" />
            <Icon name="chevron-right" className="h-3 w-3" />
        </button>
    </>
  )
}

export default PageControls