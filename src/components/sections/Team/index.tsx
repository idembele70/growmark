import { useMemo } from "react";
import { PrimaryParagraph } from "../About/About.style";
import { ContainerXXL } from "../Features/Feature.style";
import { Title, Wrapper } from "../Services/Service.style";
import CardItem from "./CardItem";
import { CardContainer } from "./Team.style";

const Team = () => {
  // CardItem
  interface ICardItem {
    img: number;
    name: string;
    job: string;
  }
  const CardItems: ICardItem[] = useMemo(
    () => [
      {
        img: 1,
        name: "Alex Robin",
        job: "Founder & CEO",
      },
      {
        img: 2,
        name: "Adam Crew",
        job: "Co Founder",
      },
      {
        img: 3,
        name: "Boris Johnson",
        job: "Executive Manager",
      },
      {
        img: 4,
        name: "Robert Jordan",
        job: "Digital Marketer",
      },
    ],
    []
  );

  return (
    <ContainerXXL>
      <Wrapper>
        <PrimaryParagraph>Our Team</PrimaryParagraph>
        <Title>Our Expert People Ready to Help You</Title>
        <CardContainer>
          {CardItems.map((props, idx) => (
            <CardItem {...props} key={idx} />
          ))}
        </CardContainer>
      </Wrapper>
    </ContainerXXL>
  );
};

export default Team;
