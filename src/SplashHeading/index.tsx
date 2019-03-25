import React, { FunctionComponent } from "react";
import styled from "styled-components";
import bandProjectionsSm from "./band_projections/band_projections_sm.png";
import bandProjectionsLg from "./band_projections/band_projections_lg.png";
import bandProjectionsXl from "./band_projections/band_projections_xl.png";
import { laptopUp, tabletUp, BREAKPOINTS } from "../media-queries";
import MediaQuery from "react-responsive";

const SplashHeadingContainer = styled.header<{ show: boolean }>`
  position: relative;
  opacity: 0;
  visibility: hidden;
  transition: all 2s;
  ${props => props.show && "opacity: 1; visibility: visible;"}
`;

const ProjectionsImg = styled.img<{ show: boolean }>`
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
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);

  display: none;
  ${tabletUp`
    font-size: 26px;
    color: #333;
    display: block;
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

interface ISplashHeadingProps {
  show: boolean;
  onEnterSitePress: () => void;
}

const SplashHeading: FunctionComponent<ISplashHeadingProps> = ({
  show,
  onEnterSitePress
}) => {
  return (
    <SplashHeadingContainer show={show}>
      <MediaQuery minWidth={BREAKPOINTS.tabletMin} maxWidth={795}>
        <ProjectionsImg show={show} src={bandProjectionsSm} />
      </MediaQuery>
      <MediaQuery minWidth={796} maxWidth={1501}>
        <ProjectionsImg show={show} src={bandProjectionsLg} />
      </MediaQuery>
      <MediaQuery minWidth={1502}>
        <ProjectionsImg show={show} src={bandProjectionsXl} />
      </MediaQuery>
      {show && (
        <EnterSiteButton onClick={() => onEnterSitePress()}>
          Enter Site
        </EnterSiteButton>
      )}
    </SplashHeadingContainer>
  );
};

export default SplashHeading;
