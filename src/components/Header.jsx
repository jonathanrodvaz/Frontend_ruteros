import './Header.css';

import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';
// import { ThemeProvider, useTheme } from "@emotion/react";
// import GlobalStyles from '../../styles/globalStyles';
// import { createTheme } from "../../styles/utils";

const Header = () => {
  const { user, logout } = useAuth();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const handleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

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

  useEffect(() => {}, [ancho]);

  return (
    <>
      <header>
        <div className="titleFatherContainer">
          <NavLink to="/home" className="header-link-one">
            <img
              className="header-logo"
              alt="icon"
              src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1689612757/MochilaPersonita_r2kpic.png"
            ></img>

            <h3 className="titleWeb">Ru</h3>
            <h3 className="titleWeb-second">Teros</h3>
          </NavLink>
        </div>
        <nav className="navHeader" ref={navRef}>
          <div className="navButton">
            <NavLink to="/home">
              <button className="buttonNav" onClick={showNavbar}>
                Inicio
              </button>
            </NavLink>
            {/* <NavLink to="/offers">
              <button className="buttonNav">Ofertas</button>
            </NavLink> */}
            <NavLink to="/ruteros">
              <button className="buttonNav" onClick={showNavbar}>
                Ruteros
              </button>
            </NavLink>
            <NavLink to="/citys">
              <button className="buttonNav" onClick={showNavbar}>
                Ciudades
              </button>
            </NavLink>
            <NavLink to="/mountainRoutes">
              <button className="buttonNav" onClick={showNavbar}>
                Montañas
              </button>
            </NavLink>
            <NavLink to="/aboutUs">
              <button className="buttonNav" onClick={showNavbar}>
                AboutUs
              </button>
            </NavLink>
            <NavLink to="/chat" className="header-link-two">
              <img
                className="chat-logo"
                alt="icon"
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687966558/comment-dots-regular_urt3iu.png"
              ></img>
            </NavLink>
            {user == null && (
              <>
                <NavLink to="/register">
                  <button className="buttonNav" onClick={showNavbar}>
                    Register
                  </button>
                </NavLink>
                <NavLink to="/login">
                  <button className="buttonNav" onClick={showNavbar}>
                    Login
                  </button>
                </NavLink>
              </>
            )}
            {user && (
              <div className="dropdown">
                <button className="iconNav iconProfile" onClick={handleProfileDropdown}>
                  <img className="profileCircle" src={user.image} alt={user.user} />
                </button>
                {profileDropdownOpen && (
                  <div className="dropdown-content">
                    <NavLink to="/profile" className="ProfileNav">
                      Profile
                    </NavLink>
                    <button className="buttonNavDown" onClick={() => logout()}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </div>
        </nav>
        {ancho < 600 && (
          <>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
