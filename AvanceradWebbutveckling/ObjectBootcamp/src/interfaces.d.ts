interface Username {
  title: string,
  first: string,
  last: string
}

interface User {
  name: Username,
  email: string,
  nat: string
}

export { User };