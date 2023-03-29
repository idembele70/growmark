import {
  faChevronLeft,
  faChevronRight,
  faEye,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { PrimaryParagraph } from "../About/About.style";
import { ContainerXXL, Description } from "../Features/Feature.style";
import {
  Card,
  CardContainer,
  CardImage,
  CardImgOverlay,
  CardLink,
  Icon,
  IconContainer,
  ImageContainer,
  Info,
  ProjectTitle,
  SlideBtn,
  SlideBtnContainer,
  SlideBtnIcon,
  Top,
  TopInfoContainer,
  Wrapper,
} from "./Project.style";

const Project = () => {
  // Slider settings
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "416px",
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
          centerPadding: "0",
        },
      },
    ],
  };
  // CardItems
  interface ICardItem {
    img: number;
    title: string;
    description: string;
  }
  const cardItems: ICardItem[] = useMemo(
    () => [
      {
        img: 1,
        title: "Data Analytics & Insights",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem",
      },
      {
        img: 2,
        title: "Marketing Content Strategy",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem",
      },
      {
        img: 3,
        title: "Business Target Market",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem",
      },
      {
        img: 4,
        title: "Social Marketing Strategy",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem",
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
            <PrimaryParagraph>Our Projects</PrimaryParagraph>
            <ProjectTitle>We've Done Lot's of Awesome Projects</ProjectTitle>
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
        <CardContainer ref={sliderEl} {...settings}>
          {cardItems.map(({ img, title, description }, idx) => (
            <Card className="card" key={idx}>
              <ImageContainer>
                <CardImage
                  src={`${process.env.PUBLIC_URL}/assets/project/project-${img}.jpg`}
                  alt={title}
                />
                <CardImgOverlay>
                  <IconContainer to="/">
                    <Icon icon={faEye} />
                  </IconContainer>
                  <IconContainer to="/">
                    <Icon icon={faLink} />
                  </IconContainer>
                </CardImgOverlay>
              </ImageContainer>
              <Info>
                <CardLink to="">{title}</CardLink>
                <Description>{description}</Description>
              </Info>
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </ContainerXXL>
  );
};

export default Project;
