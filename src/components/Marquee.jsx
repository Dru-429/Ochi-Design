import { motion } from "framer-motion"

const Marquee = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-12 sm:py-40 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-x-hidden'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap ">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 7}} className='text-[12vw] sm:text-[15vw] md:text-[17vw] leading-[12vw] sm:leading-[15vw] md:leading-[17vw] flex items-center font-mono font-semibold uppercase md:mb-10 pt-1 pb-0 tracking-tighter pr-20'>
                We are Ochi 
            </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 7}} className='text-[12vw] sm:text-[15vw] md:text-[17vw] leading-[12vw] sm:leading-[15vw] md:leading-[17vw] flex items-center font-mono font-semibold uppercase md:mb-10 pt-1 pb-0 tracking-tighter pr-20'>
                We are Ochi 
            </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 7}} className='text-[12vw] sm:text-[15vw] md:text-[17vw] leading-[12vw] sm:leading-[15vw] md:leading-[17vw] flex itemscenter font-mono font-semibold uppercase md:mb-10 pt-1 pb-0 tracking-tighter pr-20'>
                We are Ochi 
            </motion.h1>

        </div>
    </div>
  )
}

export default Marquee