import './ChangePassword2.css';
import '../../styles/swal_styles.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useAuth } from '../../contexts/authContext';
import useChangePasswordError from '../../hooks/useChangePasswordError';
import { changePasswordUser } from '../../services/API_proyect/user.service';

const ChangePassword2 = () => {
  const { setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [changePasswordOk, setChangePasswordOk] = useState(false);

  //! --------- funcion que controla el formulario-----------------------
  const formSubmit = async (formData) => {
    const { password, newPassword, confirmPassword } = formData;
    if (newPassword == confirmPassword) {
      Swal.fire({
        title: '¿De verdad quieres restablecer tu contraseña?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(73, 193, 162)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        position: 'center',
        customClass: 'custom-swal-bg',
      }).then(async (result) => {
        if (result.isConfirmed) {
          setSend(true);
          setRes(await changePasswordUser({ password, newPassword }));
          setSend(false);
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Parece que las contraseñas no son las mismas. ¡Prueba otra vez!',
        showConfirmButton: false,
        timer: 2500,
        customClass: 'custom-swal-bg',
      });
    }
  };

  //! --------------- USEEFFECT  que controla la gestion de errores ----------------------
  useEffect(() => {
    // console.log(res);
    useChangePasswordError(res, setChangePasswordOk);
  }, [res]);

  //! ---------------- LOS CONDICIONALES CON LOS ESTADOS DE NAVEGACION --------------------

  if (changePasswordOk) {
    //! no utilizamos el logout aunque no pasaria nada. No lo utlizo porque da warning
    //logout();
    setUser(null);
    localStorage.removeItem('user');
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="form-wrap">
        <p className="changePassword-text-new-password">Cambiar Contraseña</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="password_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder"></label>
            <div className="password_container_form-current-new-confirm">
              <input
                className="input_user"
                placeholder="Contraseña actual"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register('password', { required: true })}
              />

              <div className="newPassword_container form-group">
                <label htmlFor="custom-input" className="custom-placeholder"></label>
                <input
                  className="input_user"
                  placeholder="Nueva contraseña"
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  autoComplete="false"
                  {...register('newPassword', { required: true })}
                />
              </div>
              <div className="confirmPassword_container form-group">
                <label htmlFor="custom-input" className="custom-placeholder"></label>
                <input
                  className="input_user"
                  placeholder="confirmar nueva contraseña"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="false"
                  {...register('confirmPassword', { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="btn_container-center-papa">
            <div className="btn_container">
              <button
                className="btn_profile_general"
                type="submit"
                disabled={send}
                //style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                style={
                  {
                    // background: send ? '#008000' : 'var(--background-color-button-login)',
                  }
                }
              >
                CAMBIAR CONTRASEÑA
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword2;
