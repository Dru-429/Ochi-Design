import Logo from '../icons/Logo'
import ButtonHover from './LinkHover'

const Navbar = () => {

  return (
    <div className='z-[999] w-full px-6 sm:px-8 md:px-20 py-6 md:py-8 font-["Neue Montreal"] flex items-center justify-between'>

        <div className="logo">
            <Logo />
        </div>

        <div className="links hidden md:flex gap-10">            
            {['Services', 'Our Work', 'About Us', 'Insights'].map((item, index) => (
              <ButtonHover key={index} index={index} item={item}/>
            ))}
        </div>
        
        <div className="links hidden md:flex gap-10">            
            {['Contact'].map((item, index) => (
              <ButtonHover key={index} index={index} item={item}/>
            ))}
        </div>

    </div>
  )
}

export default Navbar