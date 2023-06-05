import classes from "./TechStack.module.css"
import Image from 'next/image';
import Bounce from "react-reveal/Bounce"
import Fade from 'react-reveal/Fade';
import { techImages } from '../../utils/helpers';



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
                            At Creadive Agency, we&apos;re all about cutting-edge technology. Our tech stack includes the latest programming languages and tools, like React, Angular, Node.js, and Laravel. We&apos;re always looking for ways to innovate and improve, which means that your website or application will be built with the most modern and effective solutions available. Let us show you how our technology stack can take your business to the next level.
                        </p>
                    </Fade>
                    <Bounce right cascade>
                        <div>
                            {
                                techImages.map(img => (
                                    <Image key={img.id} alt={img.alt} src={img.src} width="60" height="60" />
                                ))
                            }

                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default TechStack
