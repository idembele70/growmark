import React, { useMemo } from "react";
import {
  Icon,
  Title as IconTitle,
  IconContainer,
} from "../Features/feature.style";
import { PrimaryParagraph } from "../About/About.style";
import {
  Container,
  Item,
  ItemContainer,
  ItemWrapper,
  Title,
  Wrapper,
  Description,
} from "./Service.style";

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
  return (
    <Container>
      <Wrapper>
        <PrimaryParagraph>Our Services</PrimaryParagraph>
        <Title>Digital Marketing Services that We Offer</Title>
        <ItemWrapper>
          {serviceItems.map(({ img, title, description }, idx) => (
            <ItemContainer>
              <Item>
                <IconContainer>
                  <Icon
                    src={`${process.env.PUBLIC_URL}/assets/icon/icon-${img}.png`}
                    alt={title}
                  />
                </IconContainer>
                <IconTitle>{title}</IconTitle>
                <Description>{description}</Description>
              </Item>
            </ItemContainer>
          ))}
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default Services;
