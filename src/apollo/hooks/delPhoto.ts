import { gql, useMutation } from "@apollo/client";
import { DelPhoto, DelPhotoVariables } from "../../__generated__/DelPhoto";
import { EditPhoto, EditPhotoVariables } from "../../__generated__/EditPhoto";

const DEL_PHOTO = gql`
  mutation DelPhoto($photoId: Int!) {
    delPhoto(photoId: $photoId) {
      ok
      error
    }
  }
`;
export const useDelComment = () => {
  return useMutation<DelPhoto, DelPhotoVariables>(DEL_PHOTO);
};
const EDIT_COMMENT = gql`
  mutation EditPhoto($editPhotoId: Int!, $caption: String!) {
    editPhoto(id: $editPhotoId, caption: $caption) {
      ok
      error
    }
  }
`;

export const useEditComment = () => {
  return useMutation<EditPhoto, EditPhotoVariables>(EDIT_COMMENT);
};
