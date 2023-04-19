import React, { useLayoutEffect, useRef } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemLink,
  Title,
  Wrapper,
} from "./PageHeader.style";
import { gsap } from "gsap";
import { fadeIn } from "../gsapAnimations";

type PageHeaderProps = {
  title: string;
  listItemTitle: string;
};
const PageHeader: React.FC<PageHeaderProps> = ({ title, listItemTitle }) => {
  // animations on load
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.from(containerEl.current, {
      ...fadeIn,
      delay: 0.1,
    });
    return () => {};
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Title>{title}</Title>
        <List>
          <ListItem>
            <ListItemLink href="#">Home</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink href="#">Pages</ListItemLink>
          </ListItem>
          <ListItem>{listItemTitle}</ListItem>
        </List>
      </Wrapper>
    </Container>
  );
};

export default PageHeader;
