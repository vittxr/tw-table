import { Row } from '@tanstack/react-table';

export default function numericFilterFn<TData extends object>(
  row: Row<TData>,
  columnId: string,
  filterValue: string | null,
) {
  const rowValue = row.getValue(columnId);
  if (filterValue == null || filterValue === '') return true; // No filter applied
  return String(rowValue).includes(filterValue); // Number(rowValue) === Number(filterValue); // Adjust logic as needed
}
