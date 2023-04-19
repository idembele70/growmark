import React, { useLayoutEffect, useRef } from "react";
import { Container, Icon, SubTitle, Title, Wrapper } from "./NotFound.style";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Paragraph, RoundedBtnLink } from "../../sections/About/About.style";
import { fadeInUp, start } from "../../shared/gsapAnimations";
import { gsap } from "gsap";
const NotFound = () => {
  // ScrollTrigger
  const containerEl = useRef<HTMLElement>(null);
  const wrapperEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tween = gsap.from(wrapperEl.current, {
      ...fadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: containerEl.current,
        start,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper ref={wrapperEl}>
        <Icon icon={faTriangleExclamation} />
        <Title>404</Title>
        <SubTitle>Page Not Found</SubTitle>
        <Paragraph>
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </Paragraph>
        <RoundedBtnLink to="/">Go Back To Home</RoundedBtnLink>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
