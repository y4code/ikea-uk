export interface Room {
  room_name: string
  products: Product[]
}

export interface Product {
  name: string
  url: string
  image_urls: string
  price: number
  description: string
  category_name: string
}
