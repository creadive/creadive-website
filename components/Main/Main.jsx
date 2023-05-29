import Header from "../Header/Header";
import TopContent from "../TopContent/TopContent";
import Slider from '../Slider/Slider';
import TechStack from '../TechStack/TechStack';
import Contact from '../Contact/Contact';
import OurServices from '../OurServices/OurServices';

import classes from "./Main.module.css";
import Image from "next/image";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import SnapSlider from '../Slider/SnapSlider';

const Main = () => {
  return (
    <>
      <div className={classes.main}>
        <Header />
        <TopContent />
        {/* <Slide right style={{ width: "20%" }}> */}
        <Image
          src="/top-illustration.svg"
          width="600"
          height="450"
          alt="Innovation"
          id={classes.top_img}
          priority
        />
        {/* </Slide> */}
      </div>
      <Slider />
      {/* <SnapSlider /> */}
      <OurServices />
      <TechStack />
      <Contact />
    </>
  );
};

export default Main;
