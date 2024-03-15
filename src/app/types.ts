import { Dispatch, SetStateAction } from "react"
import { RoomName } from "./const"

export interface Room {
  room_name: RoomName
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

export interface RoomNameContextType {
  roomName: RoomName
  isDarkMode: boolean
  setRoomName: Dispatch<SetStateAction<RoomName>>
}