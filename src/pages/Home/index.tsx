import { logUserOut } from "../../apollo/apollo";

const Home = () => {
  return (
    <div>
      Home
      <button
        onClick={() => {
          logUserOut();
        }}
      >
        Login Out
      </button>
    </div>
  );
};
export default Home;
