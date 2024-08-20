import React from 'react'
import Icon from '@/icons'
import { SharedProps } from './types'

const PageControls = ({table}: SharedProps) => {
  return (
    <>
        <button
            className="flex px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
        >
            <Icon name="chevron-left" className="h-3 w-3" />
            <Icon name="chevron-left" className="h-3 w-3" />
        </button>
        <button
            className="px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
        >
            <Icon name="chevron-left" className="h-3 w-3" />
        </button>
        <button
            className="px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
        >
            <Icon name="chevron-right" className="h-3 w-3" />
        </button>
        <button
            className="flex px-3 py-1 border rounded-full bg-gray-50 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed"
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