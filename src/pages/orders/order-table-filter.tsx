import { Input } from '../../components/ui/input'

export function OrderTableFilter() {
  return (
    <form className="flex items-center gap-2 " action="">
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        type="text"
        placeholder="Nome do Cliente"
        className="h-8 w-[320px]"
      />
    </form>
  )
}
