/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeComments
// ====================================================

export interface SeeComments_seeComments_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface SeeComments_seeComments {
  __typename: "Comment";
  id: number;
  user: SeeComments_seeComments_user;
  isMine: boolean;
  playload: string;
  createAt: string;
}

export interface SeeComments {
  seeComments: (SeeComments_seeComments | null)[] | null;
}

export interface SeeCommentsVariables {
  photoId: number;
}
