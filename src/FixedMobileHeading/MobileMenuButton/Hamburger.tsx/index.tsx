import React, { FunctionComponent } from "react";

interface IHamburgerProps {
  active: boolean;
  type: IHamburgerType;
}

type IHamburgerType =
  | "3dx"
  | "3dx-r"
  | "3dy"
  | "3dy-r"
  | "3dxy"
  | "3dxy-r"
  | "arrow"
  | "arrow-r"
  | "arrowalt"
  | "arrowalt-r"
  | "arrowturn"
  | "arrowturn-r"
  | "boring"
  | "collapse"
  | "collapse-r"
  | "elastic"
  | "elastic-r"
  | "emphatic"
  | "emphatic-r"
  | "minus"
  | "slider"
  | "slider-r"
  | "spin"
  | "spin-r"
  | "spring"
  | "spring-r"
  | "stand"
  | "stand-r"
  | "squeeze"
  | "vortex"
  | "vortex-r";

const Hamburger: FunctionComponent<IHamburgerProps> = ({
  active,
  type,
  ...props
}) => {
  return (
    <div
      className={`hamburger hamburger--${type}${active ? " is-active" : ""}`}
      {...props}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
};

export default Hamburger;
