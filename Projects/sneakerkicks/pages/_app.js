import '@/styles/globals.css'
import { Navbar, Footer } from '../components'
import { ProductsProvider } from '../context/product_context'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ProductsProvider>
    </>
  )
}
