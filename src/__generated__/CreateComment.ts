/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateComment
// ====================================================

export interface CreateComment_createComment_comment_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface CreateComment_createComment_comment {
  __typename: "Comment";
  id: number;
  user: CreateComment_createComment_comment_user;
  isMine: boolean;
  playload: string;
  createAt: string;
}

export interface CreateComment_createComment {
  __typename: "CreateCommentResult";
  ok: boolean;
  error: string | null;
  comment: CreateComment_createComment_comment | null;
}

export interface CreateComment {
  createComment: CreateComment_createComment;
}

export interface CreateCommentVariables {
  photoId: number;
  playload: string;
}
