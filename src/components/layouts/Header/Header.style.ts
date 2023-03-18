
// Header styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LGDown, MDDown, XLDown } from '../../../styles/responsive';
const Container = styled.div`
  
`;
const DefaultWrapper = styled.div`
  max-width:1320px;
  margin: 0 auto;
  padding: 16px 12px;
  ${XLDown({
  maxWidth: 1140
})}
  ${LGDown({
  maxWidth: 960
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
  `;
const Nav = styled.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;
  
`;
const NavItemWrapper = styled.div`
  display:flex;
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
`;
interface NavDropDownProps {
  isActive: boolean
}
const NavDropDown = styled.a<NavDropDownProps>`
  position:relative;
  font-size:1.125rem;
  padding:25px 0;
  margin-right:35px;
  &, & svg {
    color:${({ theme, isActive }) => isActive ? theme.palette.primary.main : theme.palette.secondary.darker};
  }
  transition: all 150ms ease-in-out;
  &:hover {
    &,& svg {
      color:${({ theme }) => theme.palette.primary.main};
    }
    & > div {
      top:100%;
      opacity:1;
      visibility:visible;
    }
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
  NavItemWrapper,
  NavItem,
  NavDropDown,
  NavDropDownIcon,
  NavDropDownItemContainer,
  NavDropDownItem,
  QuoteBtn,
}