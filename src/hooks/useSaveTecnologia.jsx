import '../styles/swal_styles.css';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';
const handleTechnologyUpdateResponse = (res) => {
  if (res?.status === 200) {
    Swal.fire({
      icon: 'success',
      title: 'Tecnologías actualizadas con éxito!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  } else if (res?.status === 400 || res?.status === 500) {
    Swal.fire({
      icon: 'error',
      title: 'Error al actualizar tecnologías',
      text: 'Hubo un problema al intentar actualizar las tecnologías. Por favor, intenta de nuevo.',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  } else if (res?.status === 404) {
    Swal.fire({
      icon: 'warning',
      title: 'Recurso no encontrado',
      text: 'La operación solicitada no se puede completar porque el recurso requerido no se encontró.',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }
};

export default handleTechnologyUpdateResponse;
