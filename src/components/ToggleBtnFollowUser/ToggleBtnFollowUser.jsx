import './ToggleBtnFollowUser.css';

import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

import {
  developer_following_follower,
  getFollowingStatus,
} from '../../services/API_proyect/developer.service';

const ToggleBtnFollowUser = ({ userToFollowId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const initializeFavoriteState = async () => {
      try {
        const isFav = await getFollowingStatus(userToFollowId);

        if (isFav?.data?.status === 'user is in following arr') {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.error('Error while checking favorite status', error);
      }
    };
    initializeFavoriteState();
  }, [userToFollowId]);

  const handleAddToFavorites = async () => {
    try {
      const response = await developer_following_follower(userToFollowId);
      if (response?.data?.status === 'Success updating following -- Followers') {
        setIsFavorite(!isFavorite);
      }

      // setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error while adding to favorites', error);
    }
  };

  return (
    <button
      onClick={handleAddToFavorites}
      className={`ToggleButtonDeveloper ${isFavorite ? 'favorite' : ''}`}
    >
      {isFavorite ? (
        <AiTwotoneHeart size={25} className="favorite-icon" />
      ) : (
        <AiOutlineHeart size={25} className="favorite-icon" />
      )}
    </button>
  );
};

export default ToggleBtnFollowUser;
