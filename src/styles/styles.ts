import styled, { DefaultTheme, createGlobalStyle } from "styled-components";
export const SummerTheme: DefaultTheme = {
  bgColor: "#ffc090",
  boxColor: "#f7f6dc",
  boxBorderColor: "#B7C4CF",
  titleColor: "#fea82f",
  titleHoverColor: "#ffc090",
  inputBgColor: "#eeeeee",
  inputHoverColor: "#c2ded1",
  photoSpace: "55px",
  photoPaddingX: "20px",
};
export const WhiteTheme: DefaultTheme = {
  bgColor: "#FAF7F0",
  boxColor: "#F9F9F9",
  boxBorderColor: "#B7C4CF",
  titleColor: "#9CB4CC",
  titleHoverColor: "#748DA6",
  inputBgColor: "#eeeeee",
  inputHoverColor: "#B7D3DF",
  photoSpace: "55px",
  photoPaddingX: "20px",
};
export const GlobalStyle = createGlobalStyle`
    * {
         margin: 0;
        box-sizing: border-box;
        transition: all;
        transition-duration: 400ms;
        a{
          text-decoration: none;
          color: black;
        }
      }
`;
export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  min-width: 320px;
  @media screen and (max-width: 880px) {
    width: 100%;
    padding: 0 12px;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;
