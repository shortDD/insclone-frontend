import styled, { CSSProperties } from "styled-components";
const AvatarContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;
const IAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
interface IProps {
  url?: string | undefined;
  style?: CSSProperties | undefined;
}
const defaultStyle: CSSProperties = {
  width: "25px",
  height: "25px",
};
const Avatar: React.FC<IProps> = ({ url, style }) => {
  return (
    <AvatarContainer style={style || defaultStyle}>
      <IAvatar src={url} alt="" />
    </AvatarContainer>
  );
};

export default Avatar;
