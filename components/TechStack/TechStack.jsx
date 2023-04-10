import classes from "./TechStack.module.css"
import Image from 'next/image';
// import FadeIn from 'react-fade-in';
import Bounce from "react-reveal/Bounce"
import Fade from 'react-reveal/Fade';

const TechStack = () => {
    return (
        <div className={classes.techStack_wrapper}>
            <div className={classes.techStack_container}>
                <Fade left>
                    <h2>Tech Stack</h2>
                </Fade>
                <div className={classes.techStack_inner}>
                    <Fade left>
                        <p>
                            At Creadive, we&apos;re all about cutting-edge technology. Our tech stack includes the latest programming languages and tools, like React, Angular, Node.js, and Laravel. We&apos;re always looking for ways to innovate and improve, which means that your website or application will be built with the most modern and effective solutions available. Let us show you how our technology stack can take your business to the next level.
                        </p>
                    </Fade>
                    <Bounce right cascade>
                        <div>
                            <Image alt="HTML5" src="/stack/html.svg" width="60" height="60" />
                            <Image alt="CSS3" src="/stack/css.svg" width="60" height="60" />
                            <Image alt="JavaScript" src="/stack/javascript.svg" width="60" height="60" />
                            <Image alt="React" src="/stack/react.svg" width="60" height="60" />
                            <Image alt="Typescript" src="/stack/typescript.svg" width="60" height="60" />
                            <Image alt="Next.js" src="/stack/nextjs.svg" width="60" height="60" />
                            <Image alt="Figma" src="/stack/figma.svg" width="60" height="60" />
                            <Image alt="Photoshop" src="/stack/photoshop.svg" width="60" height="60" />
                            <Image alt="Bootstrap" src="/stack/bootstrap.svg" width="60" height="60" />
                            <Image alt="jQuery" src="/stack/jquery.svg" width="60" height="60" />
                            <Image alt="NodeJS" src="/stack/nodejs.svg" width="60" height="60" />
                            <Image alt="Sketch" src="/stack/sketch.svg" width="60" height="60" />
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default TechStack
