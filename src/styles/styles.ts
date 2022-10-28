import { DefaultTheme, createGlobalStyle } from "styled-components";
export const ourTheme: DefaultTheme = {
  bgColor: "#ffc090",
  titleColor: "#fea82f",
  fontColor: "",
};
export const GlobalStyle = createGlobalStyle`
    * {
         margin: 0;
        box-sizing: border-box;
      }
`;
