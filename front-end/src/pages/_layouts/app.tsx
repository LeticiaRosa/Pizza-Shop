import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'

export function AppLayout() {
  return (
    <div className="antialiased flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
