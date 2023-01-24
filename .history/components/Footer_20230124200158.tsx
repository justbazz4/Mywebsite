import React from 'react'
import Link from 'next/link';
import LOGO from ''

function Footer() {
  return (
    <div>
       <Link href='#hero'>
          <footer className='sticky bottom-2 w-full cursor-pointer'>
            <div className='flex items-left justify-left'>
              <Image
                className=' rounded-full filter grayscale hover:grayscale-0'
                width={50}
                height={50}
                src={LOGO}
                alt='footer'
              />
            </div>
          </footer>
        </Link>
    </div>
  )
}

export default Footer