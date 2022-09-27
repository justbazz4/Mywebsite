import React from 'react'
import { motion } from 'framer-motion';
import Logo from '../public/myphoto1.jpg';
import Image from 'next/image';


type Props = {}

function About({}: Props) {
  return (
   
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className='flex flex-col relative text-center md:text-left h-screen
     md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl'>About</h3>

     <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{duration: 1.2,}}
      whileInView={{opacity:1, x: 0 }}
      viewport={{once: true}}
       className='mt-4'
       >
        <Image  src={Logo} width={300} height={450}  
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain
         md:rounded-lg md:w-94 md:h-95 xl:w-[500px] xl:h-[500px]'
        />
     </motion.div>

     <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here Is A <span className='underline decoration-gray-500'>Little</span> Background</h4>
        <p className='text-sm'>Hi there, My name is Sam Uket. I'm an inventive  full stack web developer who is passionate about technology and people .

          Currently working with technologies like Javascript, Reactjs , Node , Express , Moralis , Nextjs , Ethers , Thirdweb and other technologies within Javascript and Currently learning more about the Web 3 technology  too. 

             I am resilient , Organized and  attentive to details and  focus on problem solving , which is what drives my interest in technology.  I am eager to jump on the next phase of learning something new.
        </p>
     </div>

     
     </ motion.div>
     )
  
}

export default About