import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/lotterylogo.jpg';



type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 px-10'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl'>
         Projects
        </h3> 

       <div className='relative w-full flex oveflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar
        scrollbar-track-gray-500 scrollbar-thumb-slate-400'>
          {projects.map((project) => (
            <div className='w-screen flex-skrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-30 h-screen'>
                
                <motion.img 
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://www.seekpng.com/png/detail/902-9025544_home-page-lottery-tennessee-lottery-logo.png" alt="" />
                 
                 <div className='space-y-10 px-0 md:px-10 max-w-3xl'>
                  <Image src={logo} alt='logo'width={180} height={180} />
                <h4 className='text-white italic font-semibold text-2xl text-center'>
                  <span className='underline decoration-orange-500'>Web 3 lottery pool for pure randmoness and Transparency </span>{""}
                  </h4>

              
                </div>

                
      
            </div>
         ))};
       </div>
       <div  className='w-full absolute top-[30%] bg-green-700 left-0 h-[400px] -skew-y-12' />
  </div>
  )
}

export default Projects