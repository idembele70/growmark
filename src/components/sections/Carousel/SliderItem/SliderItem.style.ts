import styled from 'styled-components';
import { DefaultWrapper } from '../../../layouts/Header/Header.style';
import { LGDown, MDUp, XSDown } from '../../../../styles/responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position:relative;
`;
const Image = styled.img`
  width:100%;
  ${XSDown({
  minHeight: 450,
  objectFit: "cover"

})}
`;
const Wrapper = styled(DefaultWrapper)`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`;
const InfoContainer = styled.div`
  margin: 0 -12px;
`;
const InfoWrapper = styled.div`
  padding:0 12px;
  color:${({ theme }) => theme.palette.common.white};
  width:100%;
${MDUp({
  width: "58.33333%"
})}
&.odd{
  & h1 {
    margin-bottom:24px;
  }
}
&.even{
 margin-left:auto;
 display:flex;
 flex-direction:column;
 align-items:flex-end;
 & h1 {
   margin-bottom:48px;
   text-align:right;
  }
 
}


`;
const Paragraph = styled.p`
  font-size:1.5rem;
  margin-bottom: 16px;
  ${LGDown({
  fontSize: "calc(1.275rem + .3vw)"
})}
`;
const Strong = styled.strong`
  font-weight:bolder;
`;
const Title = styled.h1`
font-size:5rem;
${LGDown({
  fontSize: "calc(1.625rem + 4.5vw)"
})}
`;
const LinkBtn = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.light};
  background: ${({ theme }) => theme.palette.primary.main};
  border-color: ${({ theme }) => theme.palette.primary.darker};
  padding: 16px 48px;
  border-radius:${({ theme }) => theme.borderRadius.medium};
  display:inline-block;
  cursor:pointer;
  user-select:none;
  transition: all 500ms ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.darker};
  }
`;
export {
  Container,
  Image,
  Wrapper,
  InfoContainer,
  InfoWrapper,
  Paragraph,
  Strong,
  Title,
  LinkBtn,
}