import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import {
  BusinessHoursItem,
  BusinessHoursItemContainer,
  Col,
  ColTitle,
  Container,
  CopyrightContainer,
  CopyrightItem,
  CopyrightLink,
  CopyrightParentWrapper,
  CopyrightWrapper,
  Date,
  Hours,
  Input,
  InputContainer,
  MediaContainer,
  MediaIcon,
  MediaItem,
  NewsletterParagraph,
  OfficeIcon,
  OfficeParagraph,
  ParentWrapper,
  QuickLinkIcon,
  QuickLinkItem,
  QuickLinkItemContainer,
  SignUp,
  Wrapper,
} from "./Footer.Style";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ParagraphWithMediumMargin } from "../../sections/Quote/Quote.style";

const Footer = () => {
  // Office Item
  interface IOfficeItem {
    icon: IconDefinition;
    info: string;
  }
  const officeItems: IOfficeItem[] = useMemo(
    () => [
      {
        icon: faLocationDot,
        info: "123 Street, New York, USA",
      },
      {
        icon: faPhone,
        info: "+012 345 67890",
      },
      {
        icon: faEnvelope,
        info: "info@example.com",
      },
    ],
    []
  );
  // media Item
  const mediaItem: IconDefinition[] = useMemo(
    () => [faTwitter, faFacebookF, faYoutube, faLinkedinIn],
    []
  );
  // Quick Links Item
  const QuickLinkItems: string[] = useMemo(
    () => [
      "About Us",
      "Contact Us",
      "Our Services",
      "Terms & Condition",
      "Support",
    ],
    []
  );
  // Business Hours item
  interface IBusinessHoursItem {
    date: string;
    hour: string;
  }
  const BusinessHoursItems: IBusinessHoursItem[] = useMemo(
    () => [
      { date: "Monday - Friday", hour: "09:00 am - 07:00 pm" },
      { date: "Saturday", hour: "09:00 am - 12:00 pm" },
      { date: "Sunday", hour: "Closed" },
    ],
    []
  );
  return (
    <>
      <Container>
        <ParentWrapper>
          <Wrapper>
            <Col>
              <ColTitle>Our Office</ColTitle>
              {officeItems.map(({ icon, info }, idx) => (
                <OfficeParagraph key={idx}>
                  <OfficeIcon icon={icon} />
                  {info}
                </OfficeParagraph>
              ))}
              <MediaContainer>
                {mediaItem.map((icon, idx) => (
                  <MediaItem to="/" key={idx}>
                    <MediaIcon icon={icon} />
                  </MediaItem>
                ))}
              </MediaContainer>
            </Col>
            <Col>
              <ColTitle>Quick Links</ColTitle>
              <QuickLinkItemContainer>
                {QuickLinkItems.map((item, idx) => (
                  <QuickLinkItem to="/" key={idx}>
                    <QuickLinkIcon icon={faChevronRight} />
                    {item}
                  </QuickLinkItem>
                ))}
              </QuickLinkItemContainer>
            </Col>
            <Col>
              <ColTitle>Business Hours</ColTitle>
              <BusinessHoursItemContainer>
                {BusinessHoursItems.map(({ date, hour }, idx) => (
                  <BusinessHoursItem key={idx}>
                    <Date>{date}</Date>
                    <Hours>{hour}</Hours>
                  </BusinessHoursItem>
                ))}
              </BusinessHoursItemContainer>
            </Col>
            <Col>
              <ColTitle>Newsletter</ColTitle>
              <NewsletterParagraph>
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </NewsletterParagraph>
              <InputContainer>
                <Input placeholder="Your email" />
                <SignUp type="submit">SignUp</SignUp>
              </InputContainer>
            </Col>
          </Wrapper>
        </ParentWrapper>
      </Container>
      <CopyrightContainer>
        <CopyrightParentWrapper>
          <CopyrightWrapper>
            <CopyrightItem>
              &copy;&nbsp;
              <CopyrightLink to="/">Your Site Name</CopyrightLink>, All Right
              Reserved.
            </CopyrightItem>
            <CopyrightItem>
              Designed By <CopyrightLink to="/">HTML Codex</CopyrightLink>
            </CopyrightItem>
          </CopyrightWrapper>
        </CopyrightParentWrapper>
      </CopyrightContainer>
    </>
  );
};

export default Footer;
