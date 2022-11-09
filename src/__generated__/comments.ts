/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: comments
// ====================================================

export interface comments_comments_user {
  __typename: "User";
  id: number;
  avatar: string | null;
  userName: string;
}

export interface comments_comments {
  __typename: "Comment";
  id: number;
  isMine: boolean;
  playload: string;
  createAt: string;
  user: comments_comments_user;
}

export interface comments {
  __typename: "Photo";
  comments: (comments_comments | null)[] | null;
}
