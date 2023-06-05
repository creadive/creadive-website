import { services } from '../../utils/helpers';
import Image from 'next/image';
import classes from "./OurServices.module.css"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const OurServices = () => {
    return (
        <div id={classes.our_services}>
            <div className={classes.ourServices_inner}>
                <Slide left big>
                    <h2>Innovative Solutions</h2>
                </Slide>
                <ul className={classes.services_parent}>
                    <Fade bottom cascade>
                        {
                            services.map(service => {
                                return (
                                    <li key={service.id}>
                                        <div className={classes.service_heading}>
                                            <div className={classes.img_container}>
                                                <Image src={service.imgUrl} width="55" height="55" alt={service.name} />
                                            </div>
                                            <h3>{service.name}</h3>
                                        </div>
                                        <p>
                                            {service.description}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </Fade>
                </ul>
            </div>
        </div>
    )
}

export default OurServices;

