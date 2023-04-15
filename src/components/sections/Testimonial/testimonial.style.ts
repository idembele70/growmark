import styled from 'styled-components';
import { CardContainer } from '../Projects/Projects.style';

const TestimonialCardContainer = styled(CardContainer)`
  // second slide
   & .slick-current {
    // card item
    & .card {
      background-color:${({ theme }) => theme.palette.primary.main};
      // card item child
      & * {
        color:${({ theme }) => theme.palette.common.white};
      }
    }
  }
`;

const CardItem = styled.div`
  padding:48px;
  border-radius:${({ theme }) => theme.borderRadius.small};
  box-shadow:0 0 45px rgba(0,0,0,0.07);
  transition:all 500ms ease;
  &:hover {
    background-color:${({ theme }) => theme.palette.primary.main};
    // card item childs
    &  * {
      color:${({ theme }) => theme.palette.common.white};
    }
  }
`;
const CardItemWrapper = styled.div`
  
`;
const CardImage = styled.img`
  display:block;
  height:100px;
  width:100px;
  border-radius:${({ theme }) => theme.borderRadius.medium};
  margin-bottom:24px;
`;
const Name = styled.h5`
  margin-bottom:8px;
  color:${({ theme }) => theme.palette.secondary.darker};
`;
export {
  TestimonialCardContainer,
  CardItem,
  CardItemWrapper,
  CardImage,
  Name,
}