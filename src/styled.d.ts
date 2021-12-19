import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    cardColor: string;
    accentColor: string;
    positiveColor: string;
    negativeColor: string;
    priceCardColor: string;
  }
}
