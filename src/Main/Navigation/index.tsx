import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MENU_ITEMS } from "../../menu";
import NavigationLink from "../../NavigationLink";

const NavigationItemList = styled.ul<{ show: boolean }>`
  transition: all 2s;
  visibility: hidden;
  opacity: 0;
  ${props =>
    props.show &&
    `
    height: initial;
    visibility: visible;
    opacity: 1;
  `}
  width: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 6px;
  & > li {
    border: 3px double transparent;
    &:nth-child(odd) {
      border-bottom-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(even) {
      border-top-color: rgba(255, 255, 255, 0.3);
    }
  }
  a {
    display: block;
    padding: 4px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    filter: blur(0.5px);

    transition: all 0.1s;
    opacity: 0.7;
    &:hover,
    &.active {
      opacity: 1;
    }
  }
`;

interface INavigationProps {
  show: boolean;
}

const Navigation: FunctionComponent<INavigationProps> = ({ show }) => {
  return (
    <NavigationItemList show={show}>
      {MENU_ITEMS.map(menuItem => (
        <li key={menuItem.to}>
          <NavigationLink to={menuItem.to} external={menuItem.external}>
            {menuItem.name}
          </NavigationLink>
        </li>
      ))}
    </NavigationItemList>
  );
};

export default Navigation;
