export const convertProductNameToPath = (productName: string) => {
  return productName.toLowerCase().replace(/\s/g, '-')
}
