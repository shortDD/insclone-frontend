import styled from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";
import Theme from "../../component/theme";

const FlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled(FlexColumn)`
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;
const Card = styled(FlexColumn)`
  position: relative;
  width: 388px;
  @media screen and (max-width: 450px) {
    width: 100%;
    min-width: 300px;
  }
`;
const TopBox = styled(FlexColumn)`
  width: 100%;
  padding: 30px 35px 20px 35px;
  border: 1.5px solid;
  border-color: ${(props) => props.theme.boxBorderColor};
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 20px;
  h1 {
    color: ${(props) => props.theme.titleColor};
    transition: all;
    padding: 20px 0;
    transition-duration: 300ms;
    :hover {
      color: ${(props) => props.theme.titleHoverColor};
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
  .loginWithFB {
    color: #4fa095;
    font-weight: bolder;
    text-align: center;
    padding: 15px 0;
    font-size: 18px;
    transition: all;
    transition-duration: 300ms;
    :hover {
      color: #3ac0b0;
    }
  }
  .forgotPassword {
    box-sizing: border-box;
    text-align: center;
    height: 30px;
    font-size: 14px;
    font-weight: 600;
    color: #153462;
    letter-spacing: 0.5px;
    :hover {
      border-bottom: 1px solid rgba(21, 52.98, 1);
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  letter-spacing: 0.5px;
  font-weight: bold;
  padding: 16px 12px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.inputBgColor};
  transition: all;
  transition-duration: 300ms;
  &::placeholder {
    font-size: 14px;
  }
  :hover {
    background-color: ${(props) => props.theme.inputHoverColor};
  }
`;
export const IButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  background-color: ${(props) => props.theme.bgColor};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all;
  transition-duration: 300ms;
  margin-bottom: 15px;
  :hover {
    background-color: ${(props) =>
      props.disabled ? "" : props.theme.inputHoverColor};
  }
`;
export const Or = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  hr {
    width: 100%;
  }
  span {
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bolder;
    font-size: 14px;
  }
`;
const BottomBox = styled.div`
  width: 100%;
  border: 1.5px solid;
  border-color: ${(props) => props.theme.boxBorderColor};
  background-color: ${(props) => props.theme.boxColor};
  text-align: center;
  border-radius: 20px;
  margin-top: 20px;
  padding: 20px 35px 20px 35px;

  @media screen and (max-width: 350px) {
    display: flex;
    flex-direction: column;
  }
  a {
    color: #4fa095;
    font-weight: bolder;
    margin: 0 5px;
    text-decoration: none;
    transition: all;
    transition-duration: 300ms;
    :hover {
      color: #3ac0b0;
    }
  }
`;

const Account = () => {
  const { pathname } = useLocation();
  const flag = pathname === "/sign-up";
  return (
    <Container>
      <Card>
        <Theme />
        <TopBox>
          <Outlet />
        </TopBox>
        <BottomBox>
          {flag ? "Have an account?" : "Dont't have an account?"}
          <Link to={`${flag ? "/" : "/sign-up"}`}>
            {flag ? "Log in" : "Sign up"}
          </Link>
        </BottomBox>
      </Card>
    </Container>
  );
};
export default Account;
