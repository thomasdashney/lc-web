import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu.tsx";
import { FIXED_MOBILE_HEADING_HEIGHT } from "./constants";

const FixedMobileHeadingContainer = styled.div`
  position: fixed;
  height: ${FIXED_MOBILE_HEADING_HEIGHT}px;
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
`;

const FixedMobileHeading: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FixedMobileHeadingContainer>
        <MobileMenuButton
          open={menuOpen}
          onClick={() => setMenuOpen(prevOpen => !prevOpen)}
        />
      </FixedMobileHeadingContainer>
      <MobileMenu open={menuOpen} />
    </>
  );
};

export default FixedMobileHeading;
