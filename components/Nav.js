import Image from "next/image";
import Styles from "../components/Navigation/Navbar.module.css"
import MobileNav from './Navigation/MobileNavbar'
import NavBar from './Navigation/Navbar'
import Logo from '../public/images/logo.png'
import Link from "next/link";

const Nav = () => {
    return (
        <header>
            <nav className={Styles.navigationBar}>
                <Link href="/">
                <a><Image className={Styles.nav__Logo} src={Logo}></Image></a></Link>
            <NavBar />
            <MobileNav />
            </nav>
            
        </header>
    );
}

export default Nav;