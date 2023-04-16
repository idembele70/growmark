import React from "react";
import { Container, Icon, SubTitle, Title, Wrapper } from "./NotFound.style";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Paragraph, RoundedBtnLink } from "../../sections/About/About.style";
const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Icon icon={faTriangleExclamation} />
        <Title>404</Title>
        <SubTitle>Page Not Found</SubTitle>
        <Paragraph>
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </Paragraph>
        <RoundedBtnLink to="/">Go Back To Home</RoundedBtnLink>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
