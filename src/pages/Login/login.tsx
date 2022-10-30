import { gql, useMutation } from "@apollo/client";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IButton, Input, Or } from ".";
import { loginVariables, login } from "../../__generated__/login";
import { logUserIn } from "../../apollo/apollo";
const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      error
      token
    }
  }
`;
interface IFormVars {
  userName: string;
  password: string;
  result?: string;
}
export const MessageSpan = styled.span`
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  color: red;
`;
const Login = () => {
  //-----------------useForm---------
  const {
    register,
    getValues,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isValid },
  } = useForm<IFormVars>({ mode: "onChange", reValidateMode: "onChange" });
  //提交表单事件
  const submit = () => {
    if (!loading) {
      const { userName, password } = getValues();
      login({ variables: { userName, password } });
    }
  };
  //-----------------useForm---------
  //-----------------apollo---------

  const onCompleted = ({ login }: login) => {
    const { ok, token, error } = login;
    if (ok && token) {
      logUserIn(token);
      //跳转页面
    } else {
      setError("result", { message: error! });
    }
  };
  const [login, { loading }] = useMutation<
    login,
    loginVariables
  >(LOGIN_MUTATION, { onCompleted });
  //-----------------apollo---------

  //-----------------path------------
  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <h1>Instagram</h1>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          {...register("userName", {
            required: "userName is required",
            onChange: () => {
              clearErrors("result");
            },
            // pattern:
            //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          placeholder="Phone number,username,or email"
        />
        {errors.userName?.message && (
          <MessageSpan>{errors.userName.message}</MessageSpan>
        )}
        {/* {errors.userName?.type === "pattern" && (
          <MessageSpan>请输入正确的邮箱</MessageSpan>
        )} */}
        <Input
          {...register("password", {
            required: "请输入密码",
            onChange: () => {
              clearErrors("result");
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password?.message && (
          <MessageSpan>{errors.password.message}</MessageSpan>
        )}
        <IButton type="submit" disabled={!isValid}>
          {loading ? "loading" : "Log In"}
        </IButton>
        {errors.result?.message && (
          <MessageSpan>{errors.result.message}</MessageSpan>
        )}
        {/* {loginData?.login.error && (
          <MessageSpan>{loginData.login.error}</MessageSpan>
        )} */}
      </form>
      <Or>
        <hr />
        <span>OR</span>
        <hr />
      </Or>
      <span className="loginWithFB">
        <FontAwesomeIcon
          style={{ marginRight: "5px" }}
          icon={brands("square-facebook")}
        />
        Log in with FaceBook
      </span>
      <span className="forgotPassword">Forgot password?</span>
    </>
  );
};
export default Login;
