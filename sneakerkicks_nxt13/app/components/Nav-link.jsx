'use client'

import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
  let segment = useSelectedLayoutSegment()
  let active = href === `/${segment}`

  return (
    <>
      <Link href={href} className={active ? 'underline' : ''}>
        {children}
      </Link>
    </>
  )
}

export default NavLink
