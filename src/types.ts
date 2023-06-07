export type Product = {
  id: string
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

export type OrderRequest = {
  user: {
    id: string
  }
  products: {
    productId: string
    color: string
    size: number
    amount: number
  }[]
}

export type Order = {
  orderId: string
  user: {
    id: string
    username: string
    role: 'ADMIN' | 'USER'
  }
  status: 'PENDING' | 'TRAVELING' | 'DELIVERED'
  issuedAt: Date
  products: OrderRequest[]
}

export type CartOrder = {
  id: string
  productId: string
  name: string
  img: string
  size: number
  color: string
  price: number
  quantity: number
}

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  orders: number[]
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
