import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { laptopUp, tabletUp } from "../../media-queries";
import appleMusicIcon from "./stream-platform-images/applemusic.png";
import googlePlayIcon from "./stream-platform-images/googleplay.png";
import itunesIcon from "./stream-platform-images/itunes.png";
import spotifyIcon from "./stream-platform-images/spotify.png";
import deezerIcon from "./stream-platform-images/deezer.png";
import inSceneryCoverUrl from "./in_scenery_cover.jpg";

const HomeContainer = styled.div`
  margin: 20px auto 0;
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
    ${laptopUp`
    filter: blur(0.5px);
  `}
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

const Music: FunctionComponent = () => (
  <HomeContainer>
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
          linkTo="https://open.spotify.com/album/4SzI1SV56ZfL5uD7E7JK0J?si=HSkhpKyOTsyXl2RaWObYmQ"
        />
        <StreamingSiteLink
          name="Apple Music"
          imageSrc={appleMusicIcon}
          linkTo="https://itunes.apple.com/us/album/in-scenery/1448575451"
        />
        <StreamingSiteLink
          name="iTunes"
          imageSrc={itunesIcon}
          linkTo="https://itunes.apple.com/us/album/in-scenery/1448575451"
        />
        <StreamingSiteLink
          name="Google Play"
          imageSrc={googlePlayIcon}
          linkTo="https://play.google.com/store/music/album/Lost_Cousins_In_Scenery?id=B3rgejlhmrujk2kjveapledzqme"
        />
        <StreamingSiteLink
          name="Deezer"
          imageSrc={deezerIcon}
          linkTo="https://www.deezer.com/en/artist/8564840"
        />
      </InSceneryStreamingLinks>
    </InSceneryDescription>
  </HomeContainer>
);

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

export default Music;
