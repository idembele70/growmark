import { useLayoutEffect, useMemo, useRef } from "react";
import { PrimaryParagraph } from "../About/About.style";
import { ContainerXXL } from "../Features/Feature.style";
import { Title, Top, Wrapper } from "../Services/Service.style";
import CardItem from "./CardItem";
import { Card, CardContainer } from "./Team.style";
import { gsap } from "gsap";
import { fadeInUp, start } from "../../shared/gsapAnimations";

const Team = () => {
  // CardItem
  interface ICardItem {
    img: number;
    name: string;
    job: string;
  }
  const CardItems: ICardItem[] = useMemo(
    () => [
      {
        img: 1,
        name: "Alex Robin",
        job: "Founder & CEO",
      },
      {
        img: 2,
        name: "Adam Crew",
        job: "Co Founder",
      },
      {
        img: 3,
        name: "Boris Johnson",
        job: "Executive Manager",
      },
      {
        img: 4,
        name: "Robert Jordan",
        job: "Digital Marketer",
      },
    ],
    []
  );

  // ScrollTrigger
  const containerEl = useRef<HTMLDivElement>(null);
  const topEl = useRef<HTMLDivElement>(null);
  const cardContainerEl = useRef<HTMLDivElement>(null);
  const cardItemEls = useRef<HTMLDivElement[]>([]);
  const addToCardItems = (el: HTMLDivElement) => {
    if (el && !cardItemEls.current.includes(el)) cardItemEls.current.push(el);
  };
  useLayoutEffect(() => {
    const topTween = gsap.from(topEl.current, {
      ...fadeInUp,
      scrollTrigger: {
        trigger: containerEl.current,
        start,
      },
    });
    const cardItemTween: GSAPTween[] = [];
    const isDesktop = window.innerWidth > 992;
    cardItemEls.current.forEach((el, idx) => {
      const tween = gsap.from(el, {
        ...fadeInUp,
        delay: 0.2 * (isDesktop ? idx : 1),
        scrollTrigger: {
          trigger: isDesktop ? cardContainerEl.current : el,
          start: isDesktop ? start : "top-=870px center",
        },
      });
      cardItemTween.push(tween);
    });
    return () => {
      [topTween, ...cardItemTween].forEach((el) => el.scrollTrigger?.kill());
    };
  }, []);
  return (
    <ContainerXXL ref={containerEl}>
      <Wrapper>
        <Top ref={topEl}>
          <PrimaryParagraph>Our Team</PrimaryParagraph>
          <Title>Our Expert People Ready to Help You</Title>
        </Top>
        <CardContainer ref={cardContainerEl}>
          {CardItems.map((props, idx) => (
            <Card ref={addToCardItems} key={idx}>
              <CardItem {...props} />
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </ContainerXXL>
  );
};

export default Team;
