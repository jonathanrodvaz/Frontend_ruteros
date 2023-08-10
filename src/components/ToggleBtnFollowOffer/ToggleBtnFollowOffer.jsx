import './ToggleBtnFollowOffer.css';

import { useEffect, useState } from 'react';
//import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri';

import {
  offer_getFollowingStatus,
  offer_toggleInterestedOfferToUser,
} from '../../services/API_proyect/offer.service';

const ToggleBtnFollowOffer = ({ offerToFollowId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const initializeFavoriteState = async () => {
      try {
        const isFav = await offer_getFollowingStatus(offerToFollowId);

        if (isFav?.data?.status === "Offer is in user's offersInterested arr") {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.error('Error while checking favorite status', error);
      }
    };
    initializeFavoriteState();
  }, [offerToFollowId]);

  const handleAddToFavorites = async () => {
    try {
      const response = await offer_toggleInterestedOfferToUser(offerToFollowId);
      if (
        response?.data === "Offer added to user's offersInterested array" ||
        response?.data === "Offer removed from user's offersInterested array"
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
            Dejar de seguirla{' '}
            <RiUserUnfollowFill size={25} className="favorite-icon-pendiente-seguir" />
          </p>
        ) : (
          <p>
            {' '}
            Sigue esta oferta{' '}
            <RiUserFollowFill size={25} className="favorite-icon-siguiendo" />{' '}
          </p>
        )}
      </button>
    </div>
  );
};

export default ToggleBtnFollowOffer;
