import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemLink,
  Title,
  Wrapper,
} from "./PageHeader.style";

type PageHeaderProps = {
  title: string;
  listItemTitle: string;
};
const PageHeader: React.FC<PageHeaderProps> = ({ title, listItemTitle }) => {
  const listItem: string[] = ["Home", "Pages", listItemTitle];
  return (
    <Container>
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
