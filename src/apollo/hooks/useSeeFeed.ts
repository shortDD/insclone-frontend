import { gql, useQuery } from "@apollo/client";
import { seeFeed } from "../../__generated__/seeFeed";
import { PHOTO_FRAMENT } from "../fragments";

export const SEEFEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoParts
    }
  }
  ${PHOTO_FRAMENT}
`;
export const useSeedFeed = () => {
  return useQuery<seeFeed>(SEEFEED_QUERY);
};
