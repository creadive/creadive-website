// import { serviceTabs } from '../../utils/helpers';
// import { motion, AnimatePresence } from "framer-motion";
import { services } from '../../utils/helpers';
import Image from 'next/image';
import classes from "./OurServices.module.css"
import { useState } from "react";
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



// const OurServices = () => {
//     const [selectedTab, setSelectedTab] = useState(serviceTabs[0]);

//     return (
//         <div className={classes.window}>
//             {/* <h2>Innovative Solutions</h2> */}
//             <nav>
//                 <ul>
//                     {serviceTabs.map((service) => (
//                         <li
//                             key={service.label}
//                             className={service === selectedTab ? classes.selected : ""}
//                             onClick={() => setSelectedTab(service)}
//                         >
//                             <Image width="40" height="40" alt={service.label} src={service.iconUrl} />
//                             <h3>{service.label}</h3>
//                             {service === selectedTab ? (
//                                 <motion.div className={classes.underline} layoutId={classes.underline} />
//                             ) : null}
//                         </li>
//                     ))}

//                 </ul>
//             </nav>
//             <main>
//                 <AnimatePresence mode="wait">
//                     <motion.div key={selectedTab ? selectedTab.label : "empty"}
//                         initial={{ y: 30, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         exit={{ y: -20, opacity: 0 }}
//                         transition={{ duration: 0.3 }}>
//                         <p>
//                             {selectedTab && selectedTab.description}
//                         </p>

//                     </motion.div>
//                 </AnimatePresence>

//             </main>
//         </div>
//     );
// }

export default OurServices

