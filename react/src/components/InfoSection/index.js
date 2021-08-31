import image from "../../images/saving.svg";

import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import { Button } from "../ButtonElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer lightBg={true}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Heading darkText={true}>
                  Fund a gift, an event or whatever else you and your loved ones
                  need.
                </Heading>
              </TextWrapper>
              <BtnWrap>
                <Button
                  to="/register"
                  mainBg={true}
                  fontBig={true}
                  darkHover={true}
                >
                  Let's get started!
                </Button>
              </BtnWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt="logo" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
