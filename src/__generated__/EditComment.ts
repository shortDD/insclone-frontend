/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditComment
// ====================================================

export interface EditComment_editComment {
  __typename: "Result";
  ok: boolean;
  error: string | null;
}

export interface EditComment {
  editComment: EditComment_editComment;
}

export interface EditCommentVariables {
  commentId: number;
  playload: string;
}
