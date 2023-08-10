import './CheckCode.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';
import useAutoLogin from '../hooks/useAutoLogin';
import useCheckCodeError from '../hooks/useCheckCodeError';
import useResendCodeError from '../hooks/useResendCodeError';
import {
  checkCodeConfirmationUser,
  resendCodeConfirmationUser,
} from '../services/API_proyect/user.service';

const CheckCode = () => {
  const { allUser, userlogin, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [okCheck, setOkCheck] = useState(false);

  //! -------FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-------
  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem('user');

    if (userLocal == null) {
      const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode),
        email: allUser.data.user.email,
      };
      setSend(true);
      setRes(await checkCodeConfirmationUser(custFormData));
      setSend(false);
    } else {
      const parseUser = JSON.parse(userLocal);
      const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode),
        email: parseUser.email,
      };
      setSend(true);
      setRes(await checkCodeConfirmationUser(custFormData));
      setSend(false);
    }
  };

  const handleReSend = async () => {
    const userLocal = localStorage.getItem('user');
    if (userLocal == null) {
      const formDataCustom = { email: allUser.data?.user?.email };
      //console.log(formDataCustom);
      setSend(true);
      setResResend(await resendCodeConfirmationUser(formDataCustom));
      setSend(false);
    } else {
      // cuando no sea nulll quiere decir que la llamada la estoy haciendo despues de logarme
      const parseUser = JSON.parse(userLocal);
      const formDataCustom = { email: parseUser.email };
      setSend(true);
      setResResend(await resendCodeConfirmationUser(formDataCustom));
      setSend(false);
    }
  };

  //! --------USE EFFECT QUE NOSC SIRVE CUANDO CAMBIA RES A LANZAR EL COMPROBADOR DE ERRORES
  useEffect(() => {
    useCheckCodeError(res, setDeleteUser, setOkCheck);
  }, [res]);

  useEffect(() => {
    //console.log(resResend);
    useResendCodeError(resResend);
  }, [resResend]);

  //! -------- PONEMOS LOS CONDICIONALES QUE EVALUAN SI ESTAN A TRUE LOS ESTADOS DE NAVEGACION (deleUser, okCheck)

  if (deleteUser) {
    return <Navigate to="/register" />;
  }
  if (okCheck) {
    if (!localStorage.getItem('user')) {
      useAutoLogin(allUser, userlogin);
    } else {
      const currentUser = localStorage.getItem('user');
      const parseCurrentUser = JSON.parse(currentUser);
      const customUser = {
        ...parseCurrentUser,
        check: true,
      };
      const customUserString = JSON.stringify(customUser);

      //! No utilzamos directamente el userLogin porque ya estamos logados solo tenemos...ç
      //! que actualizar el localstorage y el user el contesto para que la nav se renderice correctamente

      //userlogin(customUserString);
      setUser(() => customUser);
      localStorage.setItem('user', customUserString);

      return <Navigate to="/home" />;
    }
  }

  return (
    <div className="checkCode-container">
      <h2 className="checkCode-title">Verifica tu código</h2>

      <form className="checkCode-form" onSubmit={handleSubmit(formSubmit)}>
        <input
          placeholder="Escribe el código"
          htmlFor="custom-input"
          className="checkCode-input_user"
          type="text"
          id="name"
          name="name"
          autoComplete="false"
          {...register('confirmationCode', { required: false })}
        />

        <button id="btnCheck" className="checkCode-btn-res" type="submit" disabled={send}>
          Verificar
        </button>

        <button
          id="btnResend"
          className="checkCode-btn-res"
          disabled={send}
          onClick={() => handleReSend()}
        >
          Reenviar
        </button>

        <p className="checkCode-bottom-text">
          Si el códifo no es correcto tu usuario será borrado y tendras que registrarte de
          nuevo.{' '}
        </p>
      </form>
    </div>
  );
};

export default CheckCode;
