import Link from 'next/link'
import styles from './Navigation.module.scss'

interface ILink {
  id: number
  label: string
  route: string
}

const links: ILink[] = [
  {
    id: 1,
    label: 'Home',
    route: '/'
  },
  {
    id: 2,
    label: 'Store',
    route: '/store'
  },
  {
    id: 3,
    label: 'FAQ',
    route: '/faq'
  },
  {
    id: 4,
    label: 'Sign in',
    route: '/signin'
  }
]

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
