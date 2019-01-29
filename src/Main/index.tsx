import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import inSceneryCoverUrl from "./in_scenery_cover.jpg";
import { laptopUp, tabletUp, desktopUp } from "../media-queries";
import appleMusicIcon from "./stream-platform-images/applemusic.png";
import googlePlayIcon from "./stream-platform-images/googleplay.png";
import itunesIcon from "./stream-platform-images/itunes.png";
import spotifyIcon from "./stream-platform-images/spotify.png";

const ContentContainer = styled.div<{ adjustForSplash: boolean }>`
  z-index: 11;
  position: absolute;
  left: 0;
  right: 0;
  transition: all 1.6s cubic-bezier(0.64, -0.24, 0.54, 0.88);
  top: 0;
  padding: 0;
  ${props =>
    props.adjustForSplash &&
    `
    top: 40px;
    ${tabletUp`
      padding: 12px;
      top: 36vh;
    `}
    ${laptopUp`
      top: 40vh;
    `}
  `}
`;

const MainHeading = styled.h1<{ adjustForSplash: boolean }>`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  ${props => {
    if (props.adjustForSplash) {
      return css`
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
      `;
    } else {
      return css`
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
      `;
    }
  }}
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
  padding-bottom: 20px;
  & a {
    padding: 0 10px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface IMainProps {
  splashOpen: boolean;
}

const Main: FunctionComponent<IMainProps> = ({ splashOpen }) => {
  return (
    <ContentContainer adjustForSplash={splashOpen}>
      <MainHeading adjustForSplash={splashOpen}>Lost Cousins</MainHeading>
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
    </ContentContainer>
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

export default Main;
