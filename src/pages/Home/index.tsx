import { isLoggedInVar } from "../../apollo/apollo";

const Home = () => {
  return (
    <div>
      Home
      <button
        onClick={() => {
          isLoggedInVar(false);
        }}
      >
        Login Out
      </button>
    </div>
  );
};
export default Home;
