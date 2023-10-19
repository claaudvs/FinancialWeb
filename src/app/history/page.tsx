'use client'
import React from 'react'
import { useGetHistoryQuery } from '../redux/services/financialApi'
import TableComponent from '../components/Table/Table.component'
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams
} from '@mui/x-data-grid'
import './history.css'
import transactionDescriptionType from '../common/constants/TransactionDescriptionType.constant'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

export default function History(): React.JSX.Element {
  const { data, error, isLoading, isFetching } = useGetHistoryQuery(null)
  if (isLoading || isFetching) console.log('cargando')
  if (error) console.log('error')

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'Id User', width: 70 },
    {
      field: 'type',
      headerName: 'Ingreso/Egreso',
      width: 130,
      renderCell: (params: GridRenderCellParams<any>) => (
        <span>
          {params.row.type.toUpperCase() + ' '}
          {params.row.type == 'ingreso' ? (
            <ArrowCircleUpIcon color="success" sx={{ fontSize: 18 }} />
          ) : (
            <ArrowCircleDownIcon color="warning" sx={{ fontSize: 18 }} />
          )}
        </span>
      )
    },
    {
      field: 'expenseType',
      headerName: 'Tipo',
      width: 130,
      valueGetter: (params: GridValueGetterParams) => {
        const value = transactionDescriptionType.find((type: any) => {
          return type.value == params.row.expenseType
        })
        return `${value ? value.label : ''}`
      }
    },
    { field: 'description', headerName: 'Descripcion', width: 150 },
    { field: 'expenseDate', headerName: 'Fecha', width: 120 },
    { field: 'amount', headerName: 'Monto Bs.', width: 110, type: 'number' }
  ]

  return (
    <div className="container">
      <h1>Historial de registros</h1>
      <TableComponent
        title="Historial"
        columns={columns}
        rowsData={data ? [...data].reverse() : []}
      ></TableComponent>
    </div>
  )
}
