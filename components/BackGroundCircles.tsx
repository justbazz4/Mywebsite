import { motion } from "framer-motion";


type Props = {}

function BackGroundCircles({}: Props) {
  return (
      
<motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.1,1.0],
        borderRadius: ["20%","20%","50%","30%","20%"],
      }}
      transition={{
        duration: 2.5,
      }}
       className='relative flex justify-center items-center mt-[] '>
        <div className='absolute border border-red-600 rounded-full mt-52
        animate-pulse w-95 h-95' 
         />
        <div className=' absolute  border border-red-600 rounded-full mt-52
        animate-ping w-60 h-60'/>
        {/* <div  className=' absolute  border border-red-600 rounded-full mt-52
         w-50 h-50'/> */}
        <div className='rounded-full border border-yellow-600 opacity-20 w-[650px] h-[650px] mt-52
        absolute animate-pulse'/>
        <div />
    </motion.div>
  )
}

export default BackGroundCircles