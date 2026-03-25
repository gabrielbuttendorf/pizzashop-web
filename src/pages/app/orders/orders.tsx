import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  return (
    <>
      <title>Cadastro | pizza.shop</title>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="text-slate-400">
                <TableHead className="w-16"></TableHead>
                <TableHead className="w-35">Identificador</TableHead>
                <TableHead className="w-45">Realizado há</TableHead>
                <TableHead className="w-35">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-35">Total do pedido</TableHead>
                <TableHead className="w-41"></TableHead>
                <TableHead className="w-33"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return <OrderTableRow key={i} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
