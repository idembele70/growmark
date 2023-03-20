
// Header styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LGDown, MDDown, MDUp, SMDown, XLDown, XSDown } from '../../../styles/responsive';
const Container = styled.div`
  
`;
const DefaultWrapper = styled.div`
  max-width:1320px;
  width:100%;
  margin: 0 auto;
  padding: 16px 12px;
  ${XLDown({
  maxWidth: 1140
})}
  ${LGDown({
  maxWidth: 960
})}
  ${MDDown({
  maxWidth: 720
})}
  ${SMDown({
  maxWidth: 540
})}
  ${MDDown({
  maxWidth: "auto"
})}
`;
// The top of the header style
const Top = styled.div`
  background-color:${({ theme }) => theme.palette.primary.main};
  ${MDDown({
  display: "none"
})}
  `;
const TopWrapper = styled(DefaultWrapper)`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;
const LogoContainer = styled(Link)`
  
`;
const Logo = styled.h2`
  font-size:2rem;
  color: ${({ theme }) => theme.palette.common.white};
  ${LGDown({
  fontSize: "calc(1.325rem + .9vw)"
})
  }
`;

const InfoContainer = styled.div`
  display:flex;
  align-items:center;
`;
const Info = styled.small`
  font-size:0.875rem;
  color:${({ theme }) => theme.palette.common.white};
  margin-left:24px;
  flex-grow:1;
`;
const InfoIcon = styled(FontAwesomeIcon)`
  margin-right:16px;
  color:${({ theme }) => theme.palette.common.white};
`;
const SocialContainer = styled.div`
  display:flex;
  margin-left:16px;
`;
const SocialIconContainer = styled.div`
  background:${({ theme }) => theme.palette.primary.light};
  height:32px;
  width:32px;
  margin-left:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
`;
const SocialIcon = styled(FontAwesomeIcon)`
  color:${({ theme }) => theme.palette.primary.main};
`;
// The bottom of the header style
const Bottom = styled.header`
  background-color:${({ theme }) => theme.palette.common.white};
`;
const BottomWrapper = styled(DefaultWrapper)`
  padding: 0 12px;
  ${MDDown({
  padding: "8px 12px"
})}
  `;
const Nav = styled.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 12px;
  ${MDDown({
  flexWrap: "wrap"
})}
`;
const SMLogo = styled.h1`
  font-size:calc(1.375rem + 1.5vw);
  color:${({ theme }) => theme.palette.secondary.main};
  ${MDUp({
  display: "none"
})}
`;
const BarsContainer = styled.button`
  padding:4px 12px;
  background-color:transparent;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid rgba(0,0,0,0.1);
  cursor: pointer;
  transition: box-shadow 150ms ease-in-out;
  outline: 0;
  color: rgba(0,0,0,0.55);
  :focus {
   box-shadow: 0px 0px 0px 0.25rem;
  }
  ${MDUp({
  display: "none"
})}
`;
const Bars = styled(FontAwesomeIcon)`
  display:block;
  width:30px;
  height:30px;
  
`;
interface NavItemContainerProps {
  isExpanded: boolean
}
const NavItemContainer = styled.div<NavItemContainerProps>`
  flex:1;
  ${({ isExpanded }) => MDDown({
  maxHeight: isExpanded ? 476 : 0,
  overflow: "hidden",
  flexBasis: "100%",
  transition: "max-height 350ms ease",
  marginTop: 15
})
  }
`;
const NavItemWrapper = styled.div`
  display:flex;
  ${({ theme }) => MDDown({
  flexDirection: "column",
  borderTop: `1px solid ${theme.palette.primary.light}`,
})}
`;
const NavItem = styled(NavLink)`
  font-size:1.125rem;
  padding:25px 0;
  margin-right:35px;
  color:${({ theme }) => theme.palette.secondary.darker};
  transition: all 150ms ease-in-out;
  &.active{
    color:${({ theme }) => theme.palette.primary.main};
  }
  &:hover {
    color:${({ theme }) => theme.palette.primary.main};
  }
  ${MDDown({
  padding: "10px 0"
})}
`;
interface NavDropDownContainerProps {
  isExpanded: boolean;
}
const NavDropDownContainer = styled.div<NavDropDownContainerProps>`
  position:relative;
  display:flex;
  &:hover {
    ${({ theme }) =>
    MDUp({
      ["& svg, & > a"]: {
        color: theme.palette.primary.main
      },
      ["& > div"]: {
        top: "100%",
        opacity: 1,
        visibility: "visible",
      }

    })
  }
  }
  ${({ isExpanded }) => MDDown({
    flexDirection: "column",
    ["& > div"]: {
      display: isExpanded ? "flex" : "none"
    }
  })
  }
`;
interface NavDropDownProps {
  isActive: boolean
}
const NavDropDown = styled.a<NavDropDownProps>`
  font-size:1.125rem;
  padding:25px 0;
  margin-right:35px;
  &, & svg {
    color:${({ theme, isActive }) => isActive ? theme.palette.primary.main : theme.palette.secondary.darker};
  }
  transition: all 150ms ease-in-out;
  ${MDDown({
  padding: "10px 0"
})
  }
  `;
const NavDropDownIcon = styled(FontAwesomeIcon)`
  margin-left:8px;
  transition: all 150ms ease-in-out;
`;
const NavDropDownItemContainer = styled.div`
  position:absolute;
  top:150%;
  opacity:0;
  visibility:hidden;
  transition: all 500ms ease ;
  width:160px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: 8px 0;
  display:flex;
  flex-direction:column;
  border-radius: ${({ theme: { borderRadius: { small } } }) => ` 0 0 ${small} ${small}`};
  ${MDDown({
  position: "initial",
  width: "100%",
  opacity: 1,
  visibility: "visible"
})}
`;
const NavDropDownItem = styled(NavLink)`
  color:${({ theme }) => theme.palette.secondary.main};
  font-size:1rem;
  padding: 4px 16px;
  font-weight:400;
  text-transform:capitalize;
  &:hover {
    background-color:${({ theme }) => theme.palette.secondary.light};
  }
  &.active {
    background-color:${({ theme }) => theme.palette.primary.main};
    color:${({ theme }) => theme.palette.common.white};
  }
`;
const QuoteBtn = styled(Link)`
  color:${({ theme }) => theme.palette.primary.light};
  font-size:1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  ${MDDown({
  display: "none"
})
  }
`;
export {
  Container,
  DefaultWrapper,
  Top,
  TopWrapper,
  LogoContainer,
  Logo,
  InfoContainer,
  Info,
  InfoIcon,
  SocialContainer,
  SocialIconContainer,
  SocialIcon,
  Bottom,
  BottomWrapper,
  Nav,
  SMLogo,
  BarsContainer,
  Bars,
  NavItemContainer,
  NavItemWrapper,
  NavItem,
  NavDropDownContainer,
  NavDropDown,
  NavDropDownIcon,
  NavDropDownItemContainer,
  NavDropDownItem,
  QuoteBtn,
}