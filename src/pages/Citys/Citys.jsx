import './Citys.css';

import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import CitiesList from '../../components/CitiesList/CitiesList';
import { useAuth } from '../../contexts/authContext';

const Citys = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });
  const { user } = useAuth();
  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h2 className="cities-title">
          ¡Ven y consulta nuestras visitas y rutas en ciudades!
        </h2>
      ) : (
        <h2 className="cities-title">Sigue nuestras rutas en ciudades</h2>
      )}

      <div className="spinner">
        {user == null && (
          <h3 className="cities-subTitle">
            Tienes que registrarte para crear nuevas rutas
          </h3>
        )}

        {user && (
          <NavLink to="/createCities2">
            <button className="cities-button-create">Crear Ruta</button>
          </NavLink>
        )}
      </div>

      <div className="cities-citiesList-container">{<CitiesList itemsPerPage={4} />}</div>
    </div>
  );
};

export default Citys;
