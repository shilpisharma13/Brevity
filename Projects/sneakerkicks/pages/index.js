import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { FeaturedProducts, HeroComp } from '../components'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeroComp />
      <FeaturedProducts />
    </>
  )
}
