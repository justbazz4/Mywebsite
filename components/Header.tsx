import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

function Header({}: Props) {
  return (
     <header className='sticky p-5 top-0 flex item-start justify-between max-w-2xl mx-auto z-20
      xl:items-center '>
        <motion.div

          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
           className='flex flex-row items-center'>
           {/* social icons  */}
           <SocialIcon url='https://www.youtube.com/blockchainbazz' 
            fgColor='gray'
            bgColor='transparent'
            />
           <SocialIcon url='https://www.twitter.com/mrbazz9' 
            fgColor='gray'
            bgColor='transparent'
            />
           <SocialIcon url='https://www.linkedin.com/sam uket' 
            fgColor='gray'
            bgColor='transparent'
            />
           <SocialIcon url='https://www.instagram.com/blockchain_bazz' 
            fgColor='gray'
            bgColor='transparent'
            />
        </motion.div>
         
         <Link href='#contact'>
        <motion.div 
           initial={{
             x: 500,
             opacity: 0,
             scale:0.5
           }}
           animate={{
            x: 0,
            opacity: 1,
            scale: 1,
           }}
           transition={{
            duration: 1.5
          }}
           className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
              className='cursor-pointer' 
              network='email'
              fgColor='gray'
              bgColor='transparent'
              
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-700'>Get in Touch</p>
        </motion.div>
        </Link>
   
     </header>
  )
}

export default Header