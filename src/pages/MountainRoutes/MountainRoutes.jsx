import './MountainRoutes.css';

import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import MountainRoutesList from '../../components/MountainRoutesList/MountainRoutesList';
import { useAuth } from '../../contexts/authContext';

const MountainRoutes = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });
  const { user } = useAuth();

  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h2 className="mountainRouteTit">
          ¡Ven y consulta todas nuestras rutas de montaña!
        </h2>
      ) : (
        <h2 className="mountainRouteTit">Sigue nuestras rutas de montaña</h2>
      )}
      <div className="spinner">
        {user == null && (
          <h3 className="mountainRoute-subTitle">
            Tienes que registrarte para crear nuevas rutas
          </h3>
        )}

        {user && (
          <NavLink to="/createMountainRoute2">
            <button className="mountainRoute-button-create">Crear Ruta</button>
          </NavLink>
        )}
      </div>

      {<MountainRoutesList itemsPerPage={4} />}
    </div>
  );
};

export default MountainRoutes;
