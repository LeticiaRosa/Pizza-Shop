import { Home, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { Logo } from './logo'
import { NavLink } from './navLink'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <header className="flex h-16 items-center justify-between border-b border-foreground/5 bg-background px-8">
        <Logo className="h-8" size={12} />
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
