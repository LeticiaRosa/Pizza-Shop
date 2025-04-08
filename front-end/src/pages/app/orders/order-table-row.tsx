import { Search, ThumbsUp, X } from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Dialog, DialogTrigger } from '../../../components/ui/dialog'
import { TableCell, TableRow } from '../../../components/ui/table'
import { OrderDetails } from './order-details'

export interface OrderTableRowProps {
  i: number
}

export function OrderTableRow(props: OrderTableRowProps) {
  return (
    <TableRow key={props.i}>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        821e78f7asdhdf128h
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Diego Schell Fernandes</TableCell>
      <TableCell className="font-medium">R$ 149,90</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ThumbsUp className="mr-2 h-4 w-4" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="link" size="sm">
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
