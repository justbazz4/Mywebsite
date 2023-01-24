import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from './BackGroundCircles';
import logo from '../public/myPhoto5.jpg';
import Image from 'next/image';
import Link from 'next/link';


type Props = {}

function Hero({}: Props) {
  const {text, count} = useTypewriter({
    words: ["Hi, The name is Sam Uket",
    "Im-A-Software-Engineer.js", 
    "<AndILoveTheWeb3 />"
  ],
  loop: true,
  delaySpeed: 2000,
});
  return <div className='h-screen flex flex-col space-y-0 items-center justify-center
  text-center overflow-hidden'>
      <BackGroundCircles />
      <Image src={logo} alt='logo'
      className='relative rounded-full mx-auto object-cover'
      width='200px'
      height='200px'
       />
       <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-700 pb-2 tracking-[15px]'>Software Engineer</h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
      <span className='mr-3'>{text}</span>
      <Cursor />
      </h1>
      <div className='pt-5'>
          <Link href="#about">
          <button className='herobutton'>About</button>
          </Link>
           <Link href='#experience'>
           <button className='herobutton'>Experience</button>
           </Link>
           <Link href='#skills'>
           <button className='herobutton'>Skills</button>
           </Link>
          <Link href='#projects'>
          <button className='herobutton'>Projects</button>
          </Link> 
        </div>
      </div>
  </div>
}

export default Hero
