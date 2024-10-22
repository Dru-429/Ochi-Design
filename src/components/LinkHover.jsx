import { motion, useAnimationControls } from 'framer-motion'
import { easeIn } from 'framer-motion/dom'
import React from 'react'

const LinkHover = ({index, item}) => {

    const controls = useAnimationControls()
    const conntrolBar = useAnimationControls()

    const onHover = () => {
        controls.start({ opacity: [0,1,1,1] })
        conntrolBar.start({ opacity: 1, translateX: "400%" })
    }

    const onExit = () => {
        controls.start({ opacity: [1,1,1,0] })
        conntrolBar.start({ opacity: 1, translateX: 0 })
    }

    return (
        <div className='relative' onMouseEnter={onHover} onMouseLeave={onExit}>
            <a
                key={index}
                className={`text-lg font-light capitalize relative cursor-pointer`}
            > {item} </a>
            <motion.div
                className="w-full h-[1px] bg-zinc-100"
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.8 }}
            >

                <motion.div
                    className='w-4 h-[2px] bg-zinc-900 relative left-0'
                    initial={{ opacity: 1, left: 0 }}
                    animate={conntrolBar}
                    transition={{ ease:easeIn, duration: 0.5, delay: 0 }}
                ></motion.div>

            </motion.div>
        </div>
    )
}

export default LinkHover