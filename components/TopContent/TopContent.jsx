import classes from "./TopContent.module.css"
import Link from 'next/link';
import { CgArrowRightO } from "react-icons/cg"
import Fade from 'react-reveal/Fade';

const TopContent = () => {
    return (
        <Fade top cascade>
            <div className={classes.top_wrapper}>
                {/* <Fade top> */}

                <h1>Designing Digital Dreams with Creadive Agency</h1>
                {/* </Fade> */}
                {/* <h2>Dream It, We'll Build It!</h2> */}
                {/* <p> */}
                {/* <Fade top> */}
                <p>
                    Welcome to Creadive!
                    We are excited to share our passion for digital design and development, social media marketing, logo design, UX/UI design, app development and e-commerce solutions with you and help you achieve your unique digital vision.
                </p>
                {/* </Fade> */}
                {/* </p> */}
                {/* <p>
                Our team of experts is dedicated to helping you achieve your digital goals, whether it's through web development, digital marketing, or any of our other services.
                We can't wait to show you what we can do!
            </p> */}
                {/* <p id={classes.hashtags}>
                <span className={classes.hashtag}>#CreaDive</span>
                <span className={classes.hashtag}>#webdevelopment</span>
                <span className={classes.hashtag}>#digitalmarketing</span>
                <span className={classes.hashtag}>#logodesign</span>
                <span className={classes.hashtag}>#uxuidesign</span>
            </p> */}
                {/* <Fade top cascade> */}
                <Link href="/projects">
                    <span>
                        Check Our Projects
                    </span>
                    {/* <CgArrowRightO size={25} /> */}
                    <span id={classes.rightArrow}>&#8594;</span>
                </Link>
                {/* </Fade> */}
            </div>
        </Fade>
    )
}

export default TopContent

