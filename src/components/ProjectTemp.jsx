import {easeOut, motion, useAnimationControls } from 'framer-motion'

const ProjectTemp = ({ brandImg, brand }) => {

    let brandName= brand
    const controls = useAnimationControls()

    const onMouseEnter = () => {
        controls.start({
            top:"40%" ,
            opacity:1
        })
    }

    const onMouseExits = () => {
        controls.start({
            top:"100%",
            opacity: 0,
        })
    }

    return (
        <div 
            className="cardContainer w-full md:w-1/2 h-60 sm:h-80 md:h-[70vh] rounded-2xl relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseExits}
        >
            <div className='card w-full h-full bg-green-500 rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={brandImg}  alt="Project" />
            </div>

            <motion.h1 
                className='px-5 pb-2 rounded-2xl bg-[#b91c1ca9] z-[9] text-3xl md:text-8xl tracking-tight absolute top-3/4 left-1/2 md:left-[25%] -translate-x-1/2 md:translate-x-0'
                initial= {{opacity:0, top:"100%" }}
                animate={controls}
                transition={{ease: easeOut }}
                >

                {brandName.split("").map((item, index) => (
                    <motion.span 
                        className=''
                        key={index}
                        initial= {{opacity:0, top:"100%" }}
                        animate={controls}
                        transition={{ease: easeOut,delay: index*0.15 }}
                    >
                        {item}
                    </motion.span>
                ))}
            </motion.h1>

        </div>

    )
}

export default ProjectTemp