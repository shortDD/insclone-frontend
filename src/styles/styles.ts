import { DefaultTheme, createGlobalStyle } from "styled-components";
export const SummerTheme: DefaultTheme = {
  bgColor: "#ffc090",
  boxColor: "#f7f6dc",
  boxBorderColor: "#67646445",
  titleColor: "#fea82f",
  titleHoverColor: "#ffc090",
  inputBgColor: "#eeeeee",
  inputHoverColor: "#c2ded1",
};
export const WhiteTheme: DefaultTheme = {
  bgColor: "#FAF7F0",
  boxColor: "#F9F9F9",
  boxBorderColor: "#67646445",
  titleColor: "#9CB4CC",
  titleHoverColor: "#748DA6",
  inputBgColor: "#eeeeee",
  inputHoverColor: "#B7D3DF",
};
export const GlobalStyle = createGlobalStyle`
    * {
         margin: 0;
        box-sizing: border-box;
        transition: all;
        transition-duration: 400ms;
      }
`;
