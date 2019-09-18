import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { laptopUp, tabletUp } from "../../media-queries";
import appleMusicIcon from "./stream-platform-images/applemusic.png";
import itunesIcon from "./stream-platform-images/itunes.png";
import spotifyIcon from "./stream-platform-images/spotify.png";
import deezerIcon from "./stream-platform-images/deezer.png";
import stayCoverUrl from "./stay_cover.jpg";

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

const ReleaseImg = styled.img`
  width: 320px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  ${tabletUp`
  border: 4px solid rgba(100, 100, 100, 0.5);
  box-shadow: rgba(0, 0, 0, 0.5) 2px 0px 4px 1px;
`}
`;

const ReleaseDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-transform: uppercase;
    text-align: center;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
    font-size: 22px;
    letter-spacing: 4px;
    ${laptopUp`
    font-size: 40px;
    letter-spacing: 6px;
    margin-bottom: 44px;
    line-height: 40px;
    small {
      font-size: 19px;
      letter-spacing: 2px;
    }
  `}
  }
  ${laptopUp`
    width: 800px;
  `}

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const ReleaseStreamingLinks = styled.div`
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
    <ReleaseImg src={stayCoverUrl} />
    <ReleaseDescription>
      <a href="https://ffm.to/lostcousins-stay">
        <h2>
          - Stay -<br />
          <small>Mystery Jets Remix Out Now</small>
        </h2>
      </a>
      <ReleaseStreamingLinks>
        <StreamingSiteLink
          name="Spotify"
          imageSrc={spotifyIcon}
          linkTo="https://open.spotify.com/album/5rcT8BRnmLxY0ZfODJBgdG"
        />
        <StreamingSiteLink
          name="Apple Music"
          imageSrc={appleMusicIcon}
          linkTo="https://api.ffm.to/sl/e/c/lostcousins-stay?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzUpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ni4wLjM4MDkuMTMyIFNhZmFyaS81MzcuMzYiLCJicm93c2VyIjp7Im5hbWUiOiJDaHJvbWUiLCJ2ZXJzaW9uIjoiNzYuMC4zODA5LjEzMiIsIm1ham9yIjoiNzYifSwiZW5naW5lIjp7Im5hbWUiOiJXZWJLaXQiLCJ2ZXJzaW9uIjoiNTM3LjM2In0sIm9zIjp7Im5hbWUiOiJNYWMgT1MiLCJ2ZXJzaW9uIjoiMTAuMTQuNSJ9LCJkZXZpY2UiOnt9LCJjcHUiOnt9fSwiY2xpZW50Ijp7InJpZCI6ImNlOTNlZmZjLTZjZGUtNDQyNC04MjI3LTVkYTE3MmU5MjQ4MCIsInNpZCI6ImJmNzAzZjMxLWY2YjYtNGI1ZS1hMDFhLTVmNmMzNGUyY2EwNiIsImlwIjoiNjIuMjE0LjE5MS4yMCIsInJlZiI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8iLCJob3N0IjoiZmZtLnRvIiwibGFuZyI6ImVuLVVTIn0sImlzRnJvbUVVIjp0cnVlLCJjb3VudHJ5Q29kZSI6IkRFIiwiaWQiOiI1ZDY1N2JjNjQ4MDAwMGRiNTBjZjhiNzUiLCJ0em8iOjI0MCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9nZW8uaXR1bmVzLmFwcGxlLmNvbS9kZS9hbGJ1bS9zdGF5LWFsdGVybmF0ZS1taXhlcy1zaW5nbGUvMTQ3ODE5NDc3OT91bz00JmFwcD1tdXNpYyZhdD0xMDAwbElYZCIsInZpZCI6ImNkN2FiNWZlLTk5YjQtNGNmZC1iOTgwLWQ1ZmExZTFlNDliNCIsInNydmMiOiJhcHBsZSIsInByb2R1Y3QiOiJzbWFydGxpbmsiLCJzaG9ydElkIjoibG9zdGNvdXNpbnMtc3RheSIsImlzQXV0aG9yaXphdGlvblJlcXVpcmVkIjpmYWxzZX0="
        />
        <StreamingSiteLink
          name="iTunes"
          imageSrc={itunesIcon}
          linkTo="https://api.ffm.to/sl/e/c/lostcousins-stay?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzUpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ni4wLjM4MDkuMTMyIFNhZmFyaS81MzcuMzYiLCJicm93c2VyIjp7Im5hbWUiOiJDaHJvbWUiLCJ2ZXJzaW9uIjoiNzYuMC4zODA5LjEzMiIsIm1ham9yIjoiNzYifSwiZW5naW5lIjp7Im5hbWUiOiJXZWJLaXQiLCJ2ZXJzaW9uIjoiNTM3LjM2In0sIm9zIjp7Im5hbWUiOiJNYWMgT1MiLCJ2ZXJzaW9uIjoiMTAuMTQuNSJ9LCJkZXZpY2UiOnt9LCJjcHUiOnt9fSwiY2xpZW50Ijp7InJpZCI6ImNlOTNlZmZjLTZjZGUtNDQyNC04MjI3LTVkYTE3MmU5MjQ4MCIsInNpZCI6ImJmNzAzZjMxLWY2YjYtNGI1ZS1hMDFhLTVmNmMzNGUyY2EwNiIsImlwIjoiNjIuMjE0LjE5MS4yMCIsInJlZiI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8iLCJob3N0IjoiZmZtLnRvIiwibGFuZyI6ImVuLVVTIn0sImlzRnJvbUVVIjp0cnVlLCJjb3VudHJ5Q29kZSI6IkRFIiwiaWQiOiI1ZDY1N2JjNjQ4MDAwMGRiNTBjZjhiNzUiLCJ0em8iOjI0MCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9nZW8uaXR1bmVzLmFwcGxlLmNvbS9kZS9hbGJ1bS9zdGF5LWFsdGVybmF0ZS1taXhlcy1zaW5nbGUvMTQ3ODE5NDc3OT91bz00JmFwcD1pdHVuZXMmYXQ9MTAwMGxJWGQiLCJ2aWQiOiJjZDdhYjVmZS05OWI0LTRjZmQtYjk4MC1kNWZhMWUxZTQ5YjQiLCJzcnZjIjoiaXR1bmVzIiwicHJvZHVjdCI6InNtYXJ0bGluayIsInNob3J0SWQiOiJsb3N0Y291c2lucy1zdGF5IiwiaXNBdXRob3JpemF0aW9uUmVxdWlyZWQiOmZhbHNlfQ=="
        />
        <StreamingSiteLink
          name="Deezer"
          imageSrc={deezerIcon}
          linkTo="https://api.ffm.to/sl/e/c/lostcousins-stay?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzUpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ni4wLjM4MDkuMTMyIFNhZmFyaS81MzcuMzYiLCJicm93c2VyIjp7Im5hbWUiOiJDaHJvbWUiLCJ2ZXJzaW9uIjoiNzYuMC4zODA5LjEzMiIsIm1ham9yIjoiNzYifSwiZW5naW5lIjp7Im5hbWUiOiJXZWJLaXQiLCJ2ZXJzaW9uIjoiNTM3LjM2In0sIm9zIjp7Im5hbWUiOiJNYWMgT1MiLCJ2ZXJzaW9uIjoiMTAuMTQuNSJ9LCJkZXZpY2UiOnt9LCJjcHUiOnt9fSwiY2xpZW50Ijp7InJpZCI6ImNlOTNlZmZjLTZjZGUtNDQyNC04MjI3LTVkYTE3MmU5MjQ4MCIsInNpZCI6ImJmNzAzZjMxLWY2YjYtNGI1ZS1hMDFhLTVmNmMzNGUyY2EwNiIsImlwIjoiNjIuMjE0LjE5MS4yMCIsInJlZiI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8iLCJob3N0IjoiZmZtLnRvIiwibGFuZyI6ImVuLVVTIn0sImlzRnJvbUVVIjp0cnVlLCJjb3VudHJ5Q29kZSI6IkRFIiwiaWQiOiI1ZDY1N2JjNjQ4MDAwMGRiNTBjZjhiNzUiLCJ0em8iOjI0MCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly93d3cuZGVlemVyLmNvbS9hbGJ1bS8xMDkxNTc1NDIiLCJ2aWQiOiJjZDdhYjVmZS05OWI0LTRjZmQtYjk4MC1kNWZhMWUxZTQ5YjQiLCJzcnZjIjoiZGVlemVyIiwicHJvZHVjdCI6InNtYXJ0bGluayIsInNob3J0SWQiOiJsb3N0Y291c2lucy1zdGF5IiwiaXNBdXRob3JpemF0aW9uUmVxdWlyZWQiOmZhbHNlfQ=="
        />
      </ReleaseStreamingLinks>
    </ReleaseDescription>
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
