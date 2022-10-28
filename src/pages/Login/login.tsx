import { gql, useMutation } from "@apollo/client";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { IButton, Input, Or } from ".";
import { isLoggedInVar } from "../../apollo/apollo";
import { loginVariables, login } from "../../__generated__/login";
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
}
const Login = () => {
  //-----------------apollo---------
  const onCompleted = ({ login }: login) => {
    if (login?.ok) {
      //修改登入状态
      isLoggedInVar(true);
      //存储token
      //跳转页面
    }
  };
  // const [login, { loading }] = useMutation<login, loginVariables>(
  //   LOGIN_MUTATION,
  //   { onCompleted }
  // );
  //-----------------apollo---------
  //-----------------useForm---------
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormVars>({ mode: "onChange" });
  //提交表单事件
  const submit = () => {
    if (true) {
      const { userName, password } = getValues();
      console.log(userName, password);
      // login({ variables: { userName, password } });
    }
  };
  //-----------------useForm---------
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
          })}
          placeholder="Phone number,username,or email"
        />
        {errors.userName?.message && <span>{errors.userName.message}</span>}
        <Input
          {...register("password", { required: "password is required" })}
          type="password"
          placeholder="Password"
        />
        {errors.password?.message && <span>{errors.password.message}</span>}
        <IButton disabled={!isValid}>{false ? "loading" : "Log In"}</IButton>
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
