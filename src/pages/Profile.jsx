import './Profile.css';

import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import UserProfile from '../components/HeaderProfile/HeaderProfile';
import { useAuth } from '../contexts/authContext';
import useDeleteUser from '../hooks/useDeleteUser';

const Profile = () => {
  const navigate = useNavigate();
  const { setUser, logout } = useAuth();
  const [activeButton, setActiveButton] = useState('Profile');
  const [ancho, setAncho] = useState(window.innerWidth);

  const handleResize = () => {
    setAncho(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="profile-father-Container">
        {ancho < 800 && (
          <>
            <div id="wrap">
              <div id="sidebar">
                <NavLink to="/profile">
                  <div className="cambiar-contrasena">
                    <span>Perfil</span>
                  </div>
                </NavLink>
                <NavLink to="/profile/changePassword">
                  <div className="perfil-responsive">
                    <span>Contraseña</span>
                  </div>
                </NavLink>
                <NavLink to="/profile/changeEmail">
                  <div className="cambiar-email">
                    <span>Email</span>
                  </div>
                </NavLink>
                <NavLink to="/profile/experience">
                  <div className="profile-experience">
                    <span>Experiencia</span>
                  </div>
                </NavLink>
                <NavLink to="/profile/habilities">
                  <div className="habilities-responsive">
                    <span>Habilidades</span>
                  </div>
                </NavLink>
                <NavLink to="/profile/ProfileCity">
                  <div className="citys-responsive">
                    <span>Ciudad</span>
                  </div>
                </NavLink>
                <NavLink to="/profile/ProfileMountain">
                  <div className="mountainRoutes-responsive">
                    <span>Montaña</span>
                  </div>
                </NavLink>
                ¡
                <div
                  className="borrar-perfil"
                  onClick={() => {
                    useDeleteUser(setUser, logout());
                    setActiveButton('Delete');
                  }}
                >
                  <span>Borrar perfil </span>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="header-profile">
          <UserProfile />
        </div>
        <div className="mainContainer">
          {ancho > 800 ? (
            <div className="containerNavProfile">
              <div className="containerNavProfile-perfil-contraseña-email-experiencia">
                <button
                  className={`btn-profile btn-profile-first ${
                    activeButton === 'Profile' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveButton('Profile');
                    navigate('/profile');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="profile icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690566021/UserFTProyect/profileIcons/profile_ub7zht.png"
                  ></img>
                  Perfil
                </button>

                <button
                  className={`btn-profile ${activeButton === 'Password' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveButton('Password');
                    navigate('/profile/changePassword');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="password icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690565668/UserFTProyect/profileIcons/reset-password_ydodzt.png"
                  ></img>
                  Contraseña
                </button>

                <button
                  className={`btn-profile ${activeButton === 'Email' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveButton('Email');
                    navigate('/profile/changeEmail');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="email icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690565543/UserFTProyect/profileIcons/email_gpvxwe.png"
                  ></img>
                  Email
                </button>
                <button
                  className={`btn-profile ${
                    activeButton === 'Experience' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveButton('Experience');
                    navigate('/profile/experience');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="route experience icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1689612757/MochilaPersonita_r2kpic.png"
                  ></img>
                  Experiencia
                </button>
              </div>
              <div className="containerNavProfile-habiliddes-rutas-borrar">
                <button
                  className={`btn-profile ${
                    activeButton === 'Habilities' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveButton('Habilities');
                    navigate('/profile/habilities');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="skill icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690564462/UserFTProyect/profileIcons/logical-thinking_hnhvn3.png"
                  ></img>
                  Habilidades
                </button>

                <button
                  className={`btn-profile ${activeButton === 'Citys' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveButton('Citys');
                    navigate('/profile/ProfileCity');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="city route icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690563951/UserFTProyect/profileIcons/city-route_xcpnlu.png"
                  ></img>
                  Rutas Ciudad
                </button>

                <button
                  className={`btn-profile ${
                    activeButton === 'MountainRoutes' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveButton('MountainRoutes');
                    navigate('/profile/ProfileMountain');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="mountain route icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690563951/UserFTProyect/profileIcons/mountain-route_oyq3ui.png"
                  ></img>
                  Rutas Montaña
                </button>

                <button
                  className={`btn-profile btn-profile-last ${
                    activeButton === 'Delete' ? 'active' : ''
                  }`}
                  onClick={() => {
                    useDeleteUser(setUser, logout);
                    setActiveButton('Delete');
                  }}
                >
                  <img
                    className="profile-icon"
                    alt="delete user icon"
                    src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690566588/UserFTProyect/profileIcons/delete-user_yqjpxj.png"
                  ></img>
                  Borrar Perfil
                </button>
              </div>
            </div>
          ) : null}

          <div className="fluidContainerProfile">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
