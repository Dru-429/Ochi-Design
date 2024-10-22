import React from 'react'
import Logo from '../icons/Logo'
import LinkHover from './LinkHover'

const Footer = () => {
    return (
        <div className='w-full min-h-screen bg-zinc-900 rounded-t-3xl px-20 py-20 relative'>

            <div className=' flex gap-5'>
                <div className='w-1/2 h-full'>
                    <h1 className='uppercase text-[6vw] leading-[5vw] tracking-tighter text-zinc-100'>EYE-OPENING</h1>
                </div>

                <div className='w-1/2 h-full '>
                    <h1 className='uppercase text-[6vw] leading-[5vw] tracking-tighter text-zinc-100'>presentations</h1>
                    <div className='pt-20'>
                        <h2 className='text-zinc-200 text-xl '>Socials : </h2>
                        <div className='pt-2'>
                            {["Instagram", "LindedIn", "Behance", "Facebook"].map((item, index) => (
                                <div className='text-xl capitalize text-zinc-200 pl-10 cursor-pointer w-28'>
                                    <LinkHover item={item} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pt-10 ' >
                        <h2 className='text-zinc-200 text-xl '>Menu : </h2>
                        <div className='pt-2'>
                            {["Home", "Service", "About", "Our Work"].map((item, index) => (
                                <div className='text-xl capitalize text-zinc-200 pl-10 cursor-pointer w-32'>
                                    <LinkHover item={item} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='pt-10'>
                        <h2 className='text-zinc-200 text-xl'>Location :</h2>
                        <div className='pt-2 pl-2 '>
                            202-1965 W 4th Ave
                            Vancouver, Canada
                        </div>
                    </div>
                </div>

            </div>

            <div className='Footer w-full border-t-[1px] border-zinc-600 flex justify-between absolute left-0 bottom-0 py-2 px-5 rounded-xl'>
                <Logo />
                <div className='text-zinc-500'>ochi design 2024. Legal Terms</div>
                <div className='text-zinc-500'>Created by _dru</div>
            </div>

        </div>
    )
}

export default Footer