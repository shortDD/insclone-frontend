import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo/apollo";
import Home from "../pages/Home";
import Account from "../pages/Login";

const AuthRouter = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <Home /> : <Account />;
};
export default AuthRouter;
