import { http, HttpResponse } from 'msw'

const mockData = []

 
export const handlers = [
  http.get('https://dummyjson.com/products', () => {
    return HttpResponse.json(mockData)
  }),
]
