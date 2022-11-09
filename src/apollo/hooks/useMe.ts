import { gql, useQuery } from "@apollo/client";
import { me } from "../../__generated__/me";
import { USER_FRAMENT } from "../fragments";

const ME_QUERY = gql`
  query me {
    me {
      ok
      error
      user {
        ...UserParts
        photos {
          id
          file
          caption
          likes
          comments {
            id
          }
          hashtags {
            id
            hashtag
          }
          createAt
        }
      }
    }
  }
  ${USER_FRAMENT}
`;
export const useMe = () => {
  return useQuery<me>(ME_QUERY);
};
