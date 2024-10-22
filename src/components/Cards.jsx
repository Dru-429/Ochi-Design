import React from 'react'

const cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex justify-center items-center gap-5 px-20 py-20'>
        <div className='cardcontainer w-1/2 h-[60vh]'>
            <div className='card w-full h-full bg-[#004D43] rounded-2xl flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo" />
            </div>
        </div>
        <div className='cardcontainer w-1/2 h-[60vh] flex gap-5'>
            <div className='card w-1/2 h-full rounded-2xl bg-[#212121] flex justify-center items-center cursor-pointer relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="bye logo" />
                <button className='absolute left-7 bottom-5 px-5 py-1 border-[2px] border-zinc-100 rounded-full'>Rating @ Cult </button>
            </div>
            <div className='card w-1/2 h-full rounded-2xl bg-[#212121] flex justify-center items-center cursor-pointer relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="hi logo" />
                <button className='absolute left-7 bottom-5 px-5 py-1 border-[2px] border-zinc-100 rounded-full'>Rating @ Cult </button>               
            </div>
        </div>
    </div>
  )
}

export default cards