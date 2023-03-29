import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  BtnIcon,
  BtnIconContainer,
  Container,
  NextBtn,
  PrevBtn,
} from "./Carousel.style";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SliderItem from "./components/SliderItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Carousel = () => {
  //Slider settings
  const settings: Settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  //Slider next prev handler
  const sliderEl = useRef<Slider>(null);
  const handleScroll = (direction: string) => {
    if (direction === "left") sliderEl.current?.slickPrev();
    else sliderEl.current?.slickNext();
  };
  // Slider Items
  interface ISliderItem {
    title: string;
    url: number;
  }
  const sliderItems: ISliderItem[] = useMemo(
    () => [
      {
        title: "Unlock Your Business Growth",
        url: 1,
      },
      {
        title: "Ready to Grow Your Business",
        url: 2,
      },
    ],
    []
  );
  // infoWrapper ScrollTrigger
  const [restart, setrestart] = useState(0);
  useLayoutEffect(() => {
    const oddTween = gsap.fromTo(
      `.odd-${restart}`,
      {
        x: "100%",
        duration: 0.5,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".slick-current",
          start: "top center",
        },
      }
    );
    const evenTween = gsap.fromTo(
      `.even-${restart}`,
      {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
      },
      {
        x: 0,
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".slick-current",
          start: "top center",
        },
      }
    );

    return () => {
      oddTween.scrollTrigger?.kill();
      evenTween.scrollTrigger?.kill();
    };
  }, [restart]);
  return (
    <Container>
      <Slider
        beforeChange={(curr, next) => {
          setrestart(next);
        }}
        ref={sliderEl}
        {...settings}
      >
        {sliderItems.map((props, idx) => (
          <SliderItem {...props} idx={idx} key={idx} />
        ))}
      </Slider>
      <PrevBtn onClick={() => handleScroll("left")}>
        <BtnIconContainer>
          <BtnIcon icon={faChevronLeft} />
        </BtnIconContainer>
      </PrevBtn>
      <NextBtn onClick={() => handleScroll("right")}>
        <BtnIconContainer>
          <BtnIcon icon={faChevronRight} />
        </BtnIconContainer>
      </NextBtn>
    </Container>
  );
};

export default Carousel;
