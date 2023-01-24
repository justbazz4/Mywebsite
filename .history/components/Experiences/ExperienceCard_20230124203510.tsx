import { motion } from 'framer-motion';
import LOGO from '../../public/LOGO.jpg';
import Image from 'next/image';
import 


type Props = {}

function ExperienceCard({}: Props) {
  return (
      
<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-blue-200 p-10 hover:opacity-100 opacity-40
      cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true}}
       >
        <Image src={LOGO} width={93} height={93} className=' rounded-full xl:w-[200px] xl:h-[200px]
         object-cover object-center' alt='logo2'/>
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO: I'stan Technologies and Innovations</h4>
         <p className='font-bold text-2xl mt-1'>Sam Uket</p>
         <div className='flex space-x-2 my-2'>
          <Image 
             className=' rounded-full' width={35} height={35}
             src={jsLOGO} alt='logo'/>
          <Image 
             className=' rounded-full' width={35} height={35}
             src='https://ih1.redbubble.net/image.525155700.0839/aps,504x498,small,transparent-pad,600x600,f8f8f8.u2.jpg
           ' alt='logo'/>
          <Image 
             className=' rounded-full' width={35} height={35}
             src='https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png
           ' alt='logo'/>
           </div>

         <ul className='list-disc space-y-0 ml-5 text-lg '>
            <li>For the love of programming and technology and it's benefit for humanity I STAN TECHNOLOGY AND INNOVATION was born , just as the name imply we are all about the TECH and it's use and services to humanity . 
              <span className='decoration-green-700 underline font-bold text-2xl px-2'> I'stan Technologies and Innovations </span></li>
        
            
            {/* <li>Summary Points: Coding brought me back to life , so it is all about my happy moments . Join me and lets code the world to a better place </li> */}
       
         </ul>
      </div>
    </article>
  )
}

export default ExperienceCard