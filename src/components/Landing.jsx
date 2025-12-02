import { easeInOut, motion, useAnimationControls } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6";
import EyeOpening from '../icons/EyesOpening';

const Landing = () => {

    const controls= useAnimationControls()

    const onHover = () => {
        controls.start({background: "#F1F1F1", color: "#212121" })
    }

    const onExit = () => {
        controls.start({background: "#212121", color: "#F1F1F1" })
    }

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full min-h-screen flex flex-col gap-[50vh] md:block bg-zinc-900 pt-1'>
            <div className='textStructure mt-20 md:mt-56 px-6 w-full h-full'>
                {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className='w-fit flex items-center'>
                                {index === 1 &&
                                    (<motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{ ease: easeInOut, duration: 1 }}
                                        className='w-[28vw] md:w-[9vw] md:h-[5.5vw] bg-green-500 mr-2 md:mr-5 rounded-md ralative'>
                                        <div className='relative md:bottom-4'>
                                            <EyeOpening />
                                        </div>
                                    </motion.div>)
                                }

                                <h1 className='uppercase text-[12vw] md:text-[7.5vw] leading-[10vw] md:leading-[6vw] tracking-tighter font-bold flex items-center'>
                                    {item}
                                </h1>
                            </div>
                        </div>)
                })}
            </div>
            <div className='border-t-[1px] border-zinc-800 -mt-28 md:mt-44 flex flex-col md:flex-row justify-between md:items-center items-start relative px-2'>
                {[
                    "For public and private companies",
                    "From the first pitch to IPO"
                ].map((item, index) => (
                    <p className='text-md font-light py-5 px-6 md:px-20 tracking-tight leading-none' key={index}>{item} </p>
                ))}
                <motion.div 
                    className="start flex gap-2 "
                    onMouseEnter={onHover}
                    onMouseLeave={onExit}
                >
                    <motion.div 
                        className='text-sm uppercase font-light px-5 py-2 border-[1px] border-zinc-400 cursor-pointer rounded-3xl'
                        whileHover={{background: "#F1F1F1", color: "#212121"}}
                    >
                        Star the project
                    </motion.div>
                    <motion.div 
                        className='w-10 h-10 rounded-full border-[1px] border-zinc-400 cursor-pointer flex justify-center items-center rotate-45'
                        animate={controls}
                    >
                        <span>
                            <FaArrowUpLong />
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Landing  