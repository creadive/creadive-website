import classes from "./Contact.module.css"
import { HiOutlineMail } from "react-icons/hi"
import { HiOutlinePhone } from 'react-icons/hi';
import { TbBrandTelegram } from "react-icons/tb"
import { TbBrandLinkedin } from "react-icons/tb"
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import Zoom from "react-reveal/Zoom"

const Contact = () => {
    return (
        <div className={classes.contact} id="classes.contact">
            <div className={classes.contact_inner}>
                <h2>Contact us</h2>
                <p>Have a question or feedback? Contact us and we&apos;ll get back to you within 24 hours!</p>
                <Zoom bottom cascade>
                    <div className={classes.contact_means}>
                        <div>
                            <HiOutlineMail />
                            <a target="_blank" rel="noopener noreferrer" href="mailto:creadive.az@gmail.com">info@creadive.az</a>
                        </div>
                        <div>
                            <HiOutlinePhone />
                            (+994) 10 531 99 87
                        </div>
                        {/* <div>
                        <TbBrandTelegram />
                        <a target="_blank" rel="noopener noreferrer" href="https://t.me/creadive_az">creadive</a>
                    </div>
                    <div>
                        <TbBrandLinkedin />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/creadive-az">creadive</a>
                    </div> */}
                    </div>
                </Zoom>
                {/* <SocialMediaIcons />ww */}
            </div>

        </div>
    )
}

export default Contact