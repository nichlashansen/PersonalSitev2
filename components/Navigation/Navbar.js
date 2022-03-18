import classes from './Navbar.module.css'
import Navlinks from './Navlinks';


const Navbar = () => {
    return (<nav className={classes.navBar}>
        <Navlinks />
    </nav>
    );
}

export default Navbar;