import './CardMountainRoute2.css';

import { BiTime } from 'react-icons/bi';
import { FaMapMarker } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { MdReportProblem } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import ReadOnlyMountainRouteRating from '../ratings/ReadOnlyMountainRouteRating/ReadOnlyMountainRouteRating';
import ToggleBtnFollowMountainRoute from '../ToggleBtnFollowMountainRoute/ToggleBtnFollowMountainRoute';

const CardMountainRoute2 = ({ mountainRoute }) => {
  const navigate = useNavigate();
  const pathById = `/mountainRouteDetails2`;

  return (
    <section className="mountainRoute-Info">
      {/* <div className="mountainRoute_ToggleBtnFollowMontainRoute">
        <ToggleBtnFollowMountainRoute mountainRouteToFollowId={mountainRoute._id} />
      </div> */}
      <button
        className="mountainRoute-card-btn"
        onClick={() =>
          navigate(pathById, {
            state: { id: mountainRoute._id },
          })
        }
      >
        <div className="mountainRoute-Info-img-valoraciones">
          <img
            className="mountainRoute-Info-img"
            src={mountainRoute.image}
            alt={`mountainRoute's ${mountainRoute.routeName} pic`}
          />
          <div>
            {/*--- Este componente hace la media de las estrellas ---*/}
            <ReadOnlyMountainRouteRating mountainRoute={mountainRoute} />
            <p>({mountainRoute?.ratings?.length} valoraciones)</p>
          </div>
        </div>
        <div className="mountainRoute-Info-toda_la_carta">
          <div className="mountainRoute-Info-routeName-descriptionGeneral">
            <div>
              <h4 className="mountainRoute-Info-name">{mountainRoute.routeName}</h4>
              <p className="mountainRoute-Info-descriptionGeneral">
                {mountainRoute.descriptionGeneral}
              </p>
            </div>
            {/* <div>
                            <div className="mountainRoute_ToggleBtnFollowMontainRoute">
                                <ToggleBtnFollowMountainRoute mountainRouteToFollowId={mountainRoute._id} />
                            </div>
                        </div> */}
          </div>
          <div className="mountainRoute-Info-separar-info-general-routeState">
            <div className="mountainRoute-Info-separar-info-general">
              <p className="mountainRoute-Info-distance">
                {' '}
                <GiPathDistance className="cardmountainRoute2-GiPathDistance" />
                {mountainRoute.routeDistance} kms
              </p>
              <p className="mountainRoute-Info-routeDuration">
                {' '}
                <BiTime className="mountainRoute-BiTime" />
                {mountainRoute.routeDuration} Horas
              </p>
              <p className="mountainRoute-difficulty">
                <MdReportProblem className="mountainRoute-MdReportProblem" />
                {mountainRoute.difficulty}
              </p>
              <p className="">
                {' '}
                <FaMapMarker className="mountainRoute-FaMapMarker" />{' '}
                {mountainRoute.routeLocation}
              </p>
            </div>
            <div className="mountainRoute-Info-separar-routeState">
              <p className="">{mountainRoute.routeState}</p>
            </div>
          </div>
        </div>
      </button>
      <div className="mountainRoute_ToggleBtnFollowMontainRoute">
        <ToggleBtnFollowMountainRoute mountainRouteToFollowId={mountainRoute._id} />
      </div>
    </section>
  );
};

export default CardMountainRoute2;
