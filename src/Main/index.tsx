import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { laptopUp, tabletUp, desktopUp, BREAKPOINTS } from "../media-queries";
import Navigation from "./Navigation";
import MediaQuery from "react-responsive";
import FixedMobileHeading from "../FixedMobileHeading";
import { FIXED_MOBILE_HEADING_HEIGHT } from "../FixedMobileHeading/constants";
import { Route } from "react-router";
import Music from "../pages/Music";
import Shows, { ITourListings } from "../pages/Shows";
import Connect from "../pages/Connect";

const ContentContainer = styled.div<{ splashOpen: boolean }>`
  z-index: 11;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  ${props =>
    props.splashOpen
      ? css`
          top: 40px;
          ${tabletUp`
            top: 36vh;
          `}
          ${laptopUp`
            top: 40vh;
          `}
        `
      : `transition: all 2s; top: ${FIXED_MOBILE_HEADING_HEIGHT}px;`};
`;

const MainHeading = styled.h1<{ splashOpen: boolean }>`
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 4px;
  display: none;
  ${laptopUp`
    display: block;
  `}
  ${props => {
    if (props.splashOpen) {
      return css`
        font-size: 20px;
        letter-spacing: 10px;
        ${tabletUp`
          display: block;
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
`;

interface IMainProps {
  splashOpen: boolean;
  tourListings: null | ITourListings;
}

const Main: FunctionComponent<IMainProps> = ({ splashOpen, tourListings }) => {
  return (
    <>
      {!splashOpen && (
        <MediaQuery maxWidth={BREAKPOINTS.tabletMax}>
          <FixedMobileHeading />
        </MediaQuery>
      )}
      <ContentContainer splashOpen={splashOpen}>
        <MediaQuery minWidth={BREAKPOINTS.tabletMin}>
          <MainHeading splashOpen={splashOpen}>Lost Cousins</MainHeading>
        </MediaQuery>
        <MediaQuery minWidth={BREAKPOINTS.laptopMin}>
          <Navigation show={!splashOpen} />
        </MediaQuery>
        <Route path="/(|music)" component={Music} />
        <Route path="/connect" component={Connect} />
        <Route
          path="/shows"
          render={() => <Shows tourListings={tourListings} />}
        />
      </ContentContainer>
    </>
  );
};

export default Main;
