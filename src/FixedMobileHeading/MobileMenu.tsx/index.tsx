import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FIXED_MOBILE_HEADING_HEIGHT } from "../constants";

const MobileMenuContainer = styled.nav<{ open: boolean }>`
  position: fixed;
  top: ${FIXED_MOBILE_HEADING_HEIGHT}px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: black;
  visibility: ${props => (props.open ? "visible" : "hidden")};
  z-index: 1;
  transition: opacity 0.4s;
  opacity: ${props => (props.open ? 1 : 0)};
`;

interface IMobileMenuProps {
  open: boolean;
}

const MobileMenu: FunctionComponent<IMobileMenuProps> = ({ open }) => {
  return <MobileMenuContainer open={open}>Menu!</MobileMenuContainer>;
};

export default MobileMenu;
