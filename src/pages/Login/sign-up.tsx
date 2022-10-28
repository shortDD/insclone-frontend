import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { IButton, Input, Or } from ".";

const Tips = styled.span`
  padding: 12px 0;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: gray;
  transition: all;
  transition-duration: 300ms;
  :hover {
    opacity: 0.7;
  }
`;

const H3 = styled.h3`
  color: gray;
  text-align: center;
  font-size: 17px;
`;
const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <h1>Instagram</h1>
      <H3>Sign up to see photos and videos from your friends</H3>
      <span className="loginWithFB">
        <FontAwesomeIcon
          style={{ marginRight: "5px" }}
          icon={brands("square-facebook")}
        />
        Log in with FaceBook
      </span>
      <Or>
        <hr />
        <span>OR</span>
        <hr />
      </Or>
      <form>
        <Input placeholder="Mobile Number or Email" />
        <Input placeholder="Full Name" />
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <IButton>Sign up</IButton>
      </form>
      <Tips>
        By signing up,you agree to our Terms,Data Policy and Cooikes Policy
      </Tips>
    </>
  );
};
export default SignUp;
