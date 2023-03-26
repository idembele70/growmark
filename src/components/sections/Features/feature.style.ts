// Feature style
import styled from 'styled-components';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { LGDown, MDDown, SMDown, XLDown, XLUp } from '../../../styles/responsive';

const ContainerXXL = styled.section`
padding:48px 12px;
margin: 0 auto;
width: 100%;
${XLUp({
  maxWidth: 1320
})
  }
`;

const Wrapper = styled(DefaultWrapper)`
background-color:${({ theme }) => theme.palette.common.white};
box-shadow: 0 0 45px rgba(0,0,0,.08);
`;

const ItemWrapper = styled.div`
  padding: 0 12px;
  display:flex;
  flex-wrap:wrap;
  ${MDDown({
  padding: 0
})}
`;
const ItemContainer = styled.div`
  padding:48px;
  width:25%;
  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.palette.primary.light};
  }
  ${({ theme }) => MDDown({
  width: "50%",
  ["&:not(:last-of-type)"]: {
    borderRight: 0
  },
  ["&:nth-child(odd)"]: {
    borderRight: `1px solid ${theme.palette.primary.light}`
  },
  ["&:nth-child(3),&:nth-child(4)"]: {
    borderTop: `1px solid ${theme.palette.primary.light}`
  },

})}
  ${({ theme }) => SMDown({
  width: "100%",
  ["&:not(:last-of-type)"]: {
    borderBottom: `1px solid ${theme.palette.primary.light}`
  },
  ["&:nth-child(odd)"]: {
    borderRight: 0
  },
  ["&:nth-child(3),&:nth-child(4)"]: {
    borderTop: 0
  },
})}
`;
const IconContainer = styled.div`
height:64px;
width:64px;
border-radius:50%;
background-color: ${({ theme }) => theme.palette.primary.light};
margin-bottom:24px;
`;
const Icon = styled.img`
  width:100%;
`;
const Title = styled.h5`
  color:${({ theme }) => theme.palette.secondary.darker};
  margin-bottom:16px;
`;
const Description = styled.p`
  
`;
export {
  ContainerXXL,
  Wrapper,
  ItemWrapper,
  ItemContainer,
  IconContainer,
  Icon,
  Title,
  Description,
}