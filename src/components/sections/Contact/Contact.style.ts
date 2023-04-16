import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MDDown, SMDown } from '../../../styles/responsive';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { ContainerXXL } from '../Features/Feature.style';
import { DefaultFormCol, FormButton, TextArea } from '../Quote/Quote.style';
const Container = styled(ContainerXXL)`
  
`;
const Wrapper = styled(DefaultWrapper)`
`;
const Top = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Bottom = styled.div`
  display: flex;
  margin: -48px -24px 0;
  ${MDDown({
  flexDirection: "column"
})}
`;
const Col = styled.div`
  width:50%;
  padding: 0 24px;
  margin-top:48px;
  ${MDDown({
  width: "100%"
})}
`;
// Col Left Style
const ColTitle = styled.h3`
  font-size: 1.75rem;
  color:${({ theme }) => theme.palette.secondary.darker};
  margin-bottom:24px;
`;
const ParagraphLink = styled(Link)`
  color:${({ theme }) => theme.palette.primary.main};
  font-weight: 400;
`;
const FormCol = styled(DefaultFormCol)`
  ${SMDown({
  width: "100%"
})}
`;
const ContactTextArea = styled(TextArea)`
  height:200px;
`;
const BtnContainer = styled.div`
margin-top: 16px;
padding: 0 8px;
`;
const Button = styled(FormButton)`
  padding: 16px 48px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
// Col Right style
const DetailsRow = styled.div`
  display:flex;
  align-items: center;
  padding-bottom:16px;
  margin-bottom:16px;
  :not(:last-of-type){
    border-bottom:1px solid #dee2e6;
  }
`;
const IconContainer = styled.div`
  height:38px;
  width:38px;
  border-radius:${({ theme }) => theme.borderRadius.medium};
  display:flex;
  align-items:center;
  justify-content:center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  `;
const Icon = styled(FontAwesomeIcon)`
font-size: 1rem;
color:${({ theme }) => theme.palette.common.white};
`;
const DetailsInfo = styled.div`
  margin-left: 16px;
`;
const InfoTitle = styled.h6`
  font-size:1rem;
  margin-bottom:8px;
  text-transform: capitalize;
`;
const InfoParagraph = styled.p`
  color:${({ theme }) => theme.palette.common.black};
  margin-bottom: 0;
`;
const Iframe = styled.iframe`
  width:100%;
  border-radius:${({ theme }) => theme.borderRadius.small};
  min-height: 300px;
  border: 0;
`;
export {
  Bottom, BtnContainer,
  Button, Col, ColTitle, ContactTextArea, Container, DetailsInfo, DetailsRow, FormCol, Icon, IconContainer, Iframe, InfoParagraph, InfoTitle, ParagraphLink, Top, Wrapper
};
