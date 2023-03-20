import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  Bars,
  BarsContainer,
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
  NavDropDownContainer,
  NavDropDownIcon,
  NavDropDownItem,
  NavDropDownItemContainer,
  NavItem,
  NavItemContainer,
  NavItemWrapper,
  QuoteBtn,
  SMLogo,
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
  // Dropdown set to active effect
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
  // expand navbar handler
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  // expand dropDown on MDDown devices
  const [expandDropDown, setExpandDropDown] = useState(false);
  const handleExpandDropDown = () => {
    setExpandDropDown(!expandDropDown);
  };
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
            <LogoContainer to="/">
              <SMLogo>GrowMark</SMLogo>
            </LogoContainer>
            <BarsContainer onClick={handleExpand}>
              <Bars icon={faBars} />
            </BarsContainer>
            <NavItemContainer isExpanded={expanded}>
              <NavItemWrapper>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/service">Services</NavItem>
                <NavItem to="/project">Projects</NavItem>
                <NavDropDownContainer
                  onClick={handleExpandDropDown}
                  isExpanded={expandDropDown}
                >
                  <NavDropDown isActive={dropDownActive} href="#">
                    Pages
                    <NavDropDownIcon icon={faChevronDown} />
                  </NavDropDown>
                  <NavDropDownItemContainer>
                    <NavDropDownItem to="/feature">Features</NavDropDownItem>
                    <NavDropDownItem to="/team">Our Team</NavDropDownItem>
                    <NavDropDownItem to="/testimonial">
                      Testimonial
                    </NavDropDownItem>
                    <NavDropDownItem to="/quotation">Quotation</NavDropDownItem>
                    <NavDropDownItem to="/notFound">404 Page</NavDropDownItem>
                  </NavDropDownItemContainer>
                </NavDropDownContainer>
                <NavItem to="/contact">Contact</NavItem>
              </NavItemWrapper>
            </NavItemContainer>
            <QuoteBtn to="/">Get A Quote</QuoteBtn>
          </Nav>
        </BottomWrapper>
      </Bottom>
    </Container>
  );
};

export default Header;
