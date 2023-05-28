import classes from "./Footer.module.css"
import Image from 'next/image';

import home from "../../styles/Home.module.css"
import Link from 'next/link';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <div className={`${classes.footer_inner} ${home.container}`}>

                <div>
                    <Link href="/" alt="Home">
                        <Image src="/footer_logo.svg" width={"160"} height={"100"} alt="CreaDive Logo" />
                    </Link>
                    {/* <nav>
                        <ul>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy">Privacy</Link></li>
                        </ul>
                    </nav> */}
                </div>
                <div id={classes.copyrights}>
                    Copyrights {currentYear} &copy; All Rights Reserved
                </div>
                <span style={{ fontSize: "13px" }}>(Alpha Version)</span>
                {/* <div id={classes.createdBy}>created by
                    <a rel="noreferrer" target="_blank" href="https://nihadabbasov.vercel.app">
                        <span> Nihad Abbasov</span>
                        <div id={classes.founder}>
                            <Image src='/founder.png' alt="Nihad Abbasov" width="270" height="154" />
                        </div>
                    </a></div> */}
            </div>
        </footer>
    )
}

export default Footer
