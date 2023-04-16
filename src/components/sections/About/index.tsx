import React, { EventHandler, useMemo, useRef, useState } from "react";
import {
  BtnContainer,
  Close,
  CloseContainer,
  Container,
  RoundedBtnLink,
  Icon,
  Iframe,
  Item,
  ItemContainer,
  ItemIcon,
  ItemParagraph,
  ItemTitle,
  Left,
  Modal,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  Paragraph,
  ParentWrapper,
  PrimaryParagraph,
  Right,
  RightWrapper,
  Title,
  Wrapper,
} from "./About.style";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  //About Item
  interface IAboutItem {
    img: number;
    title: string;
    description: string;
  }
  const aboutItems: IAboutItem[] = useMemo(
    () => [
      {
        img: 5,
        title: "Managed Services",
        description: "Clita erat ipsum et lorem et sit sed stet lorem",
      },
      {
        img: 2,
        title: "Dedicated Experts",
        description: "Clita erat ipsum et lorem et sit sed stet lorem",
      },
    ],
    []
  );
  // Modal handler
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContainerEl = useRef<HTMLDivElement>(null);
  const handleToggleModal = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => {
    if (e.target === modalContainerEl.current || !isModalOpen) {
      setIsModalOpen(!isModalOpen);
      // body style
      if (!isModalOpen) document.body.style.overflow = "hidden";
      if (isModalOpen) document.body.style.overflow = "visible";
    }
  };

  return (
    <>
      <Container>
        <ParentWrapper>
          <Wrapper>
            <Left>
              <BtnContainer onClick={handleToggleModal}>
                <Icon />
              </BtnContainer>
            </Left>
            <Right>
              <RightWrapper>
                <PrimaryParagraph>About Us</PrimaryParagraph>
                <Title>
                  The Best Marketing Agency to Improve Your Business
                </Title>
                <Paragraph>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </Paragraph>
                <ItemContainer>
                  {aboutItems.map(({ img, title, description }, idx) => (
                    <Item key={idx}>
                      <ItemIcon
                        src={`${process.env.PUBLIC_URL}/assets/icon/icon-${img}.png`}
                        alt={title}
                      />
                      <ItemTitle>{title}</ItemTitle>
                      <ItemParagraph>{description}</ItemParagraph>
                    </Item>
                  ))}
                </ItemContainer>
                <RoundedBtnLink to="/">Explore More</RoundedBtnLink>
              </RightWrapper>
            </Right>
          </Wrapper>
        </ParentWrapper>
      </Container>
      <ModalContainer
        ref={modalContainerEl}
        onClick={handleToggleModal}
        isopen={isModalOpen}
      >
        <Modal>
          <ModalHeader>
            <ModalTitle>Youtube Video</ModalTitle>
            <CloseContainer onClick={handleToggleModal}>
              <Close icon={faClose} />
            </CloseContainer>
          </ModalHeader>
          <ModalBody>
            <Iframe src="https://www.youtube.com/embed/DWRcNpR6Kdc?autoplay=1&amp;modestbranding=1&amp;showinfo=0" />
          </ModalBody>
        </Modal>
      </ModalContainer>
    </>
  );
};

export default About;
