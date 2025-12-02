import React from 'react'
import Logo from '../icons/Logo'
import LinkHover from './LinkHover'

const Footer = () => {
    return (
        <div className='w-full min-h-screen bg-zinc-900 rounded-t-3xl px-6 sm:px-10 md:px-20 py-10 md:py-20 relative'>

            <div className=' flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-1/2 h-full'>
                    <h1 className='uppercase text-[10vw] md:text-[6vw] leading-[8vw] md:leading-[5vw] tracking-tighter text-zinc-100'>EYE-OPENING</h1>
                </div>

                <div className='w-full md:w-1/2 h-full '>
                    <h1 className='uppercase text-[10vw] md:text-[6vw] leading-[8vw] md:leading-[5vw] tracking-tighter text-zinc-100'>presentations</h1>
                    <div className='pt-8 md:pt-20'>
                        <h2 className='text-zinc-200 text-lg md:text-xl '>Socials : </h2>
                        <div className='pt-2'>
                            {['Instagram', 'LindedIn', 'Behance', 'Facebook'].map((item, index) => (
                                <div key={index} className='w-fit text-lg md:text-xl capitalize text-zinc-200 pl-4 md:pl-10 cursor-pointer'>
                                    <LinkHover item={item} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pt-8 md:pt-10 ' >
                        <h2 className='text-zinc-200 text-lg md:text-xl '>Menu : </h2>
                        <div className='pt-2'>
                            {['Home', 'Service', 'About', 'Our Work'].map((item, index) => (
                                <div key={index} className='text-lg md:text-xl capitalize text-zinc-200 pl-4 md:pl-10 cursor-pointer'>
                                    <LinkHover item={item} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='pt-8 md:pt-10'>
                        <h2 className='text-zinc-200 text-lg md:text-xl'>Location :</h2>
                        <div className='pt-2 pl-2 '>
                            202-1965 W 4th Ave
                            Vancouver, Canada
                        </div>
                    </div>
                </div>

            </div>

            <div className='Footer w-full border-t-[1px] border-zinc-600 flex flex-col md:flex-row items-center gap-2 justify-between absolute left-0 bottom-0 py-3 px-5 rounded-xl'>
                <Logo />
                <div className='text-zinc-500'>ochi design 2024. Legal Terms</div>
                <div className='text-zinc-500'>Created by _dru</div>
            </div>

        </div>
    )
}

export default Footer