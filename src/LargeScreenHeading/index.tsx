import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { tabletUp, laptopUp, BREAKPOINTS } from "../media-queries";

const HeadingContainer = styled.header`
  width: 100%;
`;

const MainHeading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;

  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 34px;
  letter-spacing: 10px;

  &::first-letter {
  }

  /* second-letter */

  ${tabletUp`
    margin-top: 30px;
    font-size: 36px;
    letter-spacing: 16px;
  `}

  ${laptopUp`
    margin-top: 44px;
    font-size: 52px;
    letter-spacing: 20px;
  `}
`;

const LargeScreenHeading: FunctionComponent = () => (
  <>
    <HeadingContainer>
      <MainHeading>Lost Cousins</MainHeading>
    </HeadingContainer>
  </>
);

export default LargeScreenHeading;
