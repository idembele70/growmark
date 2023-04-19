import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MDDown, SMDown, SMUp } from '../../../styles/responsive';
import { DefaultWrapper } from '../Header/Header.style';

const ParentContainer = styled.div`
  
`;

const Container = styled.div`
  width:100%;
  padding: 48px 12px;
  margin-top: 48px;
  background-color:${({ theme }) => theme.palette.secondary.darker};
  color: #b0b9ae;
`;
const ParentWrapper = styled(DefaultWrapper)`
`;
const Wrapper = styled.div`
  margin: -24px -24px 0;
  display:flex;
  flex-wrap:wrap;
`;
const Col = styled.div`
  width:25%;
  padding:0 24px;
  margin-top:24px;
  ${MDDown({
  width: "50%"
})}
${SMDown({
  width: "100%"
})
  }
`;
const ColTitle = styled.h4`
  color:${({ theme }) => theme.palette.common.white};
  font-size:1.5rem;
  margin-bottom:24px;
`;
// Office Col style
const OfficeIcon = styled(FontAwesomeIcon)`
  margin-right:16px;
`;
const OfficeParagraph = styled.p`
  margin-bottom:8px;
`;
const MediaContainer = styled.div`
  display:flex;
  padding-top:16px;
`;
const RoundedIconContainer = styled(Link)`
  height:38px;
  width:38px;
  border-radius:${({ theme }) => theme.borderRadius.medium};
  display:flex;
  align-items:center;
  justify-content:center;
`;
const MediaItem = styled(RoundedIconContainer)`
  background-color:${({ theme }) => theme.palette.primary.light};
  margin-right:8px;
`;
const MediaIcon = styled(FontAwesomeIcon)`
  color:#000;
`;
// Quick Link style
const QuickLinkItemContainer = styled.div`
  display:flex;
  flex-direction:column;
`;
const QuickLinkItem = styled(Link)`
  user-select:none;
  transition: all 300ms ease;
  border: 1px solid transparent;
  color:#b0b9ae;
  &:hover{
    letter-spacing:1px;
    color:${({ theme }) => theme.palette.primary.light};
  }
`;
const QuickLinkIcon = styled(FontAwesomeIcon)`
  margin-right:8px;
`;
// Business hours style
const BusinessHoursItemContainer = styled.div`
  display:flex;
  flex-direction:column;
`;
const BusinessHoursItem = styled.div`
  
`;
const Date = styled.p`
  margin-bottom:4px;
`;
const Hours = styled.h6`
  font-size:1rem;
  margin-bottom:8px;
  color:${({ theme }) => theme.palette.primary.light};
`;
// Newsletter style
const NewsletterParagraph = styled.p`
  margin-bottom:16px;
`;
const InputContainer = styled.form`
  position:relative;
`;
const Input = styled.input`
  padding: 16px 48px 16px 24px;
  width:100%;
  border-radius:${({ theme }) => theme.borderRadius.small};
  background-color:transparent;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  font-size:1rem;
  transition: all 150ms ease-in-out;
  box-shadow:none;
  color:${({ theme }) => theme.palette.common.black};
  :focus {
    border-color:#a3b0ff;
    outline:0;
    box-shadow: 0 0 0 4px rgba(71,97,255,0.25);
  }
`;
const SignUp = styled.button`
  position:absolute;
  top:8px;
  right:8px;
  border:1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius:${({ theme }) => theme.borderRadius.small};
  padding:8px 12px;
  background-color:${({ theme }) => theme.palette.primary.light};
  color:#000;
`;
// Copyright style
const CopyrightContainer = styled.div`
  background-color:#111111;
  color:#B0B9AE;
`;
const CopyrightParentWrapper = styled(DefaultWrapper)`
  padding: 24px 12px;
  `;
const CopyrightWrapper = styled.div`
  margin:0 -12px;
  display:flex;
  ${SMUp({
  justifyContent: "space-between"
})}
  ${SMDown({
  flexDirection: "column",
  ["& > div:first-of-type"]: {
    marginBottom: 16
  }
})}
`;
const CopyrightItem = styled.div`
  padding: 0 12px;
  ${SMDown({
  textAlign: 'center'
})
  }
`;
const CopyrightLink = styled(Link)`
  color:${({ theme }) => theme.palette.primary.light};
  transition:all 500ms ease;
  &:HOVER {
    color:${({ theme }) => theme.palette.primary.main};
  }
`;
export {
  ParentContainer,
  BusinessHoursItem, BusinessHoursItemContainer, Col,
  ColTitle, Container, CopyrightContainer, CopyrightItem,
  CopyrightLink, CopyrightParentWrapper,
  CopyrightWrapper, Date,
  Hours, Input, InputContainer, MediaContainer, MediaIcon, RoundedIconContainer, MediaItem, NewsletterParagraph, OfficeIcon,
  OfficeParagraph, ParentWrapper, QuickLinkIcon, QuickLinkItem, QuickLinkItemContainer, SignUp, Wrapper
};
