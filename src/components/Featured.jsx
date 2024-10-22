import React from 'react'
import ProjectTemp from './ProjectTemp'

const Featured = () => {

    return (

        <div className='w-full py-20 bg-zinc-800 rounded-3xl '>
            <div className='w-full px-20 border-b-[2px] border-zinc-700 pb-[4rem]'>
                <h1 className='text-6xl tracking-tight font-sans text-zinc-100'>Featured projects</h1>
            </div>

            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">

                    <ProjectTemp
                        brandImg={"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"}
                        brand="FYDE"
                    />
                    <ProjectTemp
                        brandImg={"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"}
                        brand="BEAN"
                    />
                </div>

                <div className="cards w-full flex gap-10 mt-10">

                    <ProjectTemp
                        brandImg={"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"}
                        brand="BEAN"
                    />

                    <ProjectTemp
                        brandImg={"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"}
                        brand="TRAWA"
                    />

                </div>

            </div>
        </div>
    )
}

export default Featured