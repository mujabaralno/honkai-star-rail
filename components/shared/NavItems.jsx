'use client'

import React from 'react'
import { headersLink } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavItems = () => {
    const pathname = usePathname();
  return (
    <ul
    className='flex flex-col gap-10 md-flex-between w-full md:flex-row items-start'
    >
      {headersLink.map((link) => {
        const isActive = pathname === link.route;

        return (
            <li
            className={`${isActive ? 'text-white' : 'text-white/50 hover:text-white'}
            flex-center p-medium-18 whitespace-nowrap
            `}
            key={Link.route}
            >
                <Link
                href={link.route}
                >
                    {link.label}
                </Link>
            </li>
        )

      })}
    </ul>
  )
}

export default NavItems
