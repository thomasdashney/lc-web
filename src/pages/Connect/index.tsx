import React, { FunctionComponent } from "react";
import styled from "styled-components";
import fbCLR from "./social-icons/fbCLR.png";
import igCLR from "./social-icons/igCLR.png";
import twitterCLR from "./social-icons/twitterCLR.png";
import ytCLR from "./social-icons/ytCLR.png";
import applemusic from "./streaming-icons/applemusic.png";
import googleplayCLR from "./streaming-icons/googleplayCLR.png";
import itunesCLR from "./streaming-icons/itunesCLR.png";
import spotifyCLR from "./streaming-icons/spotifyCLR.png";
import deezer from "./streaming-icons/deezer.png";
import { tabletUp, laptopUp } from "../../media-queries";

const ConnectContainer = styled.div`
  margin: 0 auto 40px;
  width: 100%;
  max-width: 740px;
`;

const ConnectLinks = styled.div`
  width: 100%;
  ${tabletUp`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `}
`;

const ConnectSubheading = styled.h2`
  font-size: 20px;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

const ConnectLinksSection = styled.div`
  text-align: center;
  width: 100%;
  ${tabletUp`
  width: 340px;
  `}
`;

const ConnectLinksGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  & a {
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
  & img {
    cursor: pointer;
    height: 50px;
  }
`;

const ConnectContactsGroup = styled.div`
  width: 100%;
  margin-left: 40px;
  margin-top: 60px;
  opacity: 0.8;

  table,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  ${tabletUp`
    table {
      letter-spacing: 4px;
    }
  `}

  ${laptopUp`
    table {
      display: table;
    }
    tbody {
      display: table-row-group;
    }
    tr {
      display: table-row;
    }
    td {
      display: table-cell;
    }
  `}

  table {
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;
    & td:first-child {
    }
    & td:not(:first-child) {
      margin-left: 40px;
    }
    & a {
      color: white;
      text-transform: lowercase;
    }
  }
`;

const Connect: FunctionComponent = () => (
  <ConnectContainer>
    <ConnectLinks>
      <ConnectLinksSection>
        <ConnectSubheading>Social Media</ConnectSubheading>
        <ConnectLinksGroup>
          <a target="_blank" href="https://instagram.com/lostcousinsband">
            <img alt="Instagram" src={igCLR} />
          </a>
          <a target="_blank" href="https://facebook.com/lostcousinsband">
            <img alt="Facebook" src={fbCLR} />
          </a>
          <a target="_blank" href="https://twitter.com/lostcousinsband">
            <img alt="Twitter" src={twitterCLR} />
          </a>
          <a target="_blank" href="https://youtube.com/lostcousinsband">
            <img alt="YouTube" src={ytCLR} />
          </a>
        </ConnectLinksGroup>
      </ConnectLinksSection>
      <ConnectLinksSection>
        <ConnectSubheading>Streaming</ConnectSubheading>
        <ConnectLinksGroup>
          <a
            target="_blank"
            href="https://itunes.apple.com/ca/artist/lost-cousins/1022847502"
          >
            <img alt="Apple Music" src={applemusic} />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/music/artist/Lost_Cousins?id=Aqsswaxdhpkmhdwlr3n2b62mige"
          >
            <img alt="Google Play" src={googleplayCLR} />
          </a>
          <a
            target="_blank"
            href="https://itunes.apple.com/ca/artist/lost-cousins/1022847502"
          >
            <img alt="iTunes" src={itunesCLR} />
          </a>
          <a
            target="_blank"
            href="https://open.spotify.com/artist/2yZQbeFIRhUpRehbauidnq?si=W8yFVyGUS_CTpBcfo1EJHA"
          >
            <img alt="Spotify" src={spotifyCLR} />
          </a>
          <a target="_blank" href="https://www.deezer.com/en/artist/8564840">
            <img alt="Deezer" src={deezer} />
          </a>
        </ConnectLinksGroup>
      </ConnectLinksSection>
    </ConnectLinks>
    <ConnectContactsGroup>
      <ConnectSubheading>Booking</ConnectSubheading>
      <table>
        <tbody>
          <tr>
            <td>Rob Thornton (CA/US)</td>
            <td>
              <a href="mailto:rob@paquinartistsagency.com">
                rob@paquinartistsagency.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Grant Paley (CA/US)</td>
            <td>
              <a href="mailto:grant@paquinartistsagency.com">
                grant@paquinartistsagency.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Kai Lehmann (World Excluding NA)</td>
            <td>
              <a href="mailto:kai.lehmann@cabinartists.com">
                kai.lehmann@cabinartists.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </ConnectContactsGroup>
    <ConnectContactsGroup>
      <ConnectSubheading>Press</ConnectSubheading>
      <table>
        <tbody>
          <tr>
            <td>Erin Carroll (CA)</td>
            <td>
              <a href="mailto:erin.carroll@cadencemusicgroup.com">
                erin.carroll@cadencemusicgroup.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Jeff Kilgour (US)</td>
            <td>
              <a href="mailto:jeff@thesyn.com">jeff@thesyn.com</a>
            </td>
          </tr>
        </tbody>
      </table>
    </ConnectContactsGroup>
    <ConnectContactsGroup>
      <ConnectSubheading>The Band</ConnectSubheading>
      <table>
        <tbody>
          <tr>
            <td>
              <a target="_blank" href="mailto:lostcousinsband@gmail.com">
                lostcousinsband@gmail.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </ConnectContactsGroup>
  </ConnectContainer>
);

export default Connect;
