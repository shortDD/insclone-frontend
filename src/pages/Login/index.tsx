import { isLoggedInVar } from "../../apollo/apollo";
import { gql, useMutation } from "@apollo/client";
import { login, loginVariables } from "../../__generated__/login";
import { useForm } from "react-hook-form";
import styled from "styled-components";
const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      error
      token
    }
  }
`;

const FlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled(FlexColumn)`
  height: 100vh;
  background-color: #ffc090;
`;
const Card = styled(FlexColumn)`
  width: 450px;
`;
const TopBox = styled(FlexColumn)`
  width: 100%;
  padding: 30px 35px 10px 35px;
  border: 1.5px solid;
  border-color: #67646445;
  background-color: #f7f6dc;
  box-sizing: border-box;
  border-radius: 20px;
  h1 {
    color: #fea82f;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    input {
      box-sizing: border-box;
      width: 100%;
      font-size: 16px;
      padding: 16px 12px;
      margin-bottom: 10px;
      border: none;
      border-radius: 10px;
      background-color: #c9ccd5;
    }
    input:hover {
      background-color: #c2ded1;
    }
    button {
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 16px;
      border: none;
      background-color: #ffc288;
      margin-top: 5px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    button:hover {
      background-color: #c2ded1;
    }
  }
`;
const BottomBox = styled.div`
  width: 100%;
  border: 1.5px solid;
  margin-top: 20px;
  border-color: #67646445;
  background-color: white;
`;

const Login = () => {
  //-----------------apollo---------
  // const onCompleted = ({ login }: login) => {
  //   if (login?.ok) {
  //     //修改登入状态
  //     isLoggedInVar(true);
  //     //存储token
  //     //跳转页面
  //   }
  // };
  // const [login, { data: loginData, loading }] = useMutation<
  //   login,
  //   loginVariables
  // >(LOGIN_MUTATION, { onCompleted });
  //点击登入事件
  // const loginOnClick = () => {
  //   if (!loading) {
  //     login({ variables: { userName: "", password: "123" } });
  //   }
  // };
  //-----------------apollo---------
  //-----------------useForm---------
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //-----------------useForm---------
  return (
    <Container>
      <Card>
        <TopBox>
          <h1>Istagram</h1>
          <form>
            <input placeholder="Phone number,username,or email" />
            <input placeholder="Password" />
            <button onClick={() => {}}>Log In</button>
          </form>
          <span>Or</span>
          <span>Log in with FaceBook</span>
        </TopBox>
        <BottomBox>Sign up</BottomBox>
      </Card>
    </Container>
  );
};
export default Login;
