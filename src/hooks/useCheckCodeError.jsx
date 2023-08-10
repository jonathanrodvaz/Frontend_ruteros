import '../styles/swal_styles.css';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useCheckCodeError = (res, setDeleteUser, setOkCheck) => {
  // -------404 o un 500  en este caso --------->res.response
  // -------200 ---> entramos directos a la ---->res.data
  //! -------status: 500

  if (res?.response?.status == 500)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal Server Error ❎!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  //! -------200:  ok delete user
  if (res?.data?.delete?.includes('Fail creating user')) {
    setDeleteUser(() => true);

    Swal.fire({
      icon: 'error',
      title: 'No correct Code ❎.',
      text: 'Oops, tu usuario ya no está activo. ¡Vamos a configurarlo de nuevo!',
      showConfirmButton: false,
      timer: 2500,
      customClass: 'custom-swal-bg',
    });
  }

  // //! -------200: error delete user
  // if (res?.data?.delete?.includes("error delete user")) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "No correct Code ❎.",
  //     text: "No delete user. Try again, please.",
  //     showConfirmButton: false,
  //     timer: 2500,
  //   });
  // }
  //! ------200: testCheckOk:
  if (res?.data?.testCheckOk?.toString() == 'true') {
    setOkCheck(() => true);
    Swal.fire({
      icon: 'success',
      title: 'Ok, código correcto ✅',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }
  //! ------200: testCheckOk: false

  if (res?.data?.testCheckOk?.toString() == 'false') {
    Swal.fire({
      icon: 'error',
      title: 'Internal Server Error ❎.',
      text: 'Usuario no eliminado. Por favor, inténtalo de nuevo',
      showConfirmButton: false,
      timer: 2500,
      customClass: 'custom-swal-bg',
    });
  }

  //! ------404: User not found && 404: error.message Update One
  if (res?.response?.status == 404)
    Swal.fire({
      icon: 'error',
      title: 'Código de confirmación incorrecto ❎.',
      text: 'Usuario eliminado de la base de datos. Regístrese de nuevo.',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
};

export default useCheckCodeError;
