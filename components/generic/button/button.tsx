import styles from './button.module.scss'

interface ButtonProps {
  href?: string
  variant?: 'filled' | 'outline'
  size?: 'default' | 'wide'
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  children: React.ReactNode
}

const Button = ({ href, variant = 'filled', size = 'default', disabled, onClick, children }: ButtonProps) => {
  const className = [styles.btn, variant === 'outline' ? styles.outline : styles.filled, size === 'wide' ? styles.wide : '', disabled ? styles.disabled : ''].filter(Boolean).join(' ')

  if (onClick || !href) {
    return (
      <button className={className} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default Button
