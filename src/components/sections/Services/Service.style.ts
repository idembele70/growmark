// Service style
import styled from 'styled-components';
import { LGDown, MDDown, SMDown } from '../../../styles/responsive';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { Container as DefaultContainer } from "../Carousel/carousel.style"
import { ContainerXXL } from '../Features/feature.style';
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
const Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 48px;
box-shadow: 0 0 45px rgba(0, 0, 0, 0.06);
background-color:${({ theme }) => theme.palette.common.white};
`;
const Description = styled.p`
text-align: center;
`;
export {
  Container,
  Wrapper,
  Description,
  Item,
  ItemContainer,
  ItemWrapper,
  Title,
};
