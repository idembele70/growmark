import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { ParentWrapper, PrimaryParagraph } from "../About/About.style";
import { ContainerXXL } from "../Features/Feature.style";
import {
  Button,
  Col,
  ContactContainer,
  Form,
  FormCol,
  FormRow,
  Icon,
  IconContainer,
  Input,
  Label,
  Number,
  Option,
  ParagraphWithLargeMargin,
  ParagraphWithMediumMargin,
  QuoteTitle,
  RightTitle,
  Select,
  SelectIcon,
  TextArea,
  Wrapper,
} from "./Quote.style";
import { gsap } from "gsap";
import { fadeInUp, start } from "../../shared/gsapAnimations";

const Quote = () => {
  //select
  const [selectedOption, setSelectedOption] = useState("Digital Marketing");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };
  // options
  const options: string[] = useMemo(
    () => [
      "Digital Marketing",
      "Social Marketing",
      "Content Marketing",
      "E-mail Marketing",
    ],
    []
  );
  // ScrollTrigger
  const parentWrapperEl = useRef<HTMLDivElement>(null);
  const leftEl = useRef<HTMLDivElement>(null);
  const rightEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const leftTween = gsap.from(leftEl.current, {
      ...fadeInUp,
      delay: 0.1,
      scrollTrigger: {
        trigger: parentWrapperEl.current,
        start,
      },
    });
    const isDesktop = window.innerWidth > 992;
    const rightTween = gsap.from(rightEl.current, {
      ...fadeInUp,
      delay: 0.5,
      scrollTrigger: {
        trigger: parentWrapperEl.current,
        start: isDesktop ? start : "top-=70px center",
      },
    });
    return () => {
      [leftTween, rightTween].forEach((el) => el.scrollTrigger?.kill());
    };
  }, []);
  return (
    <ContainerXXL>
      <ParentWrapper ref={parentWrapperEl}>
        <Wrapper>
          <Col ref={leftEl}>
            <PrimaryParagraph>Get A Quote</PrimaryParagraph>
            <QuoteTitle>Need Our Expert Help? We're Here!</QuoteTitle>
            <ParagraphWithMediumMargin>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo
            </ParagraphWithMediumMargin>
            <ParagraphWithLargeMargin>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo
            </ParagraphWithLargeMargin>
            <ContactContainer to="/">
              <IconContainer>
                <Icon icon={faPhone} />
              </IconContainer>
              <Number>+012 345 6789</Number>
            </ContactContainer>
          </Col>
          <Col ref={rightEl}>
            <RightTitle>Get A Free Quote</RightTitle>
            <Form>
              <FormCol>
                <Input placeholder="Your Name" />
              </FormCol>
              <FormCol>
                <Input placeholder="Your Email" />
              </FormCol>
              <FormCol>
                <Input placeholder="Your Mobile" />
              </FormCol>
              <FormCol>
                <Select onChange={handleSelect} value={selectedOption}>
                  {options.map((option, idx) => (
                    <Option key={idx} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                <Label>Choose A Service</Label>
                <SelectIcon icon={faChevronDown} />
              </FormCol>
              <FormRow>
                <TextArea placeholder="Message"></TextArea>
              </FormRow>
              <FormRow>
                <Button type="submit">Submit Now</Button>
              </FormRow>
            </Form>
          </Col>
        </Wrapper>
      </ParentWrapper>
    </ContainerXXL>
  );
};

export default Quote;
