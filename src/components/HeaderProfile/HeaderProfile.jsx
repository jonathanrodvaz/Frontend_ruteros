import './HeaderProfile.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const pathById = `/ruteroDetails`;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDataProfile = await getUserById(user._id);
        if (userDataProfile) {
          setUserData(userDataProfile.data);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, [user]);

  return (
    <div className="user-profile">
      <button
        className="developer-card-btn"
        onClick={() =>
          navigate(pathById, {
            state: { id: user._id },
          })
        }
      >
        <div className="user-image">
          {userData && <img src={userData.image} alt={userData.name} />}
        </div>
      </button>

      <div className="user-info">
        {userData && (
          <>
            <p className="follower-container">{userData.following?.length} Siguiendo </p>
            <p className="follower-container">{userData.followers?.length} Seguidores </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
