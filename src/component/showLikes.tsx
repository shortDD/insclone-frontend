import React from "react";
import styled from "styled-components";
import { useSeePhotoLikes } from "../apollo/hooks/useSeePhotoLikes";
import Avatar from "./avatar";
import LinkToProfile from "./linkToProfile";
import { GraySpan } from "./photo";

interface IProps {
  photoId: number;
}
const Likes = styled.div`
  width: 100%;
  .like-by-title {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
`;
const ZeroLike = styled.span`
  padding: 10px 0;
  color: gray;
  display: block;
`;
const ShowLikes: React.FC<IProps> = ({ photoId }) => {
  //--------------------获取点赞的用户--------------------
  const { data: photoLikesResult } = useSeePhotoLikes(photoId);
  //--------------------获取点赞的用户--------------------
  if (
    !photoLikesResult?.seePhotoLikes ||
    !photoLikesResult.seePhotoLikes.length
  )
    return <ZeroLike>0 likes</ZeroLike>;
  const { userName, avatar } = photoLikesResult.seePhotoLikes[0]!;
  const likesLength = photoLikesResult.seePhotoLikes.length;
  return (
    <Likes>
      <div className="like-by-title">
        <Avatar
          url={avatar!}
          style={{
            width: "20px",
            height: "20px",
            marginRight: "10px",
          }}
        />
        <span>
          Like by{" "}
          <LinkToProfile userName={userName}>
            <b>{userName}</b>
          </LinkToProfile>{" "}
          {likesLength > 1 && (
            <>
              and <b>{likesLength - 1} others</b>
            </>
          )}
        </span>
      </div>
      {likesLength > 2 && (
        <div className="show-more-like">
          <span>
            <b>jiang_ting....</b>
            <GraySpan>more</GraySpan>
          </span>
        </div>
      )}
    </Likes>
  );
};
export default ShowLikes;
