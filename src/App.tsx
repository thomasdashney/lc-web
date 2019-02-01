import React, { FunctionComponent, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import flowerBgUrl from "./flower-bg/flower_bg.jpg";
import flowerBg10Url from "./flower-bg/flower_bg@0,1x.jpg";
import flowerBg25Url from "./flower-bg/flower_bg@0,25x.jpg";
import flowerBg50Url from "./flower-bg/flower_bg@0,5x.jpg";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { BREAKPOINTS, mediaQuery } from "./media-queries";
import SplashHeading from "./SplashHeading";
import Main from "./Main";
import { database } from "./firebase";
import { ITourListings } from "./pages/Shows";

const AppContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FlowerBackground = styled.div<{ trippy: boolean }>`
  position: fixed;
  ${mediaQuery({ max: 661 })`
    background-image: url(${flowerBg10Url});
  `}
  ${mediaQuery({ min: 662, max: 1640 })`
    background-image: url(${flowerBg25Url});
  `}
  ${mediaQuery({ min: 1640, max: 3276 })`
    background-image: url(${flowerBg50Url});
  `}
  ${mediaQuery({ min: 3277 })`
    background-image: url(${flowerBgUrl});
  `}
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

  ${props => props.trippy && "animation: rotateHueBlur 24s alternate infinite;"}
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
  const [tourListings, setTourListings] = useState<null | ITourListings>(null);
  useEffect(() => {
    const listingsRef = database.ref("tour_listings");
    listingsRef.on("value", snapshot => {
      if (snapshot) {
        setTourListings(snapshot.val());
      }
    });

    return function cleanup() {
      listingsRef.off();
    };
  }, []);

  return (
    <Router>
      <AppContainer>
        <Route path="/" exact>
          {({ match, history }) => {
            const showSplash = !!match;
            return (
              <>
                {showSplash && (
                  <MediaQuery maxWidth={BREAKPOINTS.mobileMax}>
                    {/* Don't show splash on mobile */}
                    <Redirect from="/" to="/music" />
                  </MediaQuery>
                )}
                <FlowerBackground trippy={!showSplash} />
                <SplashHeading
                  show={showSplash}
                  onEnterSitePress={() => history.push("/music")}
                />
                <Main splashOpen={showSplash} tourListings={tourListings} />
              </>
            );
          }}
        </Route>
      </AppContainer>
    </Router>
  );
};

export default App;
