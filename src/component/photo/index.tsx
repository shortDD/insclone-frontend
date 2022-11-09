import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import Avatar from "../avatar";
import AddComment from "../add-comment";
import {
  seeFeed_seeFeed,
  seeFeed_seeFeed_user,
} from "../../__generated__/seeFeed";
import PhotoFooter from "./photoFooter";
import LinkToProfile from "../linkToProfile";
const IPhoto = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  min-height: 550px;
  width: 100%;
  height: calc(100vh - 125px);
  border: 1px solid;
  border-radius: 5px;
  border-color: ${(props) => props.theme.boxBorderColor};
  margin-bottom: ${(props) => props.theme.photoSpace};
  .photoHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: ${(props) => props.theme.photoPaddingX};
    padding-right: ${(props) => props.theme.photoPaddingX};
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.boxBorderColor};
    .left {
      a {
        display: flex;
        align-items: center;
      }
      span {
        font-size: 16px;
        margin-left: 10px;
      }
    }
    .right {
      position: relative;
    }
  }
  .photoFile {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const Detail = styled.div`
  position: absolute;
  width: 120px;
  border: 1px solid;
  border-color: ${(props) => props.theme.boxBorderColor};
  left: -120px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  span {
    padding: 5px;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.boxBorderColor};
    font-size: 14px;
    :hover {
      background-color: #ede4e0;
    }
  }
`;
export const GraySpan = styled.span`
  color: gray;
`;
interface IProps {
  photo: seeFeed_seeFeed;
  user: seeFeed_seeFeed_user;
}
const Photo: React.FC<IProps> = ({ photo, user }) => {
  const [detailPage, setDetailPage] = useState<boolean>(false);

  return (
    <IPhoto key={photo?.id}>
      <div className="photoHead">
        <div className="left">
          <LinkToProfile userName={photo.user.userName}>
            <Avatar url={user?.avatar as string | undefined} />
            <span>{user?.userName}</span>
          </LinkToProfile>
        </div>
        <div className="right">
          <FontAwesomeIcon
            icon={icon({ name: "ellipsis", style: "solid" })}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDetailPage((current) => !current);
            }}
            type="button"
          />
          <Detail style={{ opacity: `${detailPage ? "1" : "0"}` }}>
            <span>删除</span>
            <span>编辑</span>
          </Detail>
        </div>
      </div>
      <div className="photoFile">
        <img src={photo?.file} alt="" />
      </div>
      <PhotoFooter photo={photo} />
      <AddComment photoId={photo.id} />
    </IPhoto>
  );
};

export default Photo;
