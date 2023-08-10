import '../styles/swal_styles.css';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';
const useForgotPasswordError = (res, setForgetOk) => {
  //! ------------------- 200 => {sendPassword: true, updateUser: true} && 200 => {updateUser: false, sendPassword: true}

  if (res?.status == 200) {
    if (res?.data?.sendPassword == true && res?.data?.updateUser == true) {
      setForgetOk(() => true);
      return Swal.fire({
        icon: 'success',
        title: 'Contraseña cambiada correctamente',
        text: 'Email enviado con su nueva contraseña',
        showConfirmButton: false,
        timer: 3000,
        customClass: 'custom-swal-bg',
      });
    }

    if (res?.data?.sendPassword == true && res?.data?.updateUser == false) {
      return Swal.fire({
        icon: 'error',
        title: 'Not valid email',
        text: 'Oops, no podemos cambiar su contraseña porque su email no es válido',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'custom-swal-bg',
      });
    }
  }
  //! ------------------- 404 => User no register -
  if (res?.response?.data?.includes('Fail updating user') && res?.response?.status == 404)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario no registrado ❎. Introduzca un email válido',
      showConfirmButton: false,
      timer: 3000,
      customClass: 'custom-swal-bg',
    });

  //! ------------------- 500 => Interval Server Error
  if (res?.response?.status == 500)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal server error ❎, por favor, pruebe otra vez!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });

  //! ------------------- 404 => 'dont send email and dont update user'
  if (res?.response?.data?.includes('Fail updating user') && res?.response?.status == 404)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña no actualizada. Por favor, inténtalo de nuevo!',
      showConfirmButton: false,
      timer: 3000,
      customClass: 'custom-swal-bg',
    });
};

export default useForgotPasswordError;
