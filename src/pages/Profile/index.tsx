import { gql, useMutation, useQuery } from "@apollo/client";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FollowBtn from "../../component/followBtn";
import { Icon } from "../../component/header";
import ToggleLikeIcon from "../../component/toggleLike";
import { Container } from "../../styles/styles";
import {
  FollowUser,
  FollowUserVariables,
} from "../../__generated__/FollowUser";
import {
  SeeProfile,
  SeeProfileVariables,
} from "../../__generated__/SeeProfile";
import {
  UnfollowUser,
  UnfollowUserVariables,
} from "../../__generated__/UnfollowUser";

const SEE_PROFILE_QUERY = gql`
  query SeeProfile($userName: String!) {
    seeProfile(userName: $userName) {
      id
      userName
      bio
      avatar
      totalFollowing
      totalFollowers
      isMe
      isFollowing
      photos {
        likes
        file
        id
        isLike
        isMine
      }
    }
  }
`;
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
const ProfileContainer = styled.div`
  padding-top: 90px;
  @media screen and (max-width: 550px) {
    padding-top: 65px;
  }
`;
//-----头像信息--------
const UserInfo = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
  .avatarContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      background-color: gray;
      @media screen and (max-width: 550px) {
        width: 120px;
        height: 120px;
      }
    }
    @media screen and (max-width: 550px) {
      margin-left: 0;
    }
  }
  .infoContainer {
    padding: 50px 0px;
    margin-left: 80px;
    .info {
      display: flex;
      flex-direction: column;
    }
    @media screen and (max-width: 550px) {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-left: 0px;
    }
  }
`;
const InfoHead = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  span {
    font-size: 25px;
    margin-right: 10px;
  }
  @media screen and (max-width: 550px) {
    padding: 5px 0;
    justify-content: center;
    span {
      font-size: 20px;
    }
    button {
      font-size: 10px;
    }
  }
`;
const Follow = styled.div`
  padding: 10px 0;
  @media screen and (max-width: 550px) {
    padding: 5px 0;
  }
`;
const Message = styled.span`
  font-size: 20px;
  font-weight: bolder;
  padding: 10px 0;
  @media screen and (max-width: 550px) {
    font-size: 10px;
    font-weight: 500;
    padding: 0;
  }
`;
const Mood = styled.span`
  padding: 10px 0;
  @media screen and (max-width: 550px) {
    padding: 0;
    font-size: 10px;
    font-weight: 300;
  }
`;
//------图片-------
const Album = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
const SimplePhotoContainer = styled.div`
  position: relative;
  max-height: 250px;
  overflow: hidden;
  border-radius: 5px;
`;
const SimplePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const HandlePhoto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: none;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
    svg {
      display: block;
    }
  }
`;
const EditProfile = styled.div``;
const Profile = () => {
  const { userName } = useParams();
  const { data: seeProfileResult, loading } = useQuery<
    SeeProfile,
    SeeProfileVariables
  >(SEE_PROFILE_QUERY, { variables: { userName: userName! } });
  if (loading || !seeProfileResult) {
    return <div>loading</div>;
  }
  const {
    isMe,
    isFollowing,
    avatar,
    userName: username,
    id: userId,
    totalFollowers,
    totalFollowing,
    bio,
    photos,
  } = seeProfileResult.seeProfile;
  return (
    <ProfileContainer>
      <Container>
        <UserInfo>
          <div className="avatarContainer">
            <img
              className="avatar"
              src={
                avatar
                  ? avatar
                  : "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F69%2F80%2F595f67c3a6eb1_610.jpg&refer=http%3A%2F%2Fbpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670421792&t=af3d8ac20406396c9898b3a831f81a64"
              }
              alt=""
            />
          </div>
          <div className="infoContainer">
            <div className="info">
              <InfoHead>
                <span>{username}</span>
                {isMe ? (
                  <EditProfile>
                    <Icon>
                      <FontAwesomeIcon
                        size="xl"
                        icon={icon({ name: "pen-to-square", style: "regular" })}
                      />
                    </Icon>
                  </EditProfile>
                ) : (
                  <FollowBtn isFollowing={isFollowing} userId={userId} />
                )}
              </InfoHead>
              <Follow>
                <span className="followers">{totalFollowers} followers</span>
                <span className="following"> {totalFollowing} following</span>
              </Follow>
              <Message>{bio ? bio : "这个人什么都没有写!"}</Message>
              <Mood>Super excited!</Mood>
            </div>
          </div>
        </UserInfo>
        <Album>
          {photos?.length ? (
            photos.map((photo, index) => (
              <SimplePhotoContainer key={index}>
                <SimplePhoto alt="" src={photo?.file} />
                <HandlePhoto>
                  <ToggleLikeIcon
                    photoId={photo?.id!}
                    isLike={photo?.isLike!}
                    isSolid={true}
                    size="lg"
                  />
                  <Icon>
                    <FontAwesomeIcon
                      icon={icon({ name: "bookmark", style: "solid" })}
                      color="white"
                    />
                  </Icon>
                  {photo?.isMine && (
                    <Icon>
                      <FontAwesomeIcon
                        icon={icon({ name: "trash", style: "solid" })}
                        color="white"
                      />
                    </Icon>
                  )}
                </HandlePhoto>
              </SimplePhotoContainer>
            ))
          ) : (
            <span>nothing</span>
          )}
        </Album>
      </Container>
    </ProfileContainer>
  );
};
export default Profile;
