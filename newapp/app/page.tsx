import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json()
  return <h1>Hello, {data.full_name}!</h1>
}
