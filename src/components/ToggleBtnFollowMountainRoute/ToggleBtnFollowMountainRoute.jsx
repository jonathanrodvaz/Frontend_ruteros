import './ToggleBtnFollowMountainRoute.css';

import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

//import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri';
import {
  mountainRoute_getFollowingStatus,
  mountainRoute_toggleInterestedMountainRouteToUser,
} from '../../services/API_proyect/mountainRoute.service';

const ToggleBtnFollowMountainRoute = ({ mountainRouteToFollowId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const initializeFavoriteState = async () => {
      try {
        const isFav = await mountainRoute_getFollowingStatus(mountainRouteToFollowId);

        if (isFav?.data?.status === "Route is in user's mountainRoutesInterested array") {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.error('Error while checking favorite status', error);
      }
    };
    initializeFavoriteState();
  }, [mountainRouteToFollowId]);

  const handleAddToFavorites = async () => {
    try {
      const response = await mountainRoute_toggleInterestedMountainRouteToUser(
        mountainRouteToFollowId,
      );
      if (
        response?.data ===
          "Mountain route added to user's mountainRoutesInterested array" ||
        response?.data ===
          "Mountain route removed from user's mountainRoutesInterested array"
      ) {
        setIsFavorite(!isFavorite);
      }
    } catch (error) {
      console.error('Error while adding to favorites', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToFavorites}
        className={`no-border-button ${isFavorite ? 'favorite' : ''}`}
      >
        {isFavorite ? (
          <p>
            {' '}
            {/* Dejar de seguirla{' '} */}
            <AiTwotoneHeart size={27} className="favorite-icon-pendiente-seguir" />
          </p>
        ) : (
          <p>
            {' '}
            {/* Sigue esta ruta de montaña{' '} */}
            <AiOutlineHeart size={27} className="favorite-icon-siguiendo" />{' '}
          </p>
        )}
      </button>
    </div>
  );
};

export default ToggleBtnFollowMountainRoute;
