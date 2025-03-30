import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import pizzaBackground from '../../public/background.jpg' // Ajuste o caminho conforme a localização real da imagem

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 antialiased md:grid-cols-2">
      <div
        style={{
          backgroundImage: `url(${pizzaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex h-full flex-col justify-between p-10"
      >
        <div className="flex items-center gap-3 text-lg text-primary">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>

        <footer className="text-sm text-muted-foreground">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  )
}
