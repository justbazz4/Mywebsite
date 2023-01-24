import React from 'react'
import { motion }from 'framer-motion'
import Image from 'next/image';



type Props = {
  directionLeft?: boolean;
};

function Skill4({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.div 
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          
         >
          <Image 
            className=' rounded-full border border-red-300 object-cover filter group-hover:grayscale transition duration-300 ease-in-out md:w-16 md:h-16'
            src=alt='logo'
            width={52} height={52}

          />
          </motion.div>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out md:w-14 md:h-14 group-hover:bg-white h-12 w-12 
          rounded-full z-0 ' >
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>70%</p>
            </div>
        </div>
        
    </div>
  )
}

export default Skill4