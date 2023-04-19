import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
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
  ScrollTopBtn,
  ScrollTopBtnIcon,
  SocialContainer,
  SocialIcon,
  SocialIconContainer,
  Top,
  TopWrapper,
} from "./Header.style";
import { useLocation } from "react-router-dom";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

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
    const { style } = document.body;
    setExpanded(!expanded);
    if (expanded) {
      style.height = "auto";
      style.overflow = "auto";
    } else {
      style.height = "100vh";
      style.overflow = "hidden";
    }
    if (expandDropDown) setExpandDropDown(false);
  };
  // expand dropDown on MDDown devices
  const [expandDropDown, setExpandDropDown] = useState(false);
  const handleExpandDropDown = () => {
    setExpandDropDown(!expandDropDown);
  };

  // Scroll Listener
  const [isDesktop, setIsDesktop] = useState(false);
  const [displayScrollTop, setDisplayScrollTop] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 992) setIsDesktop(true);
      else setIsDesktop(false);
      if (window.scrollY > 300) {
        setDisplayScrollTop(true);
        setIsSticky(true);
      } else {
        setDisplayScrollTop(false);
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    return () => {
      //
      const { style } = document.body;
      if (expanded) {
        style.height = "auto";
        style.overflow = "auto";
      }
    };
  }, [pathname]);
  // Scroll to Top
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }, 1500);
  };
  // ScrollTrigger
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tween = gsap.to(containerEl.current, {
      opacity: 1,
      duration: 1,
      delay: 0.1,
    });
    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);
  return (
    <>
      <Container ref={containerEl} isSticky={isSticky} isDesktop={isDesktop}>
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
                    <NavDropDown
                      onClick={(e) => e.preventDefault()}
                      isActive={dropDownActive}
                      href="#"
                    >
                      Pages
                      <NavDropDownIcon icon={faChevronDown} />
                    </NavDropDown>
                    <NavDropDownItemContainer>
                      <NavDropDownItem to="/feature">Features</NavDropDownItem>
                      <NavDropDownItem to="/team">Our Team</NavDropDownItem>
                      <NavDropDownItem to="/testimonial">
                        Testimonial
                      </NavDropDownItem>
                      <NavDropDownItem to="/quote">Quotation</NavDropDownItem>
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
      <ScrollTopBtn
        onClick={handleScrollToTop}
        display={displayScrollTop.toString()}
      >
        <ScrollTopBtnIcon icon={faArrowUp} />
      </ScrollTopBtn>
    </>
  );
};

export default Header;
