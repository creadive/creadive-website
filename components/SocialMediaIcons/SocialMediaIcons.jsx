import Link from "next/link"
import classes from "./SocialMediaIcons.module.css"
import { socialIcons } from '../../utils/helpers';
import Image from "next/image";

const SocialMediaIcons = () => {
    return (
        <div className={classes.card}>
            <span>Follow us!</span>
            {
                socialIcons.map(soc => (
                    <Link key={soc.id} href={soc.href} className={classes.social_link}>
                        <Image width="50" height="50" alt={soc.alt} src={soc.src} />
                    </Link>
                ))
            }
        </div>
    )
}

export default SocialMediaIcons