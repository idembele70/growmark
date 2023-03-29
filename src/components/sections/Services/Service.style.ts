// Service style
import styled from 'styled-components';
import { LGDown, MDDown, SMDown } from '../../../styles/responsive';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { Container as DefaultContainer } from "../Carousel/Carousel.style"
import { ContainerXXL } from '../Features/Feature.style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Container = styled(ContainerXXL)`
`;

const Wrapper = styled(DefaultWrapper)`
display:flex;
flex-direction:column;
align-items:center;
`;
const Title = styled.h1`
  font-size:3rem;
  margin-bottom:48px;
  color:${({ theme }) => theme.palette.secondary.darker};
  max-width:500px;
  text-align:center;
  ${LGDown({
  fontSize: "calc(1.425rem + 2.1vw)"
})}
`;

const ItemWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:-24px -12px 0;

  `;
const ItemContainer = styled.div`
  padding: 0 12px;
  margin-top:24px;
  width: calc(100% / 3);
  ${MDDown({
  width: "50%",
})}
  ${SMDown({
  width: "100%"
})
  }

`;
const ItemContainerWrapper = styled.div`
  position:relative;
  // styling child on hover 
  &:hover {
    // Item
  & .item {
    transform:translateY(-24px);
  }
  // BtnContainer
  & .btnContainer {
    transform:translateY(24px);
  }
}
`;
const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 48px;
box-shadow: 0 0 45px rgba(0, 0, 0, 0.06);
background-color:${({ theme }) => theme.palette.common.white};
transition: all 500ms ease;
z-index:2;
position:relative;
`;
const Description = styled.p`
text-align: center;
`;
const BtnContainer = styled.div`
  z-index:1;
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom-left-radius:${({ theme }) => theme.borderRadius.small};
  border-bottom-right-radius:${({ theme }) => theme.borderRadius.small};
  font-size:1rem;
  width:80%;
  height:48px;
  background:${({ theme }) => theme.palette.common.white};
  box-shadow: 0 0 45px rgba(0,0,0,0.07);
  position:absolute;
  left:10%;
  bottom:0;
  transition:all 500ms ease;
  `;
const BtnLink = styled(Link)`
        color:${({ theme }) => theme.palette.primary.main};
  `;
const BtnIcon = styled(FontAwesomeIcon)`
  margin-left:8px;
`;
export {
  Container,
  Wrapper,
  Description,
  Item,
  ItemWrapper,
  ItemContainer,
  ItemContainerWrapper,
  Title,
  BtnContainer,
  BtnLink,
  BtnIcon,
};
