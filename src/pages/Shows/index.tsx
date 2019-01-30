import React, { FunctionComponent } from "react";

export interface ITourListings {}

interface IShowsProps {
  tourListings: null | ITourListings;
}

const Shows: FunctionComponent<IShowsProps> = ({ tourListings }) => {
  if (!tourListings) {
    return null;
  }

  return null;
};

export default Shows;
