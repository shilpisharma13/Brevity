import Header from './components/Header'
import './globals.css'
import Footer from './components/Footer'
import Filter from './components/Filter'
import 'tailwindcss/tailwind.css'
import { FilterProvider } from './context/filter_context'

export const metadata = {
  title: 'SneakersKicks',
  description: 'One stop shop for all shoes',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='"bg-gray-900'>
      <body>
        <div className='border-b p4'>
          <Header />
        </div>
        <div className='p-4'>
          <FilterProvider>{children}</FilterProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
