import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  Bottom,
  BottomWrapper,
  Container,
  Info,
  InfoContainer,
  InfoIcon,
  Logo,
  LogoContainer,
  Nav,
  NavDropDown,
  NavDropDownIcon,
  NavDropDownItem,
  NavDropDownItemContainer,
  NavItem,
  NavItemWrapper,
  QuoteBtn,
  SocialContainer,
  SocialIcon,
  SocialIconContainer,
  Top,
  TopWrapper,
} from "./Header.style";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  interface IInfo {
    title: string;
    icon: IconDefinition;
  }
  const infoItems: IInfo[] = [
    {
      title: "123 Street, New York, USA",
      icon: faLocationDot,
    },
    {
      title: "info@example.com",
      icon: faEnvelope,
    },
    {
      title: "+012 345 67890",
      icon: faPhone,
    },
  ];
  const socialIcons: IconDefinition[] = [faFacebookF, faTwitter, faLinkedinIn];
  //
  const { pathname } = useLocation();
  const [dropDownActive, setDropDownActive] = useState(false);
  useEffect(() => {
    const dropDownPathname: string[] = [
      "/feature",
      "/team",
      "/testimonial",
      "/quotation",
      "/notFound",
    ];
    if (dropDownPathname.includes(pathname)) setDropDownActive(true);
    else setDropDownActive(false);
  }, [pathname]);
  return (
    <Container>
      <Top>
        <TopWrapper>
          <LogoContainer to="/">
            <Logo>GrowMark</Logo>
          </LogoContainer>
          <InfoContainer>
            {infoItems.map(({ title, icon }, idx) => (
              <Info key={idx}>
                <InfoIcon icon={icon} />
                {title}
              </Info>
            ))}
            <SocialContainer>
              {socialIcons.map((icon, idx) => (
                <SocialIconContainer key={idx}>
                  <SocialIcon icon={icon} />
                </SocialIconContainer>
              ))}
            </SocialContainer>
          </InfoContainer>
        </TopWrapper>
      </Top>
      <Bottom>
        <BottomWrapper>
          <Nav>
            <NavItemWrapper>
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/service">Services</NavItem>
              <NavItem to="/project">Projects</NavItem>
              <NavDropDown isActive={dropDownActive} href="#">
                Pages
                <NavDropDownIcon icon={faChevronDown} />
                <NavDropDownItemContainer>
                  <NavDropDownItem to="/feature">Features</NavDropDownItem>
                  <NavDropDownItem to="/team">Our Team</NavDropDownItem>
                  <NavDropDownItem to="/testimonial">
                    Testimonial
                  </NavDropDownItem>
                  <NavDropDownItem to="/quotation">Quotation</NavDropDownItem>
                  <NavDropDownItem to="/notFound">404 Page</NavDropDownItem>
                </NavDropDownItemContainer>
              </NavDropDown>
              <NavItem to="/contact">Contact</NavItem>
            </NavItemWrapper>
            <QuoteBtn to="/">Get A Quote</QuoteBtn>
          </Nav>
        </BottomWrapper>
      </Bottom>
    </Container>
  );
};

export default Header;
