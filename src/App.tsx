import React, { FunctionComponent } from "react";
import flowerBgUrl from "./flower_bg.jpg";
import styled from "styled-components";
import LargeScreenHeading from "./LargeScreenHeading";
import FixedMobileHeading from "./FixedMobileHeading";
import MediaQuery from "react-responsive";
import { BREAKPOINTS } from "./media-queries";
import { FIXED_MOBILE_HEADING_HEIGHT } from "./FixedMobileHeading/constants";
import Splash from "./Splash";

const AppContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FlowerBackground = styled.div`
  position: fixed;
  background-image: url(${flowerBgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -2;

  &::after {
    position: fixed;
    height: 100vh;
    width: 100vw;
    content: "";
    background-color: black;
    z-index: -1;
    opacity: 0.7;
  }

  transform: scale(1.1);
  /* animation: rotateHueBlur 24s alternate infinite; */

  @keyframes rotateHueBlur {
    0% {
      filter: hue-rotate(40deg) blur(0.4px) brightness(80%);
    }
    20% {
      filter: hue-rotate(0deg) blur(0.8px) brightness(100%);
    }
    50% {
      filter: hue-rotate(-70deg) blur(1.8px) brightness(120%);
    }
    80% {
      filter: hue-rotate(0deg) blur(0.8px) brightness(100%);
    }
    100% {
      filter: hue-rotate(40deg) blur(0.4px) brightness(80%);
    }
  }
`;

const App: FunctionComponent = () => {
  return (
    <AppContainer>
      <FlowerBackground />
      <Splash />
      {/* <MediaQuery maxWidth={BREAKPOINTS.tabletMax}>
        {isMobile => {
          if (isMobile) {
            return (
              <>
                <FixedMobileHeading />
                <div
                  style={{
                    top: `${FIXED_MOBILE_HEADING_HEIGHT}px`,
                    position: "relative"
                  }}
                >
                  <div style={{ fontSize: "40px" }}>Content</div>
                  <br />
                </div>
              </>
            );
          }

          return (
            <>
              <LargeScreenHeading />
            </>
          );
        }}
      </MediaQuery> */}
    </AppContainer>
  );
};

export default App;
