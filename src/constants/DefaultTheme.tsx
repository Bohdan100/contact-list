import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      accentPrimary: string;
      accentSecondary: string;
      accentHover: string;
      transparent: string;
      darkgrey: string;
    };
    transitions: {
      slower: string;
      faster: string;
    };
    fontWeights: {
      bold: string;
    };
  }
}
