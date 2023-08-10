import './RegisterNote.css';

import { TbPlant2 } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const RegisterNote = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div className="registerNote-container">
      <TbPlant2 size={isLargeScreen ? 160 : 80} />

      <p className="registerNote-welcome-text">Welcome to our Forum of technology!</p>

      <div className="registerNote-logo">
        <TbPlant2 size={isLargeScreen ? 50 : 30} />
        <h3 className="registerNote-Digital-Nexus-text">Digital Nexus</h3>
      </div>

      <p className="registerNote-info-text">
        Our site is full of great resources and information, so feel free to explore.
        Check our site, full of valuable resources and information. Discover a world of
        knowledge and inspiration at your fingertips. Go dive in and satisfy your
        curiosity.
      </p>

      <p className="registerNote-please-text">Please, register to access the page!</p>

      <div className="registerNote-register-login-btns">
        <button className="registerNote-btn" onClick={() => navigate('/register')}>
          GO TO REGISTER
        </button>

        <button className="registerNote-btn" onClick={() => navigate('/login')}>
          GO TO LOGIN
        </button>
      </div>
    </div>
  );
};

export default RegisterNote;
