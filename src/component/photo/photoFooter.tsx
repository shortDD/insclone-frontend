import styled from "styled-components";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, IconsContainer } from "../header";
import { seeFeed_seeFeed } from "../../__generated__/seeFeed";
import { logoSize } from "../../constants";
import Comment from "../comment";
import ShowLikes from "../showLikes";
import ToggleLikeIcon from "../toggleLike";

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GraySpan = styled.span`
  color: gray;
`;
export const ShowAllComments = styled.span`
  color: gray;
  font-size: 14px;
  margin-bottom: 5px;
`;
const Notice = styled.div`
  padding: 20px 0;
  @media screen and (max-height: 820px) {
    padding: 10px 0;
  }
`;
const PublishTime = styled.div`
  display: flex;
  justify-content: end;
  span {
    font-size: 12px;
  }
`;
const PhotoFooterContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props) => props.theme.photoPaddingX};
  padding-right: ${(props) => props.theme.photoPaddingX};
`;
interface IProps {
  photo: seeFeed_seeFeed;
}
const PhotoFooter: React.FC<IProps> = ({ photo }) => {
  return (
    <PhotoFooterContainer>
      {/*图标操作区*/}
      <PhotoActions>
        <IconsContainer>
          <ToggleLikeIcon photoId={photo.id} isLike={photo.isLike} />
          <Icon>
            <FontAwesomeIcon
              size={logoSize}
              icon={icon({ name: "comment", style: "regular" })}
            />
          </Icon>
          <Icon>
            <FontAwesomeIcon
              size={logoSize}
              icon={icon({ name: "paper-plane", style: "regular" })}
            />
          </Icon>
        </IconsContainer>
        <IconsContainer>
          <Icon>
            <FontAwesomeIcon
              size={logoSize}
              icon={icon({ name: "bookmark", style: "regular" })}
            />
          </Icon>
        </IconsContainer>
      </PhotoActions>
      {/*点赞显示区*/}
      <ShowLikes photoId={photo.id} />
      {/*评论区*/}
      <Comments>
        <Comment userName={photo.user.userName} playload={photo.caption} />
        {photo.comments?.length ? (
          <>
            <ShowAllComments>{photo.commentsNumber} comments</ShowAllComments>
            {photo.comments.map((comment, index) => {
              if (comment?.id && index < 2) {
                return (
                  <Comment
                    id={comment.id}
                    userName={comment.user.userName}
                    playload={comment.playload}
                    isMine={comment.isMine}
                    key={comment.id}
                  />
                );
              }
            })}
          </>
        ) : (
          <Notice>
            <GraySpan>没有人评论....</GraySpan>
          </Notice>
        )}
      </Comments>
      {/*上传时间*/}
      <PublishTime>
        <GraySpan>1 DAY AGO</GraySpan>
      </PublishTime>
    </PhotoFooterContainer>
  );
};
export default PhotoFooter;
