import Link from 'next/link'
import NavLink from './Nav-link'

const Header = () => {
  return (
    <>
      <div className=' p-4'>SneakerKicks</div>
      <div className='p-4 space-x-4'>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/products'}>Products</NavLink>
        <NavLink href={'/signin'}>SignIn</NavLink>
        <NavLink href={'/cart'}>Cart</NavLink>
      </div>
    </>
  )
}

export default Header
