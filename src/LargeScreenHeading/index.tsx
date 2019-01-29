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
  margin-bottom: 8px;
  margin-top: 44px;
  font-size: 52px;
  letter-spacing: 20px;
`;

const LargeScreenHeading: FunctionComponent = () => (
  <>
    <HeadingContainer>
      {/* <MainHeading>Lost Cousins</MainHeading> */}
    </HeadingContainer>
  </>
);

export default LargeScreenHeading;
