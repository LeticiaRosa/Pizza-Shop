import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './navLink'

export function Header() {
  return (
    <div className="border-b">
      <header className="flex h-16 items-center justify-between border-b border-foreground/5 bg-background px-8">
        <div className="flex items-center gap-3 text-lg text-primary">
          <Pizza className="h-6 w-6" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" /> Home
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" /> Pedidos
          </NavLink>
          <NavLink to="/sign-in">Sair</NavLink>
        </nav>
      </header>
    </div>
  )
}
