import { gql, useQuery } from "@apollo/client";
import {
  SeeComments,
  SeeCommentsVariables,
} from "../../__generated__/SeeComments";
import { COMMENT_FRAMENT } from "../fragments";

export const SEE_COMMENTS_QUERY = gql`
  query SeeComments($photoId: Int!) {
    seeComments(photoId: $photoId) {
      ...CommentParts
    }
  }
  ${COMMENT_FRAMENT}
`;
export const useSeeComments = (photoId: number) => {
  return useQuery<SeeComments, SeeCommentsVariables>(SEE_COMMENTS_QUERY, {
    variables: { photoId },
  });
};
