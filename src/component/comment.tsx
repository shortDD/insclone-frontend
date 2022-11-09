import styled from "styled-components";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoSize } from "../constants";
import { Icon } from "./header";
import sanitizeHtml from "sanitize-html";
import { Detail } from "./photo";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { DelComment, DelCommentVariables } from "../__generated__/DelComment";
import {
  EditComment,
  EditCommentVariables,
} from "../__generated__/EditComment";
import LinkToProfile from "./linkToProfile";

const DEL_COMMENT = gql`
  mutation DelComment($commentId: Int!) {
    delComment(commentId: $commentId) {
      ok
      error
    }
  }
`;
const EDIT_COMMENT = gql`
  mutation EditComment($commentId: Int!, $playload: String!) {
    editComment(commentId: $commentId, playload: $playload) {
      ok
      error
    }
  }
`;
const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  .left {
    display: flex;
    align-items: center;
    .playload {
      font-size: 16px;
      font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue,
        Microsoft YaHei, sans-serif;
      font-weight: 400;
      mark {
        transition: none;
        margin-left: 5px;
        background-color: white;
        color: #0e7fef;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
  .right {
    position: relative;
  }
`;
interface IProps {
  userName: string;
  playload: string;
  isMine?: boolean;
  id?: number;
}
const Comment: React.FC<IProps> = ({ userName, playload, isMine, id }) => {
  const allowPlayload = sanitizeHtml(
    playload.replace(/#[\w]+/g, "<mark>$&</mark>"),
    {
      allowedTags: ["mark"],
    }
  );
  //---------------删除评论---------------------
  const [delComment, { loading: delLoading }] = useMutation<
    DelComment,
    DelCommentVariables
  >(DEL_COMMENT, {
    update: (cache, { data }) => {
      if (data?.delComment.ok) {
        cache.evict({ id: `Comment:${id}` });
      }
    },
  });
  const delCommentEvent = () => {
    if (delLoading || !id) return;
    delComment({
      variables: {
        commentId: id,
      },
    });
  };
  //---------------删除评论---------------------
  //---------------编辑评论---------------------
  const [editComment, { loading: editLoading }] = useMutation<
    EditComment,
    EditCommentVariables
  >(EDIT_COMMENT);
  const editCommentEvent = () => {
    if (editLoading || !id) return;
    editComment({ variables: { commentId: id, playload: "hhh" } });
  };
  //---------------编辑评论---------------------
  const [detailPage, setDetailPage] = useState<boolean>(false);
  if (!allowPlayload) return null;
  return (
    <CommentContainer>
      <div className="left">
        <LinkToProfile userName={userName}>
          <b style={{ fontSize: "14px" }}>{userName}</b>
        </LinkToProfile>
        <div className="space" style={{ width: "10px" }}></div>
        <span
          className="playload"
          dangerouslySetInnerHTML={{
            __html: allowPlayload,
          }}
        />
      </div>
      {typeof isMine !== "undefined" && (
        <div className=" right">
          {isMine ? (
            <>
              <Icon>
                <FontAwesomeIcon
                  size={logoSize}
                  icon={icon({ name: "ellipsis", style: "solid" })}
                  onClick={() => {
                    setDetailPage((current) => !current);
                  }}
                />
              </Icon>
              <Detail style={{ opacity: `${detailPage ? "1" : "0"}` }}>
                <span onClick={delCommentEvent}>删除</span>
                <span onClick={editCommentEvent}>编辑</span>
              </Detail>
            </>
          ) : (
            <Icon>
              <FontAwesomeIcon
                size={logoSize}
                icon={icon({ name: "heart", style: "regular" })}
              />
            </Icon>
          )}
        </div>
      )}
    </CommentContainer>
  );
};

export default Comment;
