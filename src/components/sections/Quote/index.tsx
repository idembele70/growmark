import React, { useMemo, useState } from "react";
import { ContainerXXL } from "../Features/Feature.style";
import {
  Col,
  ContactContainer,
  Form,
  Icon,
  IconContainer,
  Input,
  FormCol,
  Label,
  Number,
  Option,
  ParagraphWithLargeMargin,
  ParagraphWithMediumMargin,
  RightTitle,
  Select,
  SelectIcon,
  Wrapper,
  TextArea,
  FormRow,
  Button,
  QuoteTitle,
} from "./Quote.style";
import { ParentWrapper, PrimaryParagraph } from "../About/About.style";
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ProjectTitle } from "../Project/Project.style";

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
  return (
    <ContainerXXL>
      <ParentWrapper>
        <Wrapper>
          <Col>
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
          <Col>
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
