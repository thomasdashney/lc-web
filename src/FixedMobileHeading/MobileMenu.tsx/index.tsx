import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FIXED_MOBILE_HEADING_HEIGHT } from "../constants";
import NavigationLink from "../../NavigationLink";
import { MENU_ITEMS } from "../../menu";

const MobileMenuContainer = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-top: ${FIXED_MOBILE_HEADING_HEIGHT}px;
  background-color: black;
  visibility: ${props => (props.open ? "visible" : "hidden")};
  z-index: 20;
  transition: all 0.4s;
  opacity: ${props => (props.open ? 1 : 0)};
  overflow: scroll;
`;

const MobileMenuNavigationList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;

  li:not(:last-child) {
    margin-bottom: 20px;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
`;

interface IMobileMenuProps {
  open: boolean;
  onClickLink: () => void;
}

const MobileMenu: FunctionComponent<IMobileMenuProps> = ({
  open,
  onClickLink
}) => {
  return (
    <MobileMenuContainer open={open}>
      <MobileMenuNavigationList>
        {MENU_ITEMS.map(menuItem => (
          <li key={menuItem.to}>
            <NavigationLink
              to={menuItem.to}
              external={menuItem.external}
              onClick={onClickLink}
            >
              {menuItem.name}
            </NavigationLink>
          </li>
        ))}
      </MobileMenuNavigationList>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
