import React from 'react'
import { motion } from 'framer-motion';



type Props = {};

function Projects({}: Props) {
  
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0 px-10'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl'>
         Projects
        </h3> 

  
       
       <div  className='w-full absolute top-[30%] bg-green-700 left-0 h-[400px] -skew-y-12' ><motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left 
       xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center mt-5'>
        <h3  className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl'>Projects</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-700 text-2xl'>Hover over a framework for projects done</h3>

        <div className='grid grid-cols-4 gap-5 mt-52'>
        </div>
    </motion.div></div>
       
  </div>
  )
}

export default Projects