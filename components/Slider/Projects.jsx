import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from "./Projects.module.css"
import Image from "next/image";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const imgUrls = [
    { id: 1, url: "/project-1.webp" },
    { id: 2, url: "/project-2.webp" },
    { id: 3, url: "/project-3.webp" },
    { id: 4, url: "/project-4.webp" },
    { id: 5, url: "/project-5.webp" },
    { id: 6, url: "/project-6.webp" },
]


const carousel = (slider) => {
    const z = 500
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}

export default function Projects() {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return (
        <section id={styles.projects}>
            <div className={styles.heading}>
                <Slide left big>
                    <h2>Our Projects</h2>
                </Slide>
            </div>

            <Fade cascade>
                <div className="wrapper">
                    <div className="scene">

                        <div className="carousel keen-slider" ref={sliderRef}>

                            {
                                imgUrls.map((img) => (
                                    <Image key={img.id} alt={`Project ${img.id}`} width="450" height="300" src={img.url} className="carousel__cell number-slide1" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Fade>

            <div className={styles.project_animation__wrapper}>
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_xpxbhrm4.json" background="transparent" speed="1" style={{ width: "120px", height: "120px" }} loop autoplay></lottie-player>
            </div>


        </section >
    )
}
