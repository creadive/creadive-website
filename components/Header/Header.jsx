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
                            <span className={classes.linkName}>Homepage</span>
                        </Link>
                        {navLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link href={link.path}>
                                        <Image
                                            src={link.imgUrl}
                                            alt={link.name}
                                            width="25" height="25"
                                        />
                                        <span className={classes.linkName}>{link.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </Fade>
            </nav>
        </header>
    )
}

export default Header
