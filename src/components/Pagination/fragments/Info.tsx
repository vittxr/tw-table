import React from 'react'
import { SharedProps } from './types'
import { useLabels } from '../../../providers/LabelsProvider'

const Info = ({table}: SharedProps) => {
  const { texts } = useLabels();
 
  return (
    <div className="flex justify-between">
        <div className="text-sm">
            {texts.pagination!.showing} {table.getRowModel().rows.length.toLocaleString()}{" "}
            {texts.pagination!.of}{' '}
            {table.getRowCount().toLocaleString()} {texts.pagination!.rows}
        </div>
        <div>
            <span className="flex items-center gap-1 text-sm">
                <div>{texts.pagination!.page}</div>
                <strong>
                    {table.getState().pagination.pageIndex + 1} {texts.pagination!.of}{' '}
                    {table.getPageCount().toLocaleString()}
                </strong>
            </span>
        </div>
    </div>
  )
}

export default Info