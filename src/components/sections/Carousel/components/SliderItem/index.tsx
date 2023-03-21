import React, { useLayoutEffect } from "react";
import {
  Container,
  Image,
  InfoContainer,
  InfoWrapper,
  LinkBtn,
  Paragraph,
  Strong,
  Title,
  Wrapper,
} from "./SliderItem.style";
import { gsap } from "gsap";
interface SliderItemProps {
  title: string;
  url: number;
  idx: number;
}
const SliderItem = ({ title, url, idx }: SliderItemProps) => {
  return (
    <Container>
      <Image
        src={`${process.env.PUBLIC_URL}/assets/carousel/carousel-${url}.jpg`}
        alt={title}
      />
      <Wrapper>
        <InfoContainer>
          <InfoWrapper
            className={`${url % 2 === 0 ? "even" : "odd"} ${
              url % 2 === 0 ? "even" : "odd"
            }-${idx}`}
          >
            <Paragraph>
              Welcome to <Strong>GrowMark</Strong>
            </Paragraph>
            <Title>{title}</Title>
            <LinkBtn to="/">Explore More</LinkBtn>
          </InfoWrapper>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SliderItem;
