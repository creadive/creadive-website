import Link from "next/link"
import classes from "./Header.module.css"
import { navLinks } from '../../utils/helpers';
import Image from 'next/image';
import Fade from "react-reveal/Fade"

const Header = () => {

    return (
        <header className={classes.header}>
            <nav>
                <Fade left cascade big>

                    <ul>
                        {/* image must be customized */}
                        <Link href="/" alt="Home">
                            <Image id={classes.header_logo} src="/header_logo.svg" width="40" height="40" alt="Creadive Logo" />
                            <span className={classes.linkName}>Creadive</span>
                        </Link>
                        {navLinks.map((link, index) => {
                            return (
                                <Link key={index} href={link.path}>
                                    <li>
                                        <Image src={link.imgUrl} alt={link.name}
                                            width="25" height="25" />
                                    </li>
                                    <span className={classes.linkName}>{link.name}</span>
                                </Link>
                            );
                        })}
                    </ul>
                </Fade>
            </nav>
        </header>
    )
}

export default Header
