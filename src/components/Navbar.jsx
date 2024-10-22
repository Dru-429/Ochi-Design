import React from 'react'
import Logo from '../icons/Logo'
import ButtonHover from './LinkHover'

const Navbar = () => {

  return (
    <div className=' z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between align-bottom'>

        <div className="logo">
            <Logo />
        </div>

        <div className="links flex gap-10 relative -right-32">            
            {["Services", "Our Work", "About Us", "Insights"].map((item, index) => (
              <ButtonHover index={index} item={item}/>
            ))}
        </div>
        
        <div className="links flex gap-10 ">            
            {["Contact"].map((item, index) => (
              <ButtonHover index={index} item={item}/>
            ))}
        </div>


    </div>
  )
}

export default Navbar