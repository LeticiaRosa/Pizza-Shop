import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './navLink'
import { ThemeToggle } from './theme/theme-toggle'

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
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <AccountMenu />
          </div>
        </nav>
      </header>
    </div>
  )
}
