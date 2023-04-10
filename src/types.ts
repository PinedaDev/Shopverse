export type Product = {
  id: number
  name: string
  img: string
  description: string
  categories: string[]
  sizes: number[]
  colors: string[]
  price: number
  reviews: number
  stars: number
}

export type CartItem = {
  id: number
  productID?: number
  name: string
  img: string
  size: number
  color: string
  price: number
  quantity: number
}

export type GoogleUser = {
  aud: string
  azp: string
  email_verified: boolean
  exp: number
  email: string
  given_name: string
  family_name: string
  picture: string
  iat: number
  iss: string
  jti: string
  name: string
  nbf: number
  sub: string
  role?: Role
}

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
