// Quote style
import styled from 'styled-components';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title } from '../Services/Service.style';
import { LGDown, MDDown, XSDown } from '../../../styles/responsive';
import { ProjectTitle } from '../Projects/Projects.style';

const ParentWrapper = styled(DefaultWrapper)`
`;
const Wrapper = styled.div`
  margin:-48px -24px 0;
  display:flex;
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
const QuoteTitle = styled(Title)`
max-width:auto;
text-align:left;
margin-bottom:24px;
`;
const ParagraphWithMediumMargin = styled.p`
  margin-bottom:16px;
  margin-top:24px;
`;
const ParagraphWithLargeMargin = styled.p`
  margin-bottom:24px;
`;
const ContactContainer = styled(Link)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  height:55px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width:255px;
  overflow:hidden;
  &:hover {
    & span {
      color:#394ecc
    }
  }
`;
const IconContainer = styled.div`
  background-color:${({ theme }) => theme.palette.primary.main};
  color:${({ theme }) => theme.palette.common.white};
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  width:55px;
`;
const Icon = styled(FontAwesomeIcon)`
  display:block;
  height:16px;
  width:16px;
`;
const Number = styled.span`
  color:${({ theme }) => theme.palette.primary.main};
  font-size:1.25rem;
  margin: 0 24px;
`;
const RightTitle = styled.h2`
  color:${({ theme }) => theme.palette.secondary.darker};
  font-size:2rem;
  margin-bottom:24px;
  font-weight:500;
  ${LGDown({
  fontSize: "calc(1.325rem + .9vw)"
})
  }
`;
const Form = styled.form`
  display:flex;
  flex-wrap:wrap;
  margin: -16px -8px 0;
`;
const DefaultFormCol = styled.div`
width:50%;
padding:0 8px;
margin-top:16px;
position:relative;
`;
const FormCol = styled(DefaultFormCol)`
  ${XSDown({
  width: "100%"
})}
`;
const Input = styled.input`
  height: calc(3.5rem + 2px);
  width:100%;
  padding: 16px 12px;
  border:1px solid #ced4da;
  border-radius:${({ theme }) => theme.borderRadius.small};
  transition: all 150ms ease-in-out;
  display:block;
  ::placeholder {
    font-size:1rem;
    color:${({ theme }) => theme.palette.common.black};
  }
  &:focus {
    border-color:#a3b0ff;
    outline:0;
    box-shadow: 0 0 0 0.25rem rgba(71,97,255,0.25);
  }
`;
const Label = styled.label`
  position:absolute;
  left:11px;
  top:8px;
  opacity:0.65;
  transform:scale(0.85);
`;
const Select = styled.select`
height:calc(3.5rem + 2px);
  width:100%;
  padding: 26px 12px 10px;
  border:1px solid #ced4da;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size:1rem;
  color:${({ theme }) => theme.palette.common.black};
  line-height:1.5;
  font-family:inherit;
  appearance:none;
  transition: all 150ms ease-in-out;
  &:focus {
    border-color:#a3b0ff;
    outline:0;
    box-shadow: 0 0 0 0.25rem rgba(71,97,255,0.25);
  }
`;
const Option = styled.option`
`;
const SelectIcon = styled(FontAwesomeIcon)`
  display:block;
  height:16px;
  width:12px;
  position:absolute;
  right:24px; //FormRow right padding + select right padding
  top:50%;
  transform:translateY(-50%);
`;
const FormRow = styled.div`
  width:100%;
  padding: 0 8px;
  margin-top:16px;
`;
const TextArea = styled.textarea`
  width:100%;
  height:130px;
  font-size:1rem;
  color:${({ theme }) => theme.palette.common.black};
  border: 1px solid #ced4da;
  border-radius:${({ theme }) => theme.borderRadius.small};
  padding:16px 12px;
  transition: all 150ms ease-in-out;
  font-family:inherit;
  resize:vertical;
  &:focus {
    border-color:#a3b0ff;
    outline:0;
    box-shadow: 0 0 0 0.25rem rgba(71,97,255,0.25);
  }
`;
const FormButton = styled.button`
background-color:${({ theme }) => theme.palette.primary.main};
color:${({ theme }) => theme.palette.common.white};
border:1px solid ${({ theme }) => theme.palette.primary.main};
transition:all 500ms ease;
&:hover{
  border-color: #394ECC;
  background-color:${({ theme }) => theme.palette.primary.darker};
}
&:focus {
  border-color:#a3b0ff;
  box-shadow: 0 0 0 0.25rem rgba(71,97,255,0.25);
} 
`;

const Button = styled(FormButton)`
  width:100%;
  padding:16px 12px;
  border-radius:${({ theme }) => theme.borderRadius.small};
`;
export {
  ParentWrapper,
  Wrapper,
  Col,
  QuoteTitle,
  ParagraphWithMediumMargin,
  ParagraphWithLargeMargin,
  ContactContainer,
  IconContainer,
  Icon,
  Number,
  RightTitle,
  Form,
  DefaultFormCol,
  FormCol,
  Input,
  Label,
  Select,
  SelectIcon,
  Option,
  FormRow,
  TextArea,
  FormButton,
  Button
}