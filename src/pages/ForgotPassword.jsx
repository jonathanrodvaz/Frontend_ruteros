import './ForgotPassword.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import useForgotPasswordError from '../hooks/useForgotPasswordError';
import { forgotPasswordUser } from '../services/API_proyect/user.service';

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [forgetOk, setForgetOk] = useState(false);

  //! -------------funcion que gestiona la data del formulario

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await forgotPasswordUser(formData));
    setSend(false);
  };

  //! --------------useEffect que gestiona los errores
  useEffect(() => {
    useForgotPasswordError(res, setForgetOk);
  }, [res]);

  //! -------------- los condicionales que gestionan los estados de navegacion

  if (forgetOk) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="forgotPassword-container">
      <div className="forgotPassword-form-wrap">
        <h2 className="forgotPassword-title">Cambia tu contraseña</h2>

        <form className="forgotPassword-form" onSubmit={handleSubmit(formSubmit)}>
          <input
            htmlFor="custom-input"
            placeholder="Email"
            className="forgotPassword-input_user"
            type="text"
            id="email"
            name="email"
            autoComplete="false"
            {...register('email', { required: true })}
          />

          <button className="forgotPassword-btn" type="submit" disabled={send}>
            Cambiar
          </button>

          <p className="forgotPassword-form-p">
            Comprueba tu correo para ver la nueva contraseña
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
