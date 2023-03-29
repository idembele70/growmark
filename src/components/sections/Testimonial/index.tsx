import React, { useMemo, useRef } from "react";
import { ContainerXXL } from "../Features/Feature.style";
import {
  ProjectTitle,
  SlideBtn,
  SlideBtnContainer,
  SlideBtnIcon,
  Top,
  TopInfoContainer,
  Wrapper,
} from "../Project/Project.style";
import { PrimaryParagraph } from "../About/About.style";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  CardImage,
  CardItem,
  CardItemWrapper,
  Name,
  TestimonialCardContainer,
} from "./Testimonial.style";
import { Job } from "../Team/Team.style";
import { ParagraphWithLargeMargin } from "../Quote/Quote.style";
import Slider, { Settings } from "react-slick";

const Testimonial = () => {
  // Card Container settings
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    speed: 1000,
    centerPadding: "416px",
    // autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "364px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "304px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "170px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  // card items
  interface ICardItem {
    img: number;
    description: string;
    name: string;
    profession: string;
  }
  const cardItems = useMemo(
    () => [
      {
        img: 1,
        description:
          "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
        name: "Client Name",
        profession: "profession",
      },
      {
        img: 2,
        description:
          "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
        name: "Client Name",
        profession: "profession",
      },
      {
        img: 3,
        description:
          "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
        name: "Client Name",
        profession: "profession",
      },
      {
        img: 4,
        description:
          "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
        name: "Client Name",
        profession: "profession",
      },
    ],
    []
  );
  //slide prev next handler
  const sliderEl = useRef<Slider>(null);
  const handleSlide = (direction: string) => {
    if (direction === "left") sliderEl.current?.slickPrev();
    else sliderEl.current?.slickNext();
  };

  return (
    <ContainerXXL>
      <Wrapper>
        <Top>
          <TopInfoContainer>
            <PrimaryParagraph>Testimonial</PrimaryParagraph>
            <ProjectTitle>What Clients Say About Our Services!</ProjectTitle>
          </TopInfoContainer>
          <SlideBtnContainer>
            <SlideBtn onClick={() => handleSlide("left")}>
              <SlideBtnIcon icon={faChevronLeft} />
            </SlideBtn>
            <SlideBtn onClick={() => handleSlide("right")}>
              <SlideBtnIcon icon={faChevronRight} />
            </SlideBtn>
          </SlideBtnContainer>
        </Top>
        <TestimonialCardContainer ref={sliderEl} {...settings}>
          {cardItems.map(({ img, description, name, profession }, idx) => (
            <CardItem className="card" key={idx}>
              <CardItemWrapper>
                <CardImage
                  src={`${process.env.PUBLIC_URL}/assets/testimonial/testimonial-${img}.jpg`}
                  alt={name}
                />
                <ParagraphWithLargeMargin>
                  {description}
                </ParagraphWithLargeMargin>
                <Name>{name}</Name>
                <Job>{profession}</Job>
              </CardItemWrapper>
            </CardItem>
          ))}
        </TestimonialCardContainer>
      </Wrapper>
    </ContainerXXL>
  );
};

export default Testimonial;
