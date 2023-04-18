import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { fadeIn } from "../../shared/gsapAnimations";
import {
  BtnIcon,
  BtnIconContainer,
  Container,
  NextBtn,
  PrevBtn,
  SlideContainer,
} from "./Carousel.style";
import SliderItem from "./SliderItem";

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
  // Container ScrollTrigger
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tween = gsap.from(containerEl.current, {
      ...fadeIn,
      delay: 0.1,
    });

    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <Container ref={containerEl}>
      <SlideContainer
        beforeChange={(curr, next) => {
          setrestart(next);
        }}
        ref={sliderEl}
        {...settings}
      >
        {sliderItems.map((props, idx) => (
          <SliderItem {...props} idx={idx} key={idx} />
        ))}
      </SlideContainer>
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
