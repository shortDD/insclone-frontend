import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import { FollowUser, FollowUserVariables } from "../__generated__/FollowUser";
import {
  UnfollowUser,
  UnfollowUserVariables,
} from "../__generated__/UnfollowUser";

const FOLLOW_USER = gql`
  mutation FollowUser($userId: Int!) {
    followUser(userId: $userId) {
      error
      ok
    }
  }
`;
const UNFOLLOW_USER = gql`
  mutation UnfollowUser($userId: Int!) {
    unfollowUser(userId: $userId) {
      error
      ok
    }
  }
`;

const IButton = styled.button`
  padding: 5px 10px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #0c92e6ed;
`;
const FollowedButton = styled(IButton)`
  background-color: gray;
`;
interface IProps {
  isFollowing: boolean;
  userId: number;
}
const FollowBtn: React.FC<IProps> = ({ isFollowing, userId }) => {
  const [followUser, { loading: followLoading }] = useMutation<
    FollowUser,
    FollowUserVariables
  >(FOLLOW_USER, {
    update: (cache, { data }) => {
      if (data?.followUser.ok) {
        cache.modify({
          id: `User:${userId}`,
          fields: {
            isFollowing: (pre) => !pre,
          },
        });
      }
    },
  });
  const [unfollowUser, { loading: unfollowLoading }] = useMutation<
    UnfollowUser,
    UnfollowUserVariables
  >(UNFOLLOW_USER, {
    update: (cache, { data }) => {
      if (data?.unfollowUser.ok) {
        cache.modify({
          id: `User:${userId}`,
          fields: {
            isFollowing: (pre) => !pre,
          },
        });
      }
    },
  });
  const follow = (userId: number) => {
    if (followLoading) return;
    followUser({
      variables: {
        userId,
      },
    });
  };
  const unfollow = (userId: number) => {
    if (unfollowLoading) return;
    unfollowUser({
      variables: {
        userId,
      },
    });
  };
  return (
    <>
      {isFollowing ? (
        <FollowedButton
          onMouseEnter={() => {
            console.log("mouseHover");
          }}
          onMouseLeave={() => {
            console.log("leave");
          }}
          onClick={() => {
            unfollow(userId);
          }}
        >
          已关注
        </FollowedButton>
      ) : (
        <IButton
          onClick={() => {
            follow(userId);
          }}
        >
          关注
        </IButton>
      )}
    </>
  );
};

export default FollowBtn;
