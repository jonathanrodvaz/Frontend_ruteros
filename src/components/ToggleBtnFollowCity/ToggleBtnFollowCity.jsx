import './ToggleBtnFollowCity.css';

import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

//import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri';
import {
  getCityFollowingStatus,
  toggleInterestedCityToUser,
} from '../../services/API_proyect/city.service';

const ToggleBtnFollowCity = ({ cityToFollowId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const initializeFavoriteState = async () => {
      try {
        const isFav = await getCityFollowingStatus(cityToFollowId);

        if (isFav?.data?.status === "City is in user's citysInterested arr") {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.error('Error while checking favorite status', error);
      }
    };
    initializeFavoriteState();
  }, [cityToFollowId]);

  const handleAddToFavorites = async () => {
    try {
      const response = await toggleInterestedCityToUser(cityToFollowId);
      if (
        response?.data === "City added to user's citysInterested array" ||
        response?.data === "City removed from user's citysInterested array"
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
            {/* Sigue esta ruta de ciudad{' '} */}
            <AiOutlineHeart size={27} className="favorite-icon-siguiendo" />{' '}
          </p>
        )}
      </button>
    </div>
  );
};

export default ToggleBtnFollowCity;

//Version anterior y funcional
// import './ToggleBtnFollowCity.css';

// import { useEffect, useState } from 'react';
// import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

// import {
//   getCityFollowingStatus,
//   toggleInterestedCityToUser,
// } from '../../services/API_proyect/city.service';

// const ToggleBtnFollowCity = ({ cityToFollowId }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const initializeFavoriteState = async () => {
//       try {
//         const isFav = await getCityFollowingStatus(cityToFollowId);

//         if (isFav?.data?.status === 'cityRoute is in following arr') {
//           setIsFavorite(true);
//         } else {
//           setIsFavorite(false);
//         }
//       } catch (error) {
//         console.error('Error while checking favorite status', error);
//       }
//     };
//     initializeFavoriteState();
//   }, [cityToFollowId]);

//   const handleAddToFavorites = async () => {
//     try {
//       const response = await toggleInterestedCityToUser(cityToFollowId);
//       if (response?.data?.status === 'Success updating following -- Followers') {
//         setIsFavorite(!isFavorite);
//       }

//       // setIsFavorite(!isFavorite);
//     } catch (error) {
//       console.error('Error while adding to favorites', error);
//     }
//   };

//   return (
//     <button
//       onClick={handleAddToFavorites}
//       className={`ToggleButtonCity ${isFavorite ? 'favorite' : ''}`}
//     >
//       {isFavorite ? (
//         <AiTwotoneHeart size={25} className="favorite-icon" />
//       ) : (
//         <AiOutlineHeart size={25} className="favorite-icon" />
//       )}
//     </button>
//   );
// };

// export default ToggleBtnFollowCity;
