import React, { useEffect, useMemo, useRef } from "react";
import {
  IconDefinition,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Card,
  CardContainer,
  CardImage,
  CardImageContainer,
  CardInfo,
  CardWrapper,
  Job,
  Name,
  SocialIcon,
  SocialIconContainer,
  SocialList,
  SocialListItem,
} from "./Team.style";
import { gsap } from "gsap";
type CardItemProps = {
  img: number;
  name: string;
  job: string;
};
const CardItem: React.FC<CardItemProps> = ({ img, name, job }) => {
  // cardItems SocialMedia
  const socialIcons: IconDefinition[] = useMemo(
    () => [faFacebookF, faTwitter, faInstagram, faLinkedinIn],
    []
  );

  return (
    <Card>
      <CardWrapper>
        <CardImageContainer>
          <CardImage
            src={`${process.env.PUBLIC_URL}/assets/team/team-${img}.jpg`}
            alt={name}
          />
        </CardImageContainer>
        <CardInfo>
          <Name>{name}</Name>
          <Job>{job}</Job>
        </CardInfo>
        <SocialList>
          {socialIcons.map((icon, idx) => (
            <SocialListItem delay={0.1 * idx}>
              <SocialIconContainer to="">
                <SocialIcon icon={icon} />
              </SocialIconContainer>
            </SocialListItem>
          ))}
        </SocialList>
      </CardWrapper>
    </Card>
  );
};

export default CardItem;
