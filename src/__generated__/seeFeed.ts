/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeFeed
// ====================================================

export interface seeFeed_seeFeed_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface seeFeed_seeFeed_comments_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface seeFeed_seeFeed_comments {
  __typename: "Comment";
  id: number;
  user: seeFeed_seeFeed_comments_user;
  isMine: boolean;
  playload: string;
  createAt: string;
}

export interface seeFeed_seeFeed {
  __typename: "Photo";
  id: number;
  user: seeFeed_seeFeed_user;
  file: string;
  caption: string;
  createAt: string;
  isMine: boolean;
  isLike: boolean;
  likes: number;
  commentsNumber: number;
  comments: (seeFeed_seeFeed_comments | null)[] | null;
}

export interface seeFeed {
  seeFeed: (seeFeed_seeFeed | null)[] | null;
}
