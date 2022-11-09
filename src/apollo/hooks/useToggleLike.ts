import {
  ApolloCache,
  DefaultContext,
  gql,
  MutationUpdaterFunction,
  useMutation,
} from "@apollo/client";
import { likePhoto, likePhotoVariables } from "../../__generated__/LikePhoto";
import { SEE_PHOTO_LIKES_QUERY } from "./useSeePhotoLikes";

const TOGGLE_LIKE = gql`
  mutation likePhoto($photoId: Int!) {
    likePhoto(photoId: $photoId) {
      ok
      error
    }
  }
`;
export const useToggleLike = (photoId: number) => {
  return useMutation<likePhoto, likePhotoVariables>(TOGGLE_LIKE, {
    update: (cache, { data }) => {
      if (data?.likePhoto.ok) {
        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            isLike(pre) {
              return !pre;
            },
          },
        });
      }
    },
    refetchQueries: [
      { query: SEE_PHOTO_LIKES_QUERY, variables: { seePhotoLikesId: photoId } },
    ],
  });
};
