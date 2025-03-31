import { Helmet } from 'react-helmet-async'

import { Input } from '../../components/ui/input'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2 " action="">
          <span className="text-sm font-semibold">Filtros</span>
          <Input
            type="text"
            placeholder="Nome do Cliente"
            className="h-8 w-[320px]"
          />
        </form>
        <div className="border rounded-md"></div>
      </div>
    </>
  )
}
