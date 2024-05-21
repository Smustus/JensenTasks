import { http, HttpResponse } from 'msw'

const mockData = {
  products: [
  {
    amount: 0,
    brand: "LED Lights",
    description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    images: "https://cdn.dummyjson.com/product-images/28/1.jpg",
    key: '1',
    setAmount: (() => {}),
    title: "3D Embellishment Art Lamp"
  },
  {
    amount: 0,
    brand: "Apple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, pariatur.",
    images: "https://cdn.dummyjson.com/product-images/2/1.jpg",
    key: '2',
    setAmount: (() => {}),
    title: "Apple 3D Art Lamp"
  },
  {
    amount: 0,
    brand: "Microsoft",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, pariatur.",
    images: "https://cdn.dummyjson.com/product-images/8/1.jpg",
    key: '3',
    setAmount: (() => {}),
    title: "Microsoft 3D Embellishment Art Lamp"
  },
  {
    amount: 0,
    brand: "iPhone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, pariatur.",
    images: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    key: '4',
    setAmount: (() => {}),
    title: "iPhone 3D Embellishment Art Lamp"
  }
  ],
  total: 4,
  skip: 0,
  limit: 5
}
 
export const handlers = [
  http.get('https://dummyjson.com/products', () => {
    return HttpResponse.json(mockData)
  }),
]
