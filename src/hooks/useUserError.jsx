import '../styles/swal_styles.css';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useUserError = (res, setRegisterOk) => {
  //! 200 --->  respuesta ok register ok
  if (res?.status == 200) {
    localStorage.setItem('data', JSON.stringify(res));
    setRegisterOk(() => true);
    Swal.fire({
      icon: 'success',
      title: '¡Hola, bienvenida/o a nuestra web de Ruteros!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }

  //! res --> 409 --> Usuario ya registrado

  if (res?.response?.status == 409)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Parece que ese usuario ya existe. ¡Prueba uno diferente!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  //! res --> 500 --> Error general del server

  if (res?.response?.status == 500)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal server error!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });

  //! res --> 404 --> codigo en el envio del codigo

  //! error --> nombre de usuario ya exista // error ---> correo ya existe

  if (res?.response?.data?.includes('Fail registering user'))
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ese email ya está en la base e datos. ¡Probemos con otro!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });

  //! error ---> validacion de la contraseña

  if (res?.response?.data?.includes('fail creating user'))
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Asegúrese de que su contraseña tenga al menos 8 caracteres, incluidas mayúsculas, minúsculas y un carácter especial.',
      showConfirmButton: false,
      timer: 1800,
      customClass: 'custom-swal-bg',
    });
};

export default useUserError;
