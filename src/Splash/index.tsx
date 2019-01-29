import React, { FunctionComponent } from "react";
import styled from "styled-components";
import projectionsBandUrl from "./proj2.png";
import inSceneryCoverUrl from "./in_scenery_cover.jpg";
import { laptopUp, tabletUp, desktopUp, BREAKPOINTS } from "../media-queries";
import appleMusicIcon from "./stream-platform-images/applemusic.png";
import googlePlayIcon from "./stream-platform-images/googleplay.png";
import itunesIcon from "./stream-platform-images/itunes.png";
import spotifyIcon from "./stream-platform-images/spotify.png";
import MediaQuery from "react-responsive";

const SplashContainer = styled.div`
  position: relative;
`;

const ProjectionsImg = styled.img`
  z-index: 10;
  width: 100%;
  position: absolute;
  object-fit: cover;
`;

const EnterSiteButton = styled.button`
  padding: 6px;
  border: none;
  outline: none;
  z-index: 12;
  position: absolute;
  background: none;
  width: 100%;
  text-transform: uppercase;
  font-weight: 500;
  color: #ddd;
  filter: blur(0.6px);
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);

  ${tabletUp`
    font-size: 26px;
    color: #333;
  `}

  font-size: 22px;
  color: #ddd;
  ${laptopUp`
    background: none;
    padding: 10px;
    font-size: 33px;

    &::before,
    &::after {
      color: transparent;
      transition: color 0.2s;
    }
    &::before {
      content: "⤷ ";
    }
    &::after {
      content: " ⤶";
    }
    &:hover::before,
    &:hover::after {
      color: #333;
    }
  `}
`;

const SplashContentContainer = styled.div`
  z-index: 11;
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  ${tabletUp`
    padding: 12px;
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
  font-size: 20px;
  letter-spacing: 10px;
  ${tabletUp`
    font-size: 40px;
    letter-spacing: 20px;
  `}
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
  padding: 0 12px;
  max-width: 800px;
  ${laptopUp`
    padding: 40px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

const InSceneryImg = styled.img`
  width: 320px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  ${tabletUp`
    border: 4px solid rgba(100, 100, 100, 0.5);
    box-shadow: rgba(0, 0, 0, 0.5) 2px 0px 4px 1px;
  `}
`;

const InSceneryDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-transform: uppercase;
    filter: blur(0.5px);
    text-align: center;
    font-size: 24px;
    letter-spacing: 4px;
    ${laptopUp`
      font-size: 36px;
      letter-spacing: 12px;
    `}
  }
  ${laptopUp`
    width: 800px;
  `}
`;

const InSceneryStreamingLinks = styled.div`
  padding: 0 12px 20px;
  ${tabletUp`
    width: 86%;
    & > * {
      padding: 0 16px;
    }
  `}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Splash: FunctionComponent = () => {
  return (
    <SplashContainer>
      <MediaQuery minWidth={BREAKPOINTS.tabletMin}>
        <ProjectionsImg src={projectionsBandUrl} />
      </MediaQuery>
      <EnterSiteButton>Enter Site</EnterSiteButton>
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
            <InSceneryStreamingLinks>
              <StreamingSiteLink
                name="Spotify"
                imageSrc={spotifyIcon}
                linkTo="google.ca"
              />
              <StreamingSiteLink
                name="Apple Music"
                imageSrc={appleMusicIcon}
                linkTo="google.ca"
              />
              <StreamingSiteLink
                name="iTunes"
                imageSrc={itunesIcon}
                linkTo="google.ca"
              />
              <StreamingSiteLink
                name="Google Play"
                imageSrc={googlePlayIcon}
                linkTo="google.ca"
              />
            </InSceneryStreamingLinks>
          </InSceneryDescription>
        </AlbumFeatureContainer>
      </SplashContentContainer>
    </SplashContainer>
  );
};

interface IStreamingSiteLinkProps {
  name: string;
  linkTo: string;
  imageSrc: string;
}

const StreamingSiteLinkAnchor = styled.a`
  ${laptopUp`
    opacity: 0.6;
    transition: opacity 0.15s;
    &:hover {
      opacity: 1;
    }
  `}
`;
const StreamingSiteLinkImg = styled.img`
  width: 52px;
`;

const StreamingSiteLink: FunctionComponent<IStreamingSiteLinkProps> = ({
  name,
  linkTo,
  imageSrc
}) => (
  <StreamingSiteLinkAnchor href={linkTo}>
    <StreamingSiteLinkImg src={imageSrc} alt={name} />
  </StreamingSiteLinkAnchor>
);

export default Splash;
