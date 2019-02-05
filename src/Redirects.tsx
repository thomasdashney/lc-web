import { FunctionComponent, useEffect, ReactElement } from "react";
import { withRouter, RouteComponentProps } from "react-router";

const REDIRECT_MAP: { [from: string]: string } = {
  "/tour": "https://www.songkick.com/artists/8158333-lost-cousins/calendar"
};

const REDIRECT_FROM_PATHS = Object.keys(REDIRECT_MAP);

const Redirects: FunctionComponent<
  RouteComponentProps & { children: ReactElement<any> }
> = ({ children, location: { pathname } }) => {
  const shouldRedirect = REDIRECT_FROM_PATHS.some(from =>
    pathname.startsWith(from)
  );

  useEffect(() => {
    if (shouldRedirect) {
      window.location.replace(REDIRECT_MAP[pathname]);
    }
  });

  return shouldRedirect ? null : children;
};

export default withRouter(Redirects);
