const cards = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-100 flex flex-col md:flex-row justify-center items-center gap-5 px-6 sm:px-10 md:px-20 py-10'>
        <div className='cardcontainer w-full md:w-1/2 h-[60vh]'>
            <div className='card w-full h-full bg-[#004D43] rounded-2xl flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo" />
            </div>
        </div>
        <div className='cardcontainer w-full md:w-1/2 h-[60vh] flex gap-5'>
            <div className='card w-full md:w-1/2 h-full rounded-2xl bg-[#212121] flex justify-center items-center cursor-pointer relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="bye logo" />
                <button className='absolute left-4 bottom-4 px-4 py-1 border-[2px] border-zinc-100 rounded-full text-sm'>Rating @ Cult </button>
            </div>
            <div className='card w-full md:w-1/2 h-full rounded-2xl bg-[#212121] flex justify-center items-center cursor-pointer relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="hi logo" />
                <button className='absolute left-4 bottom-4 px-4 py-1 border-[2px] border-zinc-100 rounded-full text-sm'>Rating @ Cult </button>               
            </div>
        </div>
    </div>
  )
}

export default cards