/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeProfile
// ====================================================

export interface SeeProfile_seeProfile_photos {
  __typename: "Photo";
  likes: number;
  file: string;
  id: number;
  isLike: boolean;
  isMine: boolean;
}

export interface SeeProfile_seeProfile {
  __typename: "User";
  id: number;
  userName: string;
  bio: string | null;
  avatar: string | null;
  totalFollowing: number;
  totalFollowers: number;
  isMe: boolean;
  isFollowing: boolean;
  photos: (SeeProfile_seeProfile_photos | null)[] | null;
}

export interface SeeProfile {
  seeProfile: SeeProfile_seeProfile;
}

export interface SeeProfileVariables {
  userName: string;
}
