import { gql } from "@apollo/client";
export const USER_FRAMENT = gql`
  fragment UserParts on User {
    id
    userName
    avatar
  }
`;
export const LIKE_FRAMENT = gql`
  fragment LikeParts on Like {
    id
  }
`;
export const COMMENT_FRAMENT = gql`
  fragment CommentParts on Comment {
    id
    user {
      ...UserParts
    }
    isMine
    playload
    createAt
  }
  ${USER_FRAMENT}
`;
export const PHOTO_FRAMENT = gql`
  fragment PhotoParts on Photo {
    id
    user {
      ...UserParts
    }
    file
    caption
    createAt
    isMine
    isLike
    likes
    commentsNumber
    comments {
      ...CommentParts
    }
  }
  ${COMMENT_FRAMENT}
  ${USER_FRAMENT}
`;
