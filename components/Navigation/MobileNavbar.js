import classes from './Navbar.module.css'
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import Navlinks from './Navlinks';


const MobileNavbar = () => {
    const [toggleNav,setToggleNav] = useState(false)

    return (
        <div className={classes.mobileNav}>
            {!toggleNav ?
                <GiHamburgerMenu className={classes.mobileNav__Toggle} 
                onClick={()=> setToggleNav(!toggleNav)} /> :
                <AiOutlineClose className={classes.mobileNav__Toggle} 
                onClick={()=> setToggleNav(!toggleNav)} />
            }
               {toggleNav ? <Navlinks /> : ''} 
        </div>
        
    );
}

export default MobileNavbar;