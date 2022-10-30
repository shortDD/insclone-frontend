import styled from "styled-components";
import { themeVar } from "../apollo/apollo";
import { SummerTheme, WhiteTheme } from "../styles/styles";

const ThemeContainer = styled.div`
  position: absolute;
  top: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ThemeNav = styled.div`
  background-color: #316b83;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 5px 0;
  border-radius: 10px;
  span {
    font-size: 12px;
    font-weight: bolder;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    padding: 2px;
    :first-child {
      background-color: #faf7f0;
    }
    :last-child {
      background-color: #ffc090;
    }
  }
`;
const Theme = () => {
  return (
    <ThemeContainer>
      <ThemeNav>
        <span
          onClick={() => {
            themeVar(WhiteTheme);
          }}
        ></span>
        <div style={{ width: "6px" }}></div>
        <span
          onClick={() => {
            themeVar(SummerTheme);
          }}
        ></span>
      </ThemeNav>
    </ThemeContainer>
  );
};

export default Theme;
