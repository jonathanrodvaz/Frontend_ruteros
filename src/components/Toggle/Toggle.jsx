import './Toggle.css';

import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

import { useAuth } from '../../contexts/authContext';
import { toggleFavoriteComment } from '../../services/API_proyect/comment.service';

const ToggleButton = ({ comment, setAllElementByPather }) => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleAddToFavorites = async () => {
    //console.log(setAllElementByPather);
    //console.log(comment);
    //console.log(user);
    setLoading(true);
    setRes(
      await toggleFavoriteComment(comment._id, {
        userIdPageDetail: comment.referenceUser,
      }),
    );
    setLoading(false);
  };
  useEffect(() => {
    if (res?.status == 200) {
      setAllElementByPather(() => res.data.data);
    }
  }, [res]);

  return (
    <button
      style={{ background: 'none', border: 'none' }}
      onClick={handleAddToFavorites}
      disabled={loading || user == null}
    >
      {user ? (
        comment.likes.includes(user._id) ? (
          <AiTwotoneHeart size={16} className="favorite-icon-red" />
        ) : (
          <AiOutlineHeart size={16} className="favorite-icon" />
        )
      ) : null}

      {!user && <AiTwotoneHeart size={16} className="favorite-icon-red" />}

      {comment.likes.length}
    </button>
  );
};
export default ToggleButton;
