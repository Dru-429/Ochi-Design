import React from 'react'
import LinkHover from './LinkHover'
import ArrowButton from './ArrowButton'


const About = () => {
    return (
        <div className='bg-[#CDEA68] w-full rounded-tl-3xl rounded-tr-3xl px-6 sm:px-10 md:p-20 py-8 relative'>
            <h1 className='text-black font-sans text-[6vw] md:text-[4vw] leading-none tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>

            <div className='w-full border-t-[2px] border-[#99AD53] mt-20 pt-10 flex flex-col md:flex-row gap-5'>
                <div className='w-full md:w-1/2 '>
                    <h1 className='text-4xl md:text-6xl text-zinc-900 mt-6 md:mt-10 mb-6 md:mb-10'>Our approach</h1>
                    <ArrowButton />
                </div>
                <div className='w-full md:w-1/2 h-64 md:h-[70vh] bg-[#a3bc4c] rounded-3xl overflow-hidden'>
                    <img  
                        className='w-full h-full rounded-3xl object-cover' 
                        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" 
                        alt="org" 
                    />
                </div>
            </div>

            <div className='w-full border-t-[2px] mt-20 pt-10 flex flex-col md:flex-row gap-5 border-[#99AD53] '>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-2xl md:text-3xl text-zinc-900 '>What you can expect:</h2>
                </div>
                <div className='w-full md:w-1/2 flex flex-col md:flex-row'>
                    <div className='text-zinc-900 w-full md:w-1/2 text-lg md:text-xl track'>
                        <p>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        </p>
                        <br />
                        <p>
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                        </p>
                    </div>

                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start md:items-center mt-6 md:mt-0'>
                        <h2 className='text-zinc-900 text-xl '>Socials : </h2>
                        <div className='pt-2'>
                            {['Instagram', 'LindedIn', 'Behance', 'Facebook'].map((item, index) => (
                                <div key={index} className='text-lg md:text-xl capitalize text-zinc-800 pl-4 md:pl-10 cursor-pointer'>
                                    <LinkHover item={item} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About