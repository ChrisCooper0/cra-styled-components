import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container } from "../../globalStyles";

const InfoSection = ({
  lightBg,
  imgLeft,
  lightText,
  lightTextDesc,
  headline,
  description,
  start,
  img,
  alt,
}) => {
  return (
    <div>
      <InfoSec lightBg={lightBg}>
        <Container data-aos="fade-up" data-aos-duration="1200">
          <InfoRow imgLeft={imgLeft}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </div>
  );
};

export default InfoSection;
