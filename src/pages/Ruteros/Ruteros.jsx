import { useMediaQuery } from 'react-responsive';

import RuterosList from '../../components/RuterosList/RuterosList';

const Ruteros = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });

  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h1>
          {/* ¡Echa un vistazo a nuestros <u>desarrolladores</u> freelance! */}
          Conoce a nuestros <u>Ruteros</u> más intrépidos!
        </h1>
      ) : (
        <h1>
          Sigue a nuestros <u>Ruteros</u>!
        </h1>
      )}

      <div className="spinner"></div>
      <RuterosList itemsPerPage={10} />
    </div>
  );
};

export default Ruteros;
