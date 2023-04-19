import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Paragraph, PrimaryParagraph } from "../About/About.style";

import { Form, FormRow, Input } from "../Quote/Quote.style";
import { Title } from "../Services/Service.style";
import {
  Bottom,
  BtnContainer,
  Col,
  ColTitle,
  ContactTextArea,
  Container,
  ParagraphLink,
  Top,
  Wrapper,
  Button,
  DetailsRow,
  IconContainer,
  DetailsInfo,
  InfoTitle,
  InfoParagraph,
  Icon,
  Iframe,
  FormCol,
} from "./Contact.style";
import { useLayoutEffect, useMemo, useRef } from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { fadeInUp, start } from "../../shared/gsapAnimations";

const Contact = () => {
  interface IDetailsItem {
    icon: IconDefinition;
    title: string;
    paragraph: string;
  }
  const DetailsItems: IDetailsItem[] = useMemo(
    () => [
      {
        icon: faLocationDot,
        title: "our office",
        paragraph: "123 Street, New York, USA",
      },
      {
        icon: faPhone,
        title: "call us",
        paragraph: "+012 345 67890",
      },
      {
        icon: faEnvelope,
        title: "mail us",
        paragraph: "info@example.com",
      },
    ],
    []
  );
  // scrollTrigger
  const containerEl = useRef<HTMLElement>(null);
  const topEl = useRef<HTMLDivElement>(null);
  const leftEl = useRef<HTMLDivElement>(null);
  const rightEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const topTween = gsap.from(topEl.current, {
      ...fadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: containerEl.current,
        start,
      },
    });
    const leftTween = gsap.from(leftEl.current, {
      ...fadeInUp,
      delay: 0.3,
      scrollTrigger: {
        trigger: containerEl.current,
        start,
      },
    });
    const isDesktop = window.innerWidth > 992;
    const rightTween = gsap.from(rightEl.current, {
      ...fadeInUp,
      delay: 0.5,
      scrollTrigger: {
        trigger: containerEl.current,
        start: isDesktop ? start : "top+=600px 100%",
        markers: true,
      },
    });

    return () => {
      [topTween, leftTween, rightTween].forEach((el) =>
        el.scrollTrigger?.kill()
      );
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Top ref={topEl}>
          <PrimaryParagraph>Contact Us</PrimaryParagraph>
          <Title>If You Have Any Query, Please Contact Us</Title>
        </Top>
        <Bottom>
          <Col ref={leftEl}>
            <ColTitle>Need a functional contact form?</ColTitle>
            <Paragraph>
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.{" "}
              <ParagraphLink to="/">Download Now.</ParagraphLink>
            </Paragraph>
            <Form>
              <FormCol>
                <Input placeholder="Your Name" />
              </FormCol>
              <FormCol>
                <Input placeholder="Your Email" />
              </FormCol>
              <FormRow>
                <Input placeholder="Subject" />
              </FormRow>
              <FormRow>
                <ContactTextArea placeholder="Message"></ContactTextArea>
              </FormRow>
              <BtnContainer>
                <Button type="submit">Send Message</Button>
              </BtnContainer>
            </Form>
          </Col>
          <Col ref={rightEl}>
            <ColTitle>Contact Details</ColTitle>
            {DetailsItems.map(({ icon, title, paragraph }) => (
              <DetailsRow>
                <IconContainer>
                  <Icon icon={icon} />
                </IconContainer>
                <DetailsInfo>
                  <InfoTitle>{title}</InfoTitle>
                  <InfoParagraph>{paragraph}</InfoParagraph>
                </DetailsInfo>
              </DetailsRow>
            ))}
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" />
          </Col>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Contact;
