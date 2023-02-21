import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function HomePage() {
  const products = await prisma.product.findMany()

  const oneProduct = await prisma.product.findFirst({
    where: {
      id: 34
    }
  })

  /* const updateProduct = await prisma.product.update({
    where: { id: 28 },
    data: { price: 900 }
  }) */

  /* await prisma.product.updateMany({
    data: { price: 900 }
  }) */

  /* const deleteProduct = await prisma.product.delete({
    where: { id: 31 }
  }) */

  return (
    <>
      <h1>Home Page</h1>
      <h2>All Products (findMany)</h2>
      {products &&
        products.map((product: any) => (
          <article
            key={product.id}
            style={{ margin: '0.5rem', padding: '2rem', border: '2px solid black' }}
          >
            <h3>{product.name}</h3>
            <h4>ID: {product.id}</h4>
            <h4>price: ${product.price}</h4>
            <h4>stock: {product.stock}</h4>
          </article>
        ))}

      <h2>One Product (findFirst)</h2>
      {oneProduct && (
        <article style={{ margin: '0.5rem', padding: '2rem', border: '2px solid black' }}>
          <h3>{oneProduct.name}</h3>
          <h4>ID: {oneProduct.id}</h4>
          <h4>price: ${oneProduct.price}</h4>
          <h4>stock: {oneProduct.stock}</h4>
        </article>
      )}

      {/* <h2>Update Product (update)</h2>
      {updateProduct && (
        <article style={{ margin: '0.5rem', padding: '2rem', border: '2px solid black' }}>
          <h3>{updateProduct.name}</h3>
          <h4>ID: {updateProduct.id}</h4>
          <h4>price: ${updateProduct.price}</h4>
          <h4>stock: {updateProduct.stock}</h4>
        </article>
      )} */}

      {/* <h2>Delete Product (delete)</h2>
      {deleteProduct && (
        <article style={{ margin: '0.5rem', padding: '2rem', border: '2px solid black' }}>
          <h3>{deleteProduct.name}</h3>
          <h4>ID: {deleteProduct.id}</h4>
          <h4>price: ${deleteProduct.price}</h4>
          <h4>stock: {deleteProduct.stock}</h4>
        </article>
      )} */}
    </>
  )
}
