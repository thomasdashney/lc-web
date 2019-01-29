import { css, CSSObject, SimpleInterpolation } from "styled-components";

export const BREAKPOINTS = {
  mobileMax: 480,
  tabletMin: 481,
  tabletMax: 768,
  laptopMin: 769,
  desktopMin: 1024,
  desktopMax: 1025
};

export const mobileOnly = mediaQuery({
  max: BREAKPOINTS.mobileMax
});

export const tabletUp = mediaQuery({
  min: BREAKPOINTS.tabletMin
});

export const tabletOnly = mediaQuery({
  min: BREAKPOINTS.tabletMin,
  max: BREAKPOINTS.tabletMax
});

export const laptopUp = mediaQuery({
  min: BREAKPOINTS.laptopMin
});

export const desktopUp = mediaQuery({
  min: BREAKPOINTS.desktopMin + 1
});

export function mediaQuery({ min, max }: { min?: number; max?: number }) {
  const queries: string[] = ["screen"];

  if (min) {
    queries.push(`(min-width: ${min}px)`);
  }

  if (max) {
    queries.push(`(max-width: ${max}px)`);
  }

  return (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => {
    const result = css`
      @media ${queries.join(" and ")} {
        ${css(first, ...interpolations)}
      }
    `;

    return result;
  };
}
