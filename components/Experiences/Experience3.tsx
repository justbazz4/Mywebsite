import React from 'react';
import { motion } from 'framer-motion';
import lOGO from '../../public/techStudio-logo.jpg';
import Image from 'next/image';



type Props = {}

function Experience3({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-blue-200 p-10 hover:opacity-100 opacity-40
     cursor-pointer transition-opacity duration-200 overflow-hidden'>
     <motion.Image
     initial={{
       y: -100,
       opacity: 0,
     }}
     transition={{ duration: 1.2 }}
     whileInView={{ opacity: 1, y: 0}}
     viewport={{ once: true}}
      >
       <Image src={lOGO} width={93} height={93} className=' rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center'/>
     </motion.Image>
     <div className='px-0 md:px-10'>
       <h4 className='text-4xl font-light'>Tech Studio Academy</h4>
        <p className='font-bold text-2xl mt-1'>Creative engineer</p>
        <div className='flex space-x-2 my-2'>
         <img 
            className='h-10 w-10 rounded-full'
            src='https://png.pngtree.com/png-clipart/20190830/ourmid/pngtree-network-security-blue-lock-three-dimensional-pattern-png-image_1701770.jpg
          ' alt='logo'/>
        
         <img 
            className='h-10 w-10 rounded-full'
            src='https://www.nicepng.com/png/detail/207-2076661_email-logo-transparent-www-mail-logo-png-transparent.png
          ' alt='logo'/>
          </div>
        <p className='uppercase py-5 text-purple-900 '>Stopped work in May/2022...</p>

        <ul className='list-disc space-y-0 ml-5 text-lg '>
           <li>Summary Points: Coding brought me back to life , so it is all about my happy moments . Join me and lets code the world to a better place </li>
           <li>It was a great Learning curve being able to dablle into the digital world</li>
           {/* <li>Summary Points: Coding brought me back to life , so it is all about my happy moments . Join me and lets code the world to a better place </li> */}
      
        </ul>
     </div>
   </article>
  )
}

export default Experience3