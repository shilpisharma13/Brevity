import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className='margin-auto'>SneakerKicks</div>
      <div className='grid grid-cols-5'>
        <Link href={'/about'}>About</Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/signin'}>SignIn</Link>
        <Link href={'/cart'}>Cart</Link>
      </div>
    </>
  )
}

export default Header
