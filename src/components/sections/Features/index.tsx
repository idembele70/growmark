import React, { useMemo } from "react";
import {
  Container,
  Description,
  Icon,
  IconContainer,
  ItemContainer,
  ItemWrapper,
  ParentWrapper,
  Title,
  Wrapper,
} from "./feature.style";

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
  return (
    <Container>
      <ParentWrapper>
        <Wrapper>
          <ItemWrapper>
            {featureItems.map(({ img, title, description }, idx) => (
              <ItemContainer>
                <IconContainer>
                  <Icon
                    src={`${process.env.PUBLIC_URL}/assets/icon/feature/icon-${img}.png`}
                    alt={title}
                  />
                </IconContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </ItemContainer>
            ))}
          </ItemWrapper>
        </Wrapper>
      </ParentWrapper>
    </Container>
  );
};

export default Features;
