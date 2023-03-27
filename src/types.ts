export type Product = {
  id: number
  name: string
  img: string
  description: string
  categories: string[]
  variants: string[]
  sizes: number[]
  price: number
  reviews: number
  stars: number
  isOnCart?: boolean
}
