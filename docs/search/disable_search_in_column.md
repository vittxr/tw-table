By default, column filtering is enabled for all columns. You can disable the column filtering for all columns or for specific columns by using the `enableColumnFilter` column option. 

Disabling column filtering for a column will cause the `column.getCanFilter` API to return false for that column.

```jsx
const columns = [
  {
    header: () => 'Id',
    accessorKey: 'id',
    enableColumnFilter: false, // disable column filtering for this column
  },
  //...
]
```

[tanstack-table - column filtering](https://tanstack.com/table/latest/docs/guide/column-filtering#customize-column-filtering)