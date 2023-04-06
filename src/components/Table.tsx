import React from 'react'

type Props = {
  columns: string[]
}

const Table = ({columns}: Props) => {
  return (
    <div>
      { columns.map(column => (<div>{column}</div>)) }
    </div>
  )
}

export default Table