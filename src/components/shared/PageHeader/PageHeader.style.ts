import styled from 'styled-components';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { LGDown } from '../../../styles/responsive';
import { Link } from 'react-router-dom';
const Container = styled.section`
  width:100%;
  padding: 48px 12px;
  margin-bottom:48px;
  background-image: url(${process.env.PUBLIC_URL}/assets/carousel/carousel-1.jpg);
  background-position: center;
`;
const Wrapper = styled(DefaultWrapper)`
  padding: 48px 12px;
`;
const Title = styled.h1`
font-size:4.5rem;
text-align: center;
margin-bottom: 24px;
color:${({ theme }) => theme.palette.common.white};
text-transform: capitalize;
${LGDown({
  fontSize: "calc(1.575rem + 3.9vw)"
})}
`;
const List = styled.ul`
  display:flex;
  justify-content: center;
  list-style-type: none;
  padding:0;
`;
const ListItem = styled.li`
  font-size: 1.125rem;
  text-transform:capitalize;
  color:  ${({ theme }) => theme.palette.primary.main};
  :not(:first-of-type) {
    padding-left:8px;
        ::before {
      content: "/";
      padding-right:8px;
      color:${({ theme }) => theme.palette.common.white};
    }
  }
`;
const ListItemLink = styled.a`
  color:${({ theme }) => theme.palette.common.white};
`;
export {
  Container,
  Wrapper,
  Title,
  List,
  ListItem,
  ListItemLink
}