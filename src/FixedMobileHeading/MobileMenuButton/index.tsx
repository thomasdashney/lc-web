import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger.tsx";

const MobileMenuButtonContainer = styled.button`
  background: none;
  border: none;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  outline: none;
  padding: 0 12px;
  height: 100%;

  &:hover span,
  &:hover {
    opacity: 0.7;
    transition: hover 0.3s;
  }
`;

interface IMobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

const MobileMenuButton: FunctionComponent<IMobileMenuButtonProps> = ({
  open,
  onClick
}) => {
  return (
    <MobileMenuButtonContainer type="button" onClick={() => onClick()}>
      <Hamburger active={open} type="slider" /> <span>Menu</span>
    </MobileMenuButtonContainer>
  );
};

export default MobileMenuButton;
