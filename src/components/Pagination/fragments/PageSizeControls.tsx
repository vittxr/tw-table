import React from 'react'
import { SharedProps } from './types'

const PageSizeControls = ({table}: SharedProps) => {
  return (
    <div className="space-x-2">
        <span>Show</span>
        <select
            value={table.getState().pagination.pageSize}
            onChange={e => {
                table.setPageSize(Number(e.target.value))
            }}
            className="border rounded px-2 py-1 bg-white text-sm"
        >
            {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                    {pageSize}
                </option>
            ))}
        </select>
    </div>
  )
}

export default PageSizeControls