// Carousel Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { XSDown } from '../../../styles/responsive';

const Container = styled.section`
  margin-bottom:48px;
  position: relative;
  & .slick-active {
    z-index:1;
  }
`;
const Btn = styled.button`
  width:15%;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  z-index:1;
  background:none;
  opacity:0.5;
  border:0;
  transition: opacity 150ms ease;
  &:hover, :focus {
    opacity: 1;
  }
  ${XSDown({
  width: "auto"
})}
`;
const PrevBtn = styled(Btn)`
  left:0;
`;
const NextBtn = styled(Btn)`
  right:0;
`;
const BtnIconContainer = styled.span`
  height:56px;
  width:56px;
  background-color:${({ theme }) => theme.palette.primary.main};
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  ${XSDown({
  width: 40,
  height: 40
})}
`;
const BtnIcon = styled(FontAwesomeIcon)`
  height:13px;
  width:13px;
  color:${({ theme }) => theme.palette.common.white};
`;
export {
  Container,
  PrevBtn,
  NextBtn,
  BtnIconContainer,
  BtnIcon,
}