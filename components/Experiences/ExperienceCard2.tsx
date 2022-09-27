import { motion } from 'framer-motion';
import lOGO from '../../public/g-logo.png';
import Image from 'next/image';




type Props = {}

function ExperienceCard2({}: Props) {
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
        <h4 className='text-4xl font-light'>Google Academy</h4>
         <p className='font-bold text-2xl mt-1'>Software engineer</p>
         <div className='flex space-x-2 my-2'>
          <img 
             className='h-10 w-10 rounded-full'
             src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png
           ' alt='logo'/>
          <img 
             className='h-10 w-10 rounded-full'
             src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png
           ' alt='logo'/>
      
           </div>

         <ul className='list-disc space-y-0 ml-5 text-lg '>
            <li>Summary Points: Coding brought me back to life , so it is all about my happy moments . Join me and lets code the world to a better place </li>
           
           
            {/* <li>Summary Points: Coding brought me back to life , so it is all about my happy moments . Join me and lets code the world to a better place </li> */}
       
         </ul>
      </div>
    </article>
  )
}

export default ExperienceCard2