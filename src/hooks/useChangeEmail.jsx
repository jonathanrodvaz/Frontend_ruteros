import '../styles/swal_styles.css';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';
const useChangeEmailError = (res, setChangeEmailOK) => {
  let contador;
  //! if para comprobar con un contador que no tenemos nada en false es decir no se ha actualizado
  if (res?.data) {
    contador = 0;
    res?.data?.testUpdate?.map((item) => {
      console.log('entro');
      for (let clave in item) {
        if (item[clave] == false) {
          contador++;
        }
      }
    });
  }

  //! ---------- 200: cuando se ha actualizado todo
  if (contador == 0) {
    // let _check = '';
    // res?.data?.testUpdate?.forEach((item) => {
    //   for (let clave in item) {
    //     if (item[clave] == true) {
    //       _check += `- ${clave} - `;
    //     }
    //   }
    // });
    // console.log(_check);
    setChangeEmailOK(() => true);
    Swal.fire({
      icon: 'success',
      title: `Actualizado correctamente el cambio del email`,
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }
  //! //! ----------200:  cuando algo no se actualiza
  if (contador > 0) {
    let error = '';
    res?.data?.testUpdate?.forEach((item) => {
      for (let clave in item) {
        if (item[clave] == false) {
          error += `- ${clave} - `;
        }
      }
    });
    Swal.fire({
      icon: 'error',
      title: `Error updating email: ${error} ❎`,
      text: 'Por favor, prueba otra vez.',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }
  if (res?.response?.status == 403) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El código de confirmación es incorrecto! Por favor intentalo de nuevo.',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }
  if (res?.response?.status == 409) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: '¡El email ya está en uso! Por favor, utilice un email diferente.',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }
};
export default useChangeEmailError;
