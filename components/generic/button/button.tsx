import styles from './button.module.scss'

interface ButtonProps {
  href: string
  variant?: 'filled' | 'outline'
  children: React.ReactNode
}

const Button = ({ href, variant = 'filled', children }: ButtonProps) => (
  <a href={href} className={`${styles.btn} ${variant === 'outline' ? styles.outline : styles.filled}`}>
    {children}
  </a>
)

export default Button
