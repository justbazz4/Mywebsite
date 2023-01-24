import Link from 'next/link';
import LOGO from '../public/LOGO.jpg';
import Image from 'next/image';



function Footer() {
  return (
   
      <footer className='sticky bottom-2 w-full cursor-pointer bottom-3'>
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
  )
}

export default Footer