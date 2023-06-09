// Project styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import { SMDown, SMUp } from '../../../styles/responsive';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { Title } from "../Services/Service.style";

const Wrapper = styled(DefaultWrapper)`
  
`;
const Top = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:48px;
  ${SMDown({
  flexDirection: "column",
  alignItems: "center"
})}
  `;
const TopInfoContainer = styled.div`
max-width:500px;
${SMDown({
  textAlign: "center"
})}
`;
const ProjectTitle = styled(Title)`
  ${SMUp({
  textAlign: "left",
  marginBottom: 0,
})};
${SMDown({
  marginBottom: 24,
})
  }
`;
const SlideBtnContainer = styled.div`
  display:flex;
  align-items:flex-end;
`;
const SlideBtn = styled.div`
  background-color:${({ theme }) => theme.palette.common.white};
  height:55px;
  width:55px;
  margin-left:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 500ms ease;
  cursor:pointer;
  user-select:none;
  color:${({ theme }) => theme.palette.common.black};
  border-radius:${({ theme }) => theme.borderRadius.medium};
  box-shadow:0 0 45px rgba(0,0,0,0.15);
  &:hover {
    background-color:${({ theme }) => theme.palette.primary.main};
    color:${({ theme }) => theme.palette.common.white};
  }
`;
const SlideBtnIcon = styled(FontAwesomeIcon)`
  display:block;
  height:25px;
  width:25px;
`;
const Bottom = styled.div`
  
`;
const CardContainer = styled(Slider)`

// spacing beetween slides
& .slick-slide{
  // hack to see the box-shadow of slide on bottom
  margin-bottom:24px; 
  ${SMUp({
  paddingRight: 25
})}
}
& .slick-list {
  // hack to see the box-shadow on bottom cause overflow-y
  // cannot be override only
  margin-bottom:-24px; 
}

`;
const Card = styled.div`
  box-shadow: 0 0 45px rgba(0,0,0,0.07);
  border-radius:${({ theme }) => theme.borderRadius.small};
    &:hover {
      //refering to card image overlay
    & > div > div {
      opacity:1
    }
    & a {
      transform: translateY(0);
    }
  }
  `;
const ImageContainer = styled.div`
  width:100%;
  position:relative;
  `;
const CardImage = styled.img`
  max-width:100%;
  border-top-left-radius:${({ theme }) => theme.borderRadius.small};
  border-top-right-radius:${({ theme }) => theme.borderRadius.small};
`;
const CardImgOverlay = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  opacity:0;
  background-color:rgba(0,0,0,0.5);
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.small};
  display:flex;
  justify-content:center;
  align-items:center;
  transition:all 500ms ease;
  `;
const IconContainer = styled(Link)`
  height:48px;
  width:48px;
  color:#000;
  background-color:${({ theme }) => theme.palette.primary.light};
  border-radius:${({ theme }) => theme.borderRadius.medium};
  display:flex;
  align-items:center;
  justify-content:center;
  user-select:none;
  margin-right:8px;
  transform:translateY(50px);
  transition: all 500ms ease;
`;
const Icon = styled(FontAwesomeIcon)`
  
`;
const Info = styled.div`
  padding: 24px;
`;
const CardLink = styled(Link)`
  display:block;
  font-size:1.25rem;
  margin-bottom:8px;
  font-weight:500;
  line-height:1.2;
  font-family:"Roboto","sans-serif";
  color:${({ theme }) => theme.palette.secondary.darker};
  &:hover{
    color:${({ theme }) => theme.palette.primary.main};
  }
`;
export {
  Bottom, Card, CardContainer, CardImage,
  CardImgOverlay, CardLink, Icon, IconContainer, ImageContainer, Info, ProjectTitle, SlideBtn, SlideBtnContainer, SlideBtnIcon, Top,
  TopInfoContainer, Wrapper
};
