export type Product = {
  id: number
  name: string
  description: string
  categories: string[]
  variants: string[]
  sizes: number[]
  price: number
  reviews: number
  stars: number
}

export type Route = {
  title: string
  path: string
  element: JSX.Element
}
