import React from 'react'
import { links } from '@/utils/constants'
import Link from 'next/link'
import { GiSonicShoes } from 'react-icons/gi'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
      <div className='grid grid-cols-4'>
        <div>
          <GiSonicShoes className='w-24 h-24' />
        </div>
        {links.map((link) => {
          const { id, text, url } = link
          return (
            <div key={id}>
              <Link href={url}>{text}</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navbar

const Wrapper = styled.section``
