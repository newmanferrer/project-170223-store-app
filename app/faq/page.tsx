import { Header } from '@/app/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'FAQ Page',
  description: 'FAQ Page'
}

export default function FAQPage() {
  return (
    <main className={styles.container}>
      <Header />
      <h1 className={styles.container__title}>FAQ</h1>

      <div className={styles.container__questions_wrapper}>
        <details className={styles.container__details}>
          <summary className={styles.container__summary}>
            How can I sell my product in your store?
          </summary>
          <p className={styles.container__paragraph}>
            Register for the flexibility to sell one item or thousands. Choose a selling plan based
            on your needs—you can change plans at any time. Use Seller Central to create a product
            listing. Create a great product detail page by following this Quick-Start Style Guide.
            Promote products through Amazon advertising or other marketing channels. Fulfill orders
            quickly when customers make a purchase.
          </p>
        </details>

        <details className={styles.container__details}>
          <summary className={styles.container__summary}>What can I sell in your store?</summary>
          <p className={styles.container__paragraph}>
            The possibilities are virtually limitless. What you can sell depends on the product, the
            product category, and the brand. Some categories are open to all sellers, some require a
            Professional seller account, some require approval to sell, and some include products
            that cannot be sold by third-party sellers.
          </p>
        </details>

        <details className={styles.container__details}>
          <summary className={styles.container__summary}>
            What items can’t be sold in your store?
          </summary>
          <p className={styles.container__paragraph}>
            Some products may not be listed as a matter of compliance with legal or regulatory
            restrictions (for example, prescription drugs) or policy (for example, crime scene
            photos). For detailed information, visit Seller Central Help to learn more about
            restrictions, and how to request approval for new products in certain categories.
          </p>
        </details>

        <details className={styles.container__details}>
          <summary className={styles.container__summary}>
            How do beginners sell in your’s store?
          </summary>
          <p className={styles.container__paragraph}>
            Getting started is as simple as choosing a selling plan and setting up an store seller
            account. In order to complete your registration, make sure you have access to your bank
            account number and bank routing number, chargeable credit card, government-issued ID,
            tax information, and phone number.
          </p>
        </details>
      </div>
    </main>
  )
}
