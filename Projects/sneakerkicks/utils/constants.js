export const options = {
  method: 'GET',
  url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
  params: { limit: '100' },
  headers: {
    'X-RapidAPI-Key': 'bafe7a4168msh1a313913b97ab2ep1770b4jsn4c2fae9deacc',
    'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
  },
}

export const links = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Products',
    url: '/products',
  },
]
