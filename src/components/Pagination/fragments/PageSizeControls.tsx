import React from 'react'
import { SharedProps } from './types'
import { useLabels } from '../../../providers/LabelsProvider'

const PageSizeControls = ({table}: SharedProps) => {
  const { texts } = useLabels();

  return (
    <div className="space-x-2">
        <span>{texts.pagination!.show}</span>
        <select
            value={table.getState().pagination.pageSize}
            onChange={e => {
                table.setPageSize(Number(e.target.value))
            }}
            className="bg-white dark:bg-gray-700 rounded px-2 py-1 text-sm outline-none"
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