import { gql, useQuery } from "@apollo/client";
import {
  SeePhotoLikes,
  SeePhotoLikesVariables,
} from "../../__generated__/SeePhotoLikes";
import { USER_FRAMENT } from "../fragments";

export const SEE_PHOTO_LIKES_QUERY = gql`
  query SeePhotoLikes($seePhotoLikesId: Int!) {
    seePhotoLikes(id: $seePhotoLikesId) {
      ...UserParts
    }
  }
  ${USER_FRAMENT}
`;

export const useSeePhotoLikes = (photoId: number) => {
  return useQuery<SeePhotoLikes, SeePhotoLikesVariables>(
    SEE_PHOTO_LIKES_QUERY,
    {
      variables: { seePhotoLikesId: photoId },
    }
  );
};
