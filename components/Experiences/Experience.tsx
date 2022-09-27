import { motion }from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import ExperienceCard2 from './ExperienceCard2';
import ExperienceCard3 from './Experience3';






type Props = {}

function Experience({}: Props) {
  return (
      
 <motion.div 
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 1.5 }}
 className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row mt-5
  max-w-full px-10 justify-evenly mx-auto items-center'>
     <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl'>
         Experience
     </h3>

     <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar
      scrollbar-track-gray-500 scrollbar-thumb-slate-400'>
     <ExperienceCard />
     <ExperienceCard2 />
     <ExperienceCard3 />
     </div>
 </motion.div>
  )
}

export default Experience