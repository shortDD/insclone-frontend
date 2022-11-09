/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_me_user_photos_comments {
  __typename: "Comment";
  id: number;
}

export interface me_me_user_photos_hashtags {
  __typename: "Hashtag";
  id: number;
  hashtag: string;
}

export interface me_me_user_photos {
  __typename: "Photo";
  id: number;
  file: string;
  caption: string;
  likes: number;
  comments: (me_me_user_photos_comments | null)[] | null;
  hashtags: (me_me_user_photos_hashtags | null)[] | null;
  createAt: string;
}

export interface me_me_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
  photos: (me_me_user_photos | null)[] | null;
}

export interface me_me {
  __typename: "MeResult";
  ok: string;
  error: string | null;
  user: me_me_user | null;
}

export interface me {
  me: me_me;
}
