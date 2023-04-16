import styled from 'styled-components';
import { ContainerXXL } from '../../sections/Features/Feature.style';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title as AboutTitle } from '../../sections/About/About.style'
import { LGDown } from '../../../styles/responsive';
const Container = styled(ContainerXXL)`
  
`;
const Wrapper = styled(DefaultWrapper)`
  display:flex;
  flex-direction: column;
  align-items: center;
  max-width: 624px;
  text-align: center;
`;
const Icon = styled(FontAwesomeIcon)`
  display:block;
  height:80px;
  width:80px;
  color: ${({ theme }) => theme.palette.primary.main};
`;
const Title = styled.h1`
  font-size:5rem;
  color:${({ theme }) => theme.palette.secondary.darker};
  margin-bottom:8px;
  ${LGDown({
  fontSize: "calc(1.625rem + 4.5vw)"
})}
  `;
const SubTitle = styled(AboutTitle)`
  font-weight:500;
`;

export {
  Container,
  Wrapper,
  Icon,
  Title,
  SubTitle
}