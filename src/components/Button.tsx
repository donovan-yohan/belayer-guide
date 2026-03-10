import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
}

export default function Button({ children, variant = 'primary', href }: ButtonProps) {
  const base = 'inline-block px-6 py-3 rounded font-semibold text-sm transition-all'
  const styles =
    variant === 'primary'
      ? `${base} bg-accent text-bg-base hover:bg-amber-400`
      : `${base} border border-surface text-text-secondary hover:text-text-primary hover:border-text-muted`

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={styles}>
        {children}
      </Link>
    )
  }

  return <button className={styles}>{children}</button>
}
