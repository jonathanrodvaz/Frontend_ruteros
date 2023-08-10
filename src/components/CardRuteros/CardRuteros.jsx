import './CardRuteros.css';

// import WriteRatingForDeveloper from '../ratings/WriteRatingForDeveloper/WriteRatingForDeveloper'
import { FaMapMarker } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import ReadOnlyUserRating from '../ratings/ReadOnlyUserRating/ReadOnlyUserRating';
import ToggleBtnFollowUser from '../ToggleBtnFollowUser/ToggleBtnFollowUser';

const CardRuteros = ({ rutero }) => {
  const navigate = useNavigate();
  const pathById = `/ruteroDetails`;

  return (
    <section className="developer-Info">
      <div className="developer-Info-Toggle-Heart">
        <ToggleBtnFollowUser userToFollowId={rutero._id} />
      </div>
      <button
        className="developer-card-btn"
        onClick={() =>
          navigate(pathById, {
            state: { id: rutero._id },
          })
        }
      >
        <img
          className="developer-Info-img"
          src={rutero.image}
          alt={`developer's ${rutero.name} pic`}
        />

        <div className="developer-Info-tabla-name">
          {rutero.name} {rutero.surname}
          <p className="developer-Info-Ubicado">
            {' '}
            <FaMapMarker /> Ubicado/a en {rutero.city}
          </p>
        </div>
        {/* <h3 className="developer-Info-Rol">{rutero.rol}</h3> */}
      </button>

      <div className="developer-Info-ratingsByOthers">
        {/*--- Este componente hace la media de las estrellas ---*/}
        <ReadOnlyUserRating user={rutero} />
        {/* {developer && <WriteRatingForDeveloper userToRate={developer} />} */}
        <p>({rutero?.ratingsByOthers?.length} valoraciones)</p>
      </div>

      {/* Removed  because dosn´t look ok when the number of technologies is too long*/}
      {/* <div className="developer-Info-grupo-technologies">
        <h4 className="developer-Info-technologies">{developer.technologies}</h4>
      </div> */}
    </section>
  );
};

export default CardRuteros;
