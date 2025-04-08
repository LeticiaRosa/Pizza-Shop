import pizzaIcon from '.././public/pizza-shop-logo2.png'
export interface LogoProps {
  size?: number
  className?: string
}

export function Logo(props: LogoProps) {
  return (
    <img
      src={pizzaIcon}
      alt="Pizza icon"
      className={`h-${props.size ?? 8} ${props.className}`}
    />
  )
}
