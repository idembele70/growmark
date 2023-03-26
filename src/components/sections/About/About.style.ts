//About Style
import styled, { keyframes } from 'styled-components'
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { Link } from 'react-router-dom';
import { LGDown, MDDown, MDUp, XLDown, XLUp, XSDown } from '../../../styles/responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.section`
  margin:48px auto;
  padding: 0 12px;
  background:linear-gradient(
    rgba(0,0,0,0.1),
    rgba(0,0,0,0.1)),
    url(${process.env.PUBLIC_URL}/assets/about/about.jpg)
  ;
  background-size:cover;
  width: "100%";
  ${XLUp({
  maxWidth: 1320
})}
${XLDown({
  marginLeft: 0,
  marginRight: 0
})}
`;
const ParentWrapper = styled(DefaultWrapper)`
`;
const Wrapper = styled.div`
  display:flex;
  ${MDDown({
  flexDirection: "column"
})}
`;
const Col = styled.div`
  width:50%;
  ${MDDown({
  width: "100%"
})}
`;
const Left = styled(Col)`
  display:flex;
  justify-content:center;
  align-items:center;
  ${MDDown({
  minHeight: 300
})}
`;
const pulseBorder = keyframes`
    0% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
        opacity: 1
    }

    100% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(2);
        opacity: 0
    }
`
const BtnContainer = styled.button`
  position:relative;
  display:block;
  box-sizing:content-box;
  width:36px;
  height:46px;
  border-radius:100%;
  border:none;
  outline:none;
  padding: 18px 20px 20px 28px;
  background-color:${({ theme }) => theme.palette.primary.main};
  :before {
    content:"";
    position:absolute;
    z-index:1;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    display:block;
    width:90px;
    height:90px;
    background-color:${({ theme }) => theme.palette.primary.main};
    border-radius:100%;
    animation: ${pulseBorder} 1500ms infinite;
  }
  :after {
    content:"";
    position:absolute;
    z-index:1;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    display:block;
    width:90px;
    height:90px;
    background-color:${({ theme }) => theme.palette.primary.main}; ;
    border-radius:100%;
    transition:all 200ms;
  }
`;
const Icon = styled.span`
  display:block;
  position:relative;
  z-index:3;
  width:0;
  height:0;
  left:3px;
  border-left: 30px solid ${({ theme }) => theme.palette.common.white};
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  `;
const Right = styled(Col)`
${MDUp({
  paddingTop: 48
})}
`;
const RightWrapper = styled.div`
background-color:${({ theme }) => theme.palette.common.white};
border-Radius:${({ theme: { borderRadius: { small } } }) => `${small} ${small} 0 0`};
padding:48px;
${MDUp({
  marginTop: 48
})}
  
`;
const PrimaryParagraph = styled.p`
    font-size:1.25rem;
    color:${({ theme }) => theme.palette.primary.main};
    margin-bottom:16px;
  `;
const Title = styled.h1`
    color:${({ theme }) => theme.palette.secondary.darker};
    font-size:2.5rem;
    margin-bottom:24px;
    ${LGDown({
  fontSize: "calc(1.375rem + 1.5vw)"
})}
  `;
const Paragraph = styled.p`
  margin-bottom:24px;
`;
const ItemContainer = styled.div`
  margin: -48px -24px 48px;
  display:flex;
  padding-top:8px;
  ${XSDown({
  flexDirection: 'column'
})
  }
`;
const Item = styled.div`
  padding: 0 24px;
  margin-top:48px;
`;
const ItemIcon = styled.img`
  height:64px;
  width:64px;
  margin-bottom:24px;
`;
const ItemTitle = styled.h5`
  color:${({ theme }) => theme.palette.secondary.main};
  margin-bottom:16px;
`;
const ItemParagraph = styled.p`
  color:${({ theme }) => theme.palette.common.black};
  margin-bottom:0;
`;
const ExploreMore = styled(Link)`
  color:${({ theme }) => theme.palette.primary.light};
  font-size:1rem;
  background-color:${({ theme }) => theme.palette.primary.main};
  padding: 16px 48px;
  display:inline-block;
  border-radius:${({ theme }) => theme.borderRadius.medium};
  border:1px solid ${({ theme }) => theme.borderRadius.medium};
  user-select:none;
  transition: all 500ms ease-in-out;
  line-height:1.5;
`;
// modal style
interface ModalContainerProps {
  isopen: boolean;
}
const fadeIn = keyframes`
0% {
opacity:0;
visibility:hidden;
}
100% {
  opacity:1;
  visibility:visible;
}
`
const fadeOut = keyframes`
0% {
  opacity:1;
  visibility:visible;
}
100% {
  opacity:0;
  visibility:hidden;
}
`
const ModalContainer = styled.div<ModalContainerProps>`
  visibility: hidden;
  visibility: ${({ isopen }) => isopen ? "visible" : "hidden"};
  animation: ${({ isopen }) => isopen ? fadeIn : fadeOut} 150ms linear;
  height:100vh;
  width:100vw;
  position:fixed;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
  z-index: ${({ theme }) => theme.zIndex.modal};
  & > div {
    transition: transform 300ms ease-out;
    transform: translateY(${({ isopen }) => isopen ? 0 : -50}px);
  }
  `;
const Modal = styled.div`
  margin: 60px auto 0;
  max-width:800px;
  background-color:${({ theme }) => theme.palette.common.white};
  border: 1px solid rgba(0,0,0,0.2);
`;
const ModalHeader = styled.div`
  padding:16px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom: 1px solid #dee2e6;
`;
const ModalTitle = styled.h3`
  margin: 0;
  font-size:1.75rem;
  ${LGDown({
  fontSize: "calc(1.3rem + .6vw)"
})}
`;
const CloseContainer = styled.button`
  padding:8px;
  border:none;
  background:transparent;
`;
const Close = styled(FontAwesomeIcon)`
  display:block;
  height:16px;
  width:16px;
`;
const ModalBody = styled.div`
  position:relative;
  width:100%;
  aspect-ratio: 16 / 9;
  overflow:hidden;
`;
const Iframe = styled.iframe`
  width:100%;
  height:100%;
  border:none;
`;
export {
  Container,
  ParentWrapper,
  Wrapper,
  Col,
  Left,
  BtnContainer,
  Icon,
  Right,
  RightWrapper,
  PrimaryParagraph,
  Title,
  Paragraph,
  ItemContainer,
  Item,
  ItemIcon,
  ItemTitle,
  ItemParagraph,
  ExploreMore,
  ModalContainer,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseContainer,
  Close,
  ModalBody,
  Iframe,
}