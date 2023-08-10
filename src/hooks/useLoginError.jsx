import '../styles/swal_styles.css';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useLoginError = (res, setLoginOk, userlogin) => {
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

  //! ---------- 200 : {token , user}
  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
      _id: res.data.user._id,
    };

    const dataSting = JSON.stringify(dataCustom);
    userlogin(dataSting);
    setLoginOk(() => true);
    Swal.fire({
      icon: 'success',
      title: '¡Hola, bienvenida/o a nuestra web de Ruteros!',
      text: 'Iniciado sesión con éxito ✅',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
  }

  //! ---------- 404: password dont match
  if (res?.response?.data?.includes('Fail matching passwords'))
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Password don't match!",
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });

  //! ---------- 404: User no register

  if (res?.response?.data?.includes('Fail registering user'))
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario no registrado',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });

  //! ---------- Wrong Password

  if (res?.response?.data?.includes('Wrong password, please try again'))
    Swal.fire({
      icon: 'error',
      title: 'Contraseña incorrecta',
      text: 'La contraseña que introducida es incorrecta. Inténtalo de nuevo',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });

  //! ---------- Wrong Email

  if (res?.response?.data?.includes('Wrong email address, please try again'))
    Swal.fire({
      icon: 'error',
      title: 'Email incorrecto',
      text: 'El correo electrónico introducido es incorrecto. Inténtalo de nuevo',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
};

export default useLoginError;
