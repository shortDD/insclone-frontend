import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useToggleLike } from "../apollo/hooks/useToggleLike";
import { Icon } from "./header";

interface IProps {
  photoId: number;
  isLike: boolean;
  isSolid?: boolean;
  size?: SizeProp;
}
const ToggleLikeIcon: React.FC<IProps> = ({
  photoId,
  isLike,
  isSolid = false,
  size = "xl",
}) => {
  //--------------------点赞--------------------
  const [likePhoto, { loading }] = useToggleLike(photoId);
  const toggleLike = () => {
    if (loading) return;
    likePhoto({
      variables: {
        photoId,
      },
    });
  };
  //--------------------点赞--------------------

  return (
    <>
      {isLike ? (
        <Icon>
          <FontAwesomeIcon
            onClick={toggleLike}
            size={size}
            icon={icon({
              name: "heart",
              style: "solid",
            })}
            color="red"
            style={{ transition: "none" }}
          />
        </Icon>
      ) : (
        <Icon>
          {isSolid ? (
            <FontAwesomeIcon
              onClick={toggleLike}
              size={size}
              icon={icon({
                name: "heart",
                style: "solid",
              })}
              color="white"
            />
          ) : (
            <FontAwesomeIcon
              onClick={toggleLike}
              size={size}
              icon={icon({
                name: "heart",
                style: "regular",
              })}
            />
          )}
        </Icon>
      )}
    </>
  );
};

export default ToggleLikeIcon;
