import React, { useEffect, useMemo, useState } from "react";
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
  // check if it's feature page
  const { pathname } = useLocation();
  const [isFeaturePage, setIsFeaturePage] = useState(false);
  useEffect(() => {
    if (pathname === "/feature") setIsFeaturePage(true);
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
        <ItemWrapper>
          {featureItems.map(({ img, title, description }, idx) => (
            <ItemContainer>
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
