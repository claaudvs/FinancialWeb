'use client'

import './Table.component.css'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
interface TableProps {
  title: string
  columns: GridColDef[]
  rowsData: any[]
}

function TableComponent({ title, columns, rowsData }: TableProps): JSX.Element {
  return (
    <DataGrid
      rows={rowsData}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 15 }
        }
      }}
      pageSizeOptions={[15, 30]}
    />
  )
}

export default TableComponent
