/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DelComment
// ====================================================

export interface DelComment_delComment {
  __typename: "Result";
  ok: boolean;
  error: string | null;
}

export interface DelComment {
  delComment: DelComment_delComment;
}

export interface DelCommentVariables {
  commentId: number;
}
