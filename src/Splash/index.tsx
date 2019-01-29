import React, { FunctionComponent } from "react";
import styled from "styled-components";
import projectionsBandUrl from "./proj2.png";
import inSceneryCoverUrl from "./in_scenery_cover.jpg";
import { laptopUp, tabletUp, desktopUp } from "../media-queries";

const SplashContainer = styled.div`
  position: relative;
`;

const ProjectionsImg = styled.img`
  z-index: 10;
  width: 100%;
  position: absolute;
  object-fit: cover;
`;

const SplashContentContainer = styled.div`
  z-index: 11;
  position: absolute;
  width: 100%;
  top: 30vh;
  padding: 12px;
  ${tabletUp`
    top: 36vh;
  `}
  ${laptopUp`
    top: 40vh;
  `}
`;

const MainHeading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  letter-spacing: 20px;
  ${laptopUp`
    font-size: 50px;
    letter-spacing: 28px;
  `}
  ${desktopUp`
    font-size: 68px;
    letter-spacing: 34px;
  `}
  filter: blur(0.7px);
`;

const AlbumFeatureContainer = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InSceneryImg = styled.img`
  width: 320px;
  border: 4px solid rgba(100, 100, 100, 0.5);
  box-shadow: rgba(0, 0, 0, 0.5) 2px 0px 4px 1px;
`;

const InSceneryDescription = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: 12px;
    filter: blur(0.5px);
    text-align: center;
  }
`;

const Splash: FunctionComponent = () => {
  return (
    <SplashContainer>
      <ProjectionsImg src={projectionsBandUrl} />
      <SplashContentContainer>
        <MainHeading>Lost Cousins</MainHeading>
        <AlbumFeatureContainer>
          <InSceneryImg src={inSceneryCoverUrl} />
          <InSceneryDescription>
            <h2>
              "In Scenery"
              <br />
              LP
            </h2>
          </InSceneryDescription>
        </AlbumFeatureContainer>
      </SplashContentContainer>
    </SplashContainer>
  );
};

export default Splash;
