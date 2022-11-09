/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditPhoto
// ====================================================

export interface EditPhoto_editPhoto {
  __typename: "Result";
  ok: boolean;
  error: string | null;
}

export interface EditPhoto {
  editPhoto: EditPhoto_editPhoto;
}

export interface EditPhotoVariables {
  editPhotoId: number;
  caption: string;
}
