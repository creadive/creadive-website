import classes from "./TopContent.module.css"
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const TopContent = () => {
    return (
        <Fade top cascade>
            <div className={classes.top_wrapper}>

                <h1>Designing Digital Dreams with Creadive Agency</h1>
                <p>
                    Welcome to Creadive!
                    We are excited to share our passion for digital design and development, social media marketing, logo design, UX/UI design, app development and e-commerce solutions with you and help you achieve your unique digital vision.
                </p>

                <Link href="/projects">
                    <span>
                        Check Our Projects
                    </span>
                    <span id={classes.rightArrow}>&#8594;</span>
                </Link>
            </div>
            <div id={classes.scrollDown_animationWrapper}>
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_cfmdythi.json" background="transparent" speed="2" style={{ width: "60px", height: "60px" }} loop autoplay></lottie-player>
            </div>
        </Fade>
    )
}

export default TopContent

