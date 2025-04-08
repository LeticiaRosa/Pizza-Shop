import { Link } from 'react-router-dom'

import NotFoundImg from '../public/not-found-cat.png'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <img
        className="w-96 h-42"
        src={NotFoundImg}
        alt="Página não encontrada"
      />

      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-muted-foreground">
        A página que você está procurando não existe ou foi removida.
      </p>
      <p className="text-accent-foreground pt-10">
        Voltar para o{' '}
        <Link to="/" className="text-red-600 dark:text-yellow-500">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
