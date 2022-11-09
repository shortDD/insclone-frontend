import { Link } from "react-router-dom";
interface IProps {
  userName: string;
  children: any;
}
const LinkToProfile: React.FC<IProps> = ({ userName, children }) => {
  return <Link to={`profile/${userName}`}>{children}</Link>;
};

export default LinkToProfile;
