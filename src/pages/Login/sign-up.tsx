import { gql, useMutation } from "@apollo/client";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IButton, Input, Or } from ".";
import {
  createAccount,
  createAccountVariables,
} from "../../__generated__/createAccount";
import { MessageSpan } from "./login";
const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $firstName: String!
    $userName: String!
    $email: String!
    $password: String!
    $lastName: String
  ) {
    createAccount(
      firstName: $firstName
      userName: $userName
      email: $email
      password: $password
      lastName: $lastName
    ) {
      ok
      error
    }
  }
`;
interface CreateAccountFormProps {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  result?: string;
}
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
  //--------------------form----------------------
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<CreateAccountFormProps>({ mode: "onChange" });
  const submit = () => {
    if (loading) return;
    const createAccountInput = getValues();
    createAccount({ variables: { ...createAccountInput } });
  };
  //--------------------form----------------------
  const [createAccount, { data: createAccountData, loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATE_ACCOUNT);

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
      <form onSubmit={handleSubmit(submit)}>
        <Input
          {...register("email", { required: true })}
          placeholder="Mobile Number or Email"
        />
        <div style={{ display: "flex", justifyContent: "space-between " }}>
          <Input
            placeholder="First Name"
            {...register("firstName", {
              required: true,
              pattern: /^[A-Za-z]+$/,
            })}
          />
          <div style={{ width: "50px" }}></div>
          <Input
            placeholder="Last Name"
            {...register("lastName", { pattern: /^[A-Za-z]+$/ })}
          />
        </div>
        {(errors.lastName?.type === "pattern" ||
          errors.firstName?.type === "pattern") && (
          <MessageSpan>请输入英文字母</MessageSpan>
        )}
        <Input
          placeholder="Username"
          {...register("userName", { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <IButton disabled={!isValid}>{loading ? "loading" : "Sign up"}</IButton>
      </form>
      <MessageSpan>
        {createAccountData?.createAccount.ok
          ? "注册成功"
          : createAccountData?.createAccount.error}
      </MessageSpan>
      <Tips>
        By signing up,you agree to our Terms,Data Policy and Cooikes Policy
      </Tips>
    </>
  );
};
export default SignUp;
