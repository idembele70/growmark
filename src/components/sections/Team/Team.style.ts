import styled from 'styled-components';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { MDDown, SMDown } from '../../../styles/responsive';
const CardContainer = styled.div`
  display:flex;
  margin:-24px -12px 0;
  flex-wrap:wrap;
`;

const Card = styled.div`
  width:25%;
  padding: 0 12px;
  margin-top:24px;
  ${MDDown({
  width: "50%"
})}
  ${SMDown({
  width: "100%"
})}
  `;
const CardWrapper = styled.div`
  box-shadow: 0px 0px 45px rgba(0,0,0,0.07);
  background-color:#FFF;
  padding-bottom:24px;
  position:relative;
  border-radius:${({ theme }) => theme.borderRadius.small};
  &:hover {
    & li {
      transform:translateX(0);
    }
  }
`;
const CardImageContainer = styled.div`
  margin-bottom:24px;
`;
const CardImage = styled.img`
  max-width:100%;
  border-top-left-radius:${({ theme }) => theme.borderRadius.small};
  border-top-right-radius:${({ theme }) => theme.borderRadius.small};
`;
const CardInfo = styled.div`
  text-align:center;
`;
const Name = styled.h5`
  margin-bottom:4px;
  text-align:center;
  color:${({ theme }) => theme.palette.common.black};
`;
const Job = styled.span`
  color:${({ theme }) => theme.palette.primary.main};
`;
const SocialList = styled.ul`
  position:absolute;
  top:15px;
  left:0;
  width:100%;
  list-style-type:none;
  padding:0;
  transition:all 150ms ease;
  overflow:hidden;
`;
interface SocialListItemProps {
  delay: number
}
const SocialListItem = styled.li<SocialListItemProps>`
  transition:transform 500ms ease ${({ delay }) => delay}s;
  margin-left:15px;
  margin-bottom:10px;
  transform:translateX(-100%);

`;
const SocialIconContainer = styled(Link)`
  height:38px;
  width:38px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:${({ theme }) => theme.palette.common.white};
  color:${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 500ms ease;
  &:hover{
    background-color:${({ theme }) => theme.palette.primary.main};
    color:${({ theme }) => theme.palette.common.white};
  }
`;
const SocialIcon = styled(FontAwesomeIcon)`
  font-size:1rem;
`;
export {
  CardContainer,
  Card,
  CardWrapper,
  CardImageContainer,
  CardImage,
  CardInfo,
  Name,
  Job,
  SocialList,
  SocialListItem,
  SocialIconContainer,
  SocialIcon,
}