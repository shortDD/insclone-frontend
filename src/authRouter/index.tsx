import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo/apollo";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AuthRouter = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <Home /> : <Login />;
};
export default AuthRouter;
