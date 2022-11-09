import styled from "styled-components";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Icon } from "./header";
import { logoSize } from "../constants";
import { gql, useMutation } from "@apollo/client";
import { COMMENT_FRAMENT } from "../apollo/fragments";
import {
  CreateComment,
  CreateCommentVariables,
} from "../__generated__/CreateComment";
const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid;
  border-top-color: ${(props) => props.theme.boxBorderColor};
`;
const IAddComment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props) => props.theme.photoPaddingX};
  padding-right: ${(props) => props.theme.photoPaddingX};
  form {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
const CommentInputBox = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.6;
  }
`;
const PostComment = styled.input`
  background-color: white;
  color: #9cb4cc;
  font-size: 18px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  :hover {
    color: ${(props) => (props.disabled ? "" : "#6e85b7")};
  }
`;
const CREATE_COMMENT = gql`
  mutation CreateComment($photoId: Int!, $playload: String!) {
    createComment(photoId: $photoId, playload: $playload) {
      ok
      error
      comment {
        ...CommentParts
      }
    }
  }
  ${COMMENT_FRAMENT}
`;

interface IProps {
  photoId: number;
}
interface IForm {
  playload: string;
}
const AddComment: React.FC<IProps> = ({ photoId }) => {
  const [createComment, { loading }] = useMutation<
    CreateComment,
    CreateCommentVariables
  >(CREATE_COMMENT, {
    update: (cache, { data }) => {
      if (data?.createComment.ok && data.createComment.comment?.id) {
        const newComment = {
          __typename: "Comment",
          id: 25,
          isMine: true,
          playload: "123",
          createAt: Date.now(),
        };
        cache.writeFragment({
          data: newComment,
          fragment: gql`
            fragment newComment on Comment {
              __typename
              id
              isMine
              playload
              createAt
            }
          `,
        });
        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            comments(pre) {
              return [...pre, newComment];
            },
          },
        });
      }
    },
  });
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<IForm>();
  const submit = () => {
    if (loading) return;
    const { playload } = getValues();
    createComment({
      variables: {
        photoId,
        playload,
      },
    });
    reset();
  };
  return (
    <AddCommentContainer>
      <IAddComment className="add-comment">
        <Icon>
          <FontAwesomeIcon
            size={logoSize}
            icon={icon({ name: "face-smile", style: "regular" })}
          />
        </Icon>
        <form onClick={handleSubmit(submit)}>
          <CommentInputBox
            {...register("playload", { required: true })}
            placeholder="Add a comment..."
          />
          <PostComment type="button" disabled={!isValid} value="Post" />
        </form>
      </IAddComment>
    </AddCommentContainer>
  );
};
export default AddComment;
