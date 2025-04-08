import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname: location } = useLocation()

  return (
    <Link
      data-current={props.to === location}
      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground data-[current=true]:text-foreground data-[current=true]:font-semibold"
      {...props}
    />
  )
}
