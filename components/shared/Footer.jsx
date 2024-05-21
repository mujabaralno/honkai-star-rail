import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t'>
      <div className='wrapper justify-between items-center'>
        <Image
        src="/hsrlogo.png"
        width={100}
        height={100}
        alt='logo'
        />
      </div>
    </footer>
  )
}

export default Footer
