import Link from 'next/link'
import styles from './Logo.module.scss'

interface Props {
  href?: string
  label: string
}

export function Logo({ href = '/', label }: Props) {
  return (
    <Link href={href} className={styles.container}>
      {label}
    </Link>
  )
}
