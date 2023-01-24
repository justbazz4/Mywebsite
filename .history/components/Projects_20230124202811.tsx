import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/lotterylogo.jpg';



type Props = {};

function Projects({}: Props) {
  
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0 px-10'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl'>
         Projects
        </h3> 

  
       
       <div  className='w-full absolute top-[30%] bg-green-700 left-0 h-[400px] -skew-y-12' ></
       
  </div>
  )
}

export default Projects