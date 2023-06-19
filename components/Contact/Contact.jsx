import classes from "./Contact.module.css"
import { HiOutlineMail } from "react-icons/hi"
import { HiOutlinePhone } from 'react-icons/hi';


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
                            <a target="_blank" rel="noopener noreferrer" href="mailto:creadive.az@gmail.com">creadive.az@gmail.com</a>
                        </div>
                        <div>
                            <HiOutlinePhone />
                            (+994) 10 531 99 87
                        </div>
                    </div>
                </Zoom>

            </div>

        </div>
    )
}

export default Contact
