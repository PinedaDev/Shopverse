export type Product = {
  id: number
  name: string
  img: string
  description: string
  categories: string[]
  size: number[]
  color: string[]
  price: number
  reviews: number
  stars: number
}

export type Order = {
  id: number
  productID?: number
  name: string
  img: string
  size: number
  color: string
  price: number
  quantity: number
}
