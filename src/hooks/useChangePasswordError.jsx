import '../styles/swal_styles.css';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';
const useChangePasswordError = (res, setChangePasswordOk) => {
  //!  --------- 200: {updateUser: true}
  if (res?.data?.updateUser?.toString() == 'true') {
    setChangePasswordOk(() => true);
    Swal.fire({
      icon: 'success',
      title: 'Password succesfully changed ✅',
      showConfirmButton: false,
      timer: 1500,
      position: 'center',
      customClass: 'custom-swal-bg',
    });
  }

  //!  --------- 200: {updateUser: false}

  if (res?.data?.updateUser?.toString() == 'false') {
    Swal.fire({
      icon: 'error',
      title: 'Internal server error',
      text: 'Oops, let’s give it another shot!',
      showConfirmButton: false,
      timer: 2500,
      customClass: 'custom-swal-bg',
    });
  }

  //! ---------- 404: {error.message} --> general   //REVISAR IMPORTANTE
  if (
    !res?.response?.data?.includes('password dont match') &&
    res?.response?.status == 404
  )
    Swal.fire({
      icon: 'error',
      title: 'Internal server error',
      text: 'Oops, let’s give it another shot!',
      showConfirmButton: false,
      timer: 3000,
      customClass: 'custom-swal-bg',
    });

  //! ---------- 404: password dont match

  if (res?.response?.data?.includes('Fail matching passwords'))
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Uh-oh, the old password doesn’t match with the new password. Let’s try again!',
      showConfirmButton: false,
      timer: 3000,
      customClass: 'custom-swal-bg',
    });

  //! ---------- 500: internal server error

  if (res?.response?.status == 500)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal Server Error!',
      showConfirmButton: false,
      timer: 1500,
      customClass: 'custom-swal-bg',
    });
};

export default useChangePasswordError;
