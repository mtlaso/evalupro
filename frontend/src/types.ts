export type ValidationError = {
  field: string
  message: string
}

export type ApiResponseType = {
  status: number
  message: string
  errors?: ValidationError[]
  data?: any
}

export enum UserRoles {
  ADMIN = 'admin',
  TESTER = 'tester',
  USER = 'user'
}

export type Category = {
  id: string
  title: string
  parentId: string | null
}

export type Product = {
  id: string
  name: string
  brand: string
  categoryId: string
  description: string
  price: number
  image: string
}
