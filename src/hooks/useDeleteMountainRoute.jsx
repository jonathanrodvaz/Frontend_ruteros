import '../styles/swal_styles.css';

import Swal from 'sweetalert2';
const handleMountainRouteDeletionResponse = (res) => {
  if (res?.status === 200) {
    Swal.fire({
      icon: 'success',
      title: 'Ruta eliminada con éxito',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error al eliminar la ruta',
      text: 'Hubo un problema al intentar eliminar la ruta. Por favor, intentelo de nuevo.',
      showConfirmButton: true,
      customClass: 'custom-swal-bg',
    });
  }
};

export default handleMountainRouteDeletionResponse;
