import Header from "../Header/Header";
import TopContent from "../TopContent/TopContent";
import TechStack from '../TechStack/TechStack';
import Contact from '../Contact/Contact';
import OurServices from '../OurServices/OurServices';

import classes from "./Main.module.css";
import Image from "next/image";
import Projects from '../Slider/Projects';

const Main = () => {
  return (
    <>
      <div className={classes.main}>
        <Header />
        <TopContent />
        <Image
          src="/file1.svg"
          width="600"
          height="450"
          alt="Innovation"
          id={classes.top_img}
          priority
        />
      </div>
      <Projects />
      <OurServices />
      <TechStack />
      <Contact />
    </>
  );
};

export default Main;
