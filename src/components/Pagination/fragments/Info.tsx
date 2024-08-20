import React from 'react'
import { SharedProps } from './types'

const Info = ({table}: SharedProps) => {
  return (
    <div className="flex justify-between">
        <div className="text-sm text-gray-600">
            Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
            {table.getRowCount().toLocaleString()} Rows
        </div>
        <div>
            <span className="flex items-center gap-1 text-sm">
                <div>Page</div>
                <strong>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount().toLocaleString()}
                </strong>
            </span>
        </div>
    </div>
  )
}

export default Info