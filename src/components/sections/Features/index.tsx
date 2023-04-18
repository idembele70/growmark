import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ContainerXXL as Container,
  Description,
  Icon,
  IconContainer,
  ItemContainer,
  ItemWrapper,
  Title,
  Wrapper,
} from "./Feature.style";
import { useLocation } from "react-router-dom";
import { PrimaryParagraph } from "../About/About.style";
import { Title as TitleH1 } from "../Services/Service.style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeIn, stagger, start } from "../../shared/gsapAnimations";

const Features = () => {
  // Feature item
  interface IFeatureItem {
    img: number;
    title: string;
    description: string;
  }
  const featureItems: IFeatureItem[] = useMemo(
    () => [
      {
        img: 1,
        title: "Award Winning",
        description:
          "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
      },
      {
        img: 2,
        title: "Professional Staff",
        description:
          "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
      },
      {
        img: 3,
        title: "Fair Prices",
        description:
          "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
      },
      {
        img: 4,
        title: "24/7 Support",
        description:
          "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
      },
    ],
    []
  );
  // display Feature Top
  const { pathname } = useLocation();
  const [isFeaturePage, setIsFeaturePage] = useState(false);
  useEffect(() => {
    if (pathname === "/feature") setIsFeaturePage(true);
  }, []);
  // Bottom ScrollTrigger
  const itemWrapperEl = useRef<HTMLDivElement>(null);
  const itemContainerEl = useRef<HTMLDivElement[]>([]);
  const addToItemContainerEl = (el: HTMLDivElement) => {
    if (el && !itemContainerEl.current.includes(el))
      itemContainerEl.current.push(el);
  };
  useLayoutEffect(() => {
    let MDUPTween: GSAPTween;
    const MDDownTween: GSAPTween[] = [];
    if (window.innerWidth > 992) {
      MDUPTween = gsap.from(itemContainerEl.current, {
        ...fadeIn,
        stagger,
        scrollTrigger: {
          trigger: itemWrapperEl.current,
          start,
        },
      });
    } else
      itemContainerEl.current.forEach((element) => {
        const tween = gsap.from(element, {
          ...fadeIn,
          delay: 0.2,
          scrollTrigger: {
            trigger: element,
            start,
          },
        });
        MDDownTween.push(tween);
      });
    // kill scroll trigger on unmount
    return () => {
      [MDUPTween, ...MDDownTween].forEach((element) => {
        element.scrollTrigger?.kill();
      });
    };
  }, []);
  return (
    <Container>
      <Wrapper>
        {isFeaturePage && (
          <>
            <PrimaryParagraph>Features</PrimaryParagraph>
            <TitleH1>Why People Choose Us</TitleH1>
          </>
        )}
        <ItemWrapper ref={itemWrapperEl}>
          {featureItems.map(({ img, title, description }, idx) => (
            <ItemContainer key={idx} ref={addToItemContainerEl}>
              <IconContainer>
                <Icon
                  src={`${process.env.PUBLIC_URL}/assets/icon/icon-${img}.png`}
                  alt={title}
                />
              </IconContainer>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </ItemContainer>
          ))}
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default Features;
