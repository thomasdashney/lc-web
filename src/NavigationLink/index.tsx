import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface INavigationLinkProps {
  to: string;
  children: string;
  external?: boolean;
  onClick?: () => void;
}

const NavigationLink: FunctionComponent<INavigationLinkProps> = ({
  external,
  to,
  children,
  onClick
}) => {
  if (external) {
    return (
      <a href={to} target="_blank">
        {children}
      </a>
    );
  }

  return (
    <NavLink to={to} onClick={onClick}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
