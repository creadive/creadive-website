import Image from 'next/image';
import { Carousel } from "react-configurable-carousel";
import classes from "./Slider.module.css"
import container from "../../styles/Home.module.css"
import styled from "styled-components"
import Fade from 'react-reveal/Fade'


const images = [
  '/project-1.webp',
  '/project-2.webp',
  '/project-3.webp',
  '/project-4.webp',
  '/project-5.webp',
  '/project-6.webp',
]

const CarouselContainer = styled.div`

  #carousel_new_container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
  }

  #carousel_new_container .swipeContainer {
    width: 70% !important;
    height: 65% !important;
  }

  #carousel_new_container .horizontalContainer {
    height: 60% !important;
  }

  #carousel_new_container .swipeContainer .imageContainer {
    width: fit-content !important;
  };

  @media screen and (max-width: 600px) {
    #carousel_new_container .swipeContainer {
      width: 100% !important;
      height: 50% !important;
    }

    #carousel_new_container .swipeContainer .itemContainer {
      width: 100% !important;
    };

    #carousel_new_container .verticalContainer {
      height: 75% !important;
    };
  }
`;

const Slider = () => {
  return (
    <CarouselContainer>
      <div id="carousel_new_container">
        <h2 className={classes.projectHeading}>Our Projects</h2>

        <Carousel
          arrows={false}
          dotsNavigation={true}
          dotsNavigationInside={true}
          width="100%"
          height="450px"
          carouselStyle={"3d"}
          outOfFocusDarken={false}
          autoScrollInterval={5000}
        >
          {
            images.map((imgUrl, index) => {
              return (
                <Fade cascade big bottom key={index}>
                  <Image className={classes.carousel_img} src={imgUrl} width="207" height="118" alt={index} priority />
                </Fade>
              )
            }
            )
          }
        </Carousel>
      </div>
    </CarouselContainer>
  )
}

export default Slider;