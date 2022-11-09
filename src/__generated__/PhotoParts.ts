/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PhotoParts
// ====================================================

export interface PhotoParts_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface PhotoParts_comments_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface PhotoParts_comments {
  __typename: "Comment";
  id: number;
  user: PhotoParts_comments_user;
  isMine: boolean;
  playload: string;
  createAt: string;
}

export interface PhotoParts {
  __typename: "Photo";
  id: number;
  user: PhotoParts_user;
  file: string;
  caption: string;
  createAt: string;
  isMine: boolean;
  isLike: boolean;
  likes: number;
  commentsNumber: number;
  comments: (PhotoParts_comments | null)[] | null;
}
