import React, { useLayoutEffect, useMemo, useRef } from "react";
import {
  Icon,
  Title as IconTitle,
  IconContainer,
} from "../Features/Feature.style";
import { PrimaryParagraph } from "../About/About.style";
import {
  Container,
  Item,
  ItemContainer,
  ItemWrapper,
  Title,
  Wrapper,
  Description,
  BtnIcon,
  BtnLink,
  BtnContainer,
  ItemContainerWrapper,
  Top,
} from "./Service.style";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { fadeInUp, start } from "../../shared/gsapAnimations";

const Services = () => {
  // Services items
  interface IServiceItem {
    img: number;
    title: string;
    description: string;
  }
  const serviceItems: IServiceItem[] = useMemo(
    () => [
      {
        img: 5,
        title: "Digital Marketing",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet",
      },
      {
        img: 6,
        title: "Internet Marketing",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet",
      },
      {
        img: 7,
        title: "Content Marketing",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet",
      },
      {
        img: 8,
        title: "Social Marketing",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet",
      },
      {
        img: 9,
        title: "B2B Marketing",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet",
      },
      {
        img: 10,
        title: "E-mail Marketing",
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet",
      },
    ],
    []
  );
  //ScrollTrigger
  const containerEl = useRef<HTMLDivElement>(null);
  const topEl = useRef<HTMLDivElement>(null);
  const itemWrapperEl = useRef<HTMLDivElement>(null);
  const ItemContainerEls = useRef<HTMLDivElement[]>([]);
  const addToItemContainerEls = (el: HTMLDivElement) => {
    if (el && !ItemContainerEls.current.includes(el))
      ItemContainerEls.current.push(el);
  };
  // ScrollTrigger
  useLayoutEffect(() => {
    // Top
    const topTween = gsap.from(topEl.current, {
      ...fadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: containerEl.current,
        start,
      },
    });
    // Bottom
    const itemContainerTween: GSAPTween[] = [];
    ItemContainerEls.current.forEach((el) => {
      const tween = gsap.from(el, {
        ...fadeInUp,
        delay: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top-=670px center",
        },
      });
      itemContainerTween.push(tween);
    });

    return () => {
      [topTween, ...itemContainerTween].forEach((el) =>
        el.scrollTrigger?.kill()
      );
    };
  }, []);

  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Top ref={topEl}>
          <PrimaryParagraph>Our Services</PrimaryParagraph>
          <Title>Digital Marketing Services that We Offer</Title>
        </Top>
        <ItemWrapper ref={itemWrapperEl}>
          {serviceItems.map(({ img, title, description }, idx) => (
            <ItemContainer ref={addToItemContainerEls} key={title}>
              <ItemContainerWrapper>
                <Item className="item">
                  <IconContainer>
                    <Icon
                      src={`${process.env.PUBLIC_URL}/assets/icon/icon-${img}.png`}
                      alt={title}
                    />
                  </IconContainer>
                  <IconTitle>{title}</IconTitle>
                  <Description>{description}</Description>
                </Item>
                <BtnContainer className="btnContainer">
                  <BtnLink to="">
                    Read More
                    <BtnIcon icon={faChevronRight} />
                  </BtnLink>
                </BtnContainer>
              </ItemContainerWrapper>
            </ItemContainer>
          ))}
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default Services;
