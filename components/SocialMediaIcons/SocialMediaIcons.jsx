import classes from "./SocialMediaIcons.module.css"
import { BsFacebook } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineLinkedin } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs"


const SocialMediaIcons = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.button}>
                <div className={classes.icon}>
                    <BsFacebook width="60" height="60" />
                </div>
                <span>Facebook</span>
            </div>
            <div className={classes.button}>
                <div className={classes.icon}>
                    <AiOutlineLinkedin />
                </div>
                <span>LinkedIn</span>
            </div>
            {/* <div className={classes.button}>
                <div className={classes.icon}>
                    <i className={classes.twitter}></i>
                </div>
                <span>Twitter</span>
            </div > */}
            <div className={classes.button}>
                <div className={classes.icon}>
                    <FaInstagram />
                </div>
                <span>Instagram</span>
            </div >
            <div className={classes.button}>
                <div className={classes.icon}>
                    <i className={classes.github}></i>
                </div>
                <span>Github</span>
            </div >
            <div className={classes.button}>
                <div className={classes.icon}>
                    <i className={classes.youtube}></i>
                </div>
                <span>YouTube</span>
            </div >
            <div className={classes.button}>
                <div className={classes.icon}>
                    <BsTelegram />
                </div>
                <span>Telegram</span>
            </div >

        </div >
    )
}

export default SocialMediaIcons
