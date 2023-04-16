import Link from 'next/link'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <form className={styles.container__signin_form}>
        <div className={styles.container__inputs_wrapper}>
          <input className={styles.container__input} placeholder='Name' />
          <input className={styles.container__input} placeholder='Last Name' />
          <input className={styles.container__input} placeholder='E-mail' type='email' />
          <input className={styles.container__input} placeholder='Password' type='password' />
        </div>
        <div className={styles.container__button_wrapper}>
          <button className={styles.container__button}>Sing in</button>
        </div>
      </form>

      <div className={styles.container__tags_wrapper}>
        <ul className={styles.container__ul}>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/adidas'>
              Adidas
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/github'>
              Github
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/nike'>
              Nike
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/men'>
              Men
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/women'>
              Women
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/kids'>
              Kids
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/latest'>
              Latest
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/new-arrivals'>
              New Arrivals
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/most-popular'>
              Most Popular
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/most-wanted'>
              Most Wanted
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/most-anticipated'>
              Most Anticipated
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products/shoes'>
              Shoes
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='products'>
              Products
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.container__navbar_wrapper}>
        <ul className={styles.container__ul}>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='/'>
              Home
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='/products'>
              Products
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='/faq'>
              FAQ
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link className={styles.container__link} href='/signin'>
              Sign in
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.container__search_wrapper}>
        <input className={styles.container__input} type='search' placeholder='Search' />
      </div>

      <div className={styles.container__contacts_wrapper}>
        <ul className={styles.container__ul}>
          <li className={styles.container__li}>
            <Link
              className={styles.container__link}
              href='https://github.com/newmanferrer/project-170223-store-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Newman Ferrer
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link
              className={styles.container__link}
              href='https://accounts.google.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              newmanferrer@gmail.com
            </Link>
          </li>
          <li className={styles.container__li}>
            <span className={styles.container__span}>+58 261 555 55 55</span>
          </li>
          <li className={styles.container__li}>
            <span className={styles.container__span}>Maracaibo - Venezuela</span>{' '}
          </li>
        </ul>
      </div>

      <div className={styles.container__social_networks_wrapper}>
        <ul className={styles.container__ul}>
          <li className={styles.container__li}>
            <Link
              className={styles.container__link}
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link
              className={styles.container__link}
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link
              className={styles.container__link}
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link
              className={styles.container__link}
              href='https://www.youtube.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Youtube
            </Link>
          </li>
          <li className={styles.container__li}>
            <Link
              className={styles.container__link}
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin-in
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.container__copyright_wrapper}>
        <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
          Newman Ferrer
        </h2>
        <h3 className={`${styles.container__title} ${styles.container__title_h3}`}>
          Copyright © 2023
        </h3>
        <h3 className={`${styles.container__title} ${styles.container__title_h3}`}>
          All rights reserved
        </h3>
      </div>
    </footer>
  )
}
