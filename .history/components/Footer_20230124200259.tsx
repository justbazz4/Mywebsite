import React from 'react'
import Link from 'next/link';
import LOGO from '../public/LOGO.png';

function Footer() {
  return (
    <div>
      <footer className='sticky bottom-2 w-full cursor-pointer'>
       <Link href='#hero'>
            <div className='flex items-left justify-left'>
              <Image
                className=' rounded-full filter grayscale hover:grayscale-0'
                width={50}
                height={50}
                src={LOGO}
                alt='footer'
              />
            </div>
        
        </Link>
        </footer>
    </div>
  )
}

export default Footer