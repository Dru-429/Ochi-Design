import { easeInOut, easeOut, motion, useAnimationControls } from 'framer-motion'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const ArrowButton = () => {

    const controls = useAnimationControls()

    const onHover = () => {
        controls.start({ display:"inline", opacity: [0,1,1,1], scale:1 })
    }

    const onExit = () => {
        controls.start({ display:"none", opacity: [1,1,1,0], scale:0 })
    }


    return (
        <motion.button 
            className='px-6 py-3 bg-zinc-800 rounded-full text-white flex gap-10 items-center relative w-44'
            whileHover={{backgroundColor:" #18181B"}}
            whileTap={{backgroundColor:" #18181B", scale:0.95}}
            onMouseEnter={onHover} 
            onMouseLeave={onExit}
        >
            Read More
            <motion.div 
                className='min-w-2 min-h-2 bg-zinc-100 rounded-full absolute right-5'
                transition={{duration:0.8,ease: easeOut}} 
            >
                <motion.span      
                className=' text-zinc-900 text-lg'            
                initial = {{display:"none",slcale:0}}
                animate={controls}
                transition={{duration:0.5,ease: easeInOut}} 
                >
                    <FaLongArrowAltRight />
                </motion.span>
            </motion.div>
        </motion.button>
    )
}

export default ArrowButton