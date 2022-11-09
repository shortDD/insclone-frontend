import { useReactiveVar } from "@apollo/client";
import {
  brands,
  solid,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo/apollo";
import { useMe } from "../apollo/hooks/useMe";
import { logoSize } from "../constants";
import { Container } from "../styles/styles";
import Avatar from "./avatar";
import LinkToProfile from "./linkToProfile";
const IHeader = styled.div`
  width: 100%;
  min-width: 310px;
  position: fixed;
  z-index: 100;
  background-color: ${(props) => props.theme.bgColor};
`;
const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  .logo {
    color: black;
  }
  .right {
    display: flex;
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.div`
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  :last-child {
    margin-right: 0;
  }
`;
const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useMe();
  return (
    <IHeader>
      <Container>
        <MainContent>
          <div className="left">
            <Link to="/" className="logo">
              <FontAwesomeIcon size={logoSize} icon={brands("instagram")} />
            </Link>
          </div>
          <div className="right">
            {isLoggedIn ? (
              <IconsContainer>
                <Icon>
                  <Link to="/">
                    <FontAwesomeIcon
                      size={logoSize}
                      icon={solid("house-chimney")}
                    />
                  </Link>
                </Icon>
                <Icon>
                  <FontAwesomeIcon
                    size={logoSize}
                    icon={icon({ name: "paper-plane", style: "regular" })}
                  />
                </Icon>
                <Icon>
                  <FontAwesomeIcon
                    size={logoSize}
                    icon={icon({ name: "compass", style: "regular" })}
                  />
                </Icon>
                <Icon>
                  <FontAwesomeIcon
                    size={logoSize}
                    icon={icon({ name: "heart", style: "regular" })}
                  />
                </Icon>
                <Icon>
                  <LinkToProfile userName={data?.me.user?.userName!}>
                    <Avatar url={data?.me.user?.avatar as string | undefined} />
                  </LinkToProfile>
                </Icon>
              </IconsContainer>
            ) : (
              <Link to="/">
                <button>Log in</button>
              </Link>
            )}
          </div>
        </MainContent>
      </Container>
    </IHeader>
  );
};
export default Header;
