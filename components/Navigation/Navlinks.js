import Link from 'next/link'
import classes from './Navbar.module.css'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {GrContact} from 'react-icons/gr'

const Navlinks = () => {
    return (
        <ul className={classes.Navlinks}>
        <li><MdOutlineSpaceDashboard className={classes.Navlinks__Icon}/> <Link href="/cv"><a>CV</a></Link></li>
            <li><AiOutlineProject className={classes.Navlinks__Icon}/><Link href=""><a>Projekter</a></Link></li>
            <li><GrContact className={classes.Navlinks__Icon}/><Link href=""><a>Kontakt Mig</a></Link></li>
        </ul>
    );
}

export default Navlinks;