import './Login.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';
import useLoginError from '../hooks/useLoginError';
import { loginUser } from '../services/API_proyect/user.service';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [loginOk, setLoginOk] = useState(false);
  const { userlogin } = useAuth();

  //! ---------- FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-----------------------
  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await loginUser(formData));
    setSend(false);
  };

  //! ---------USEffect ASOCIADO A LA RES PARA GESTIONAR LOS ERRORES----------------
  useEffect(() => {
    useLoginError(res, setLoginOk, userlogin);
  }, [res]);

  //! ---------- LOS CONDICIONALES QUE GESTIONAN LOS ESTADOS DE NAVEGACION--------------

  if (loginOk) {
    if (res.data.user.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      return <Navigate to="/home" />;
    }
  }
  return (
    <div className="login-container">
      <div className="login-form-wrap">
        <h2 className="login-title">Inicia sesión</h2>

        <p>Bienvenido de nuevo!</p>

        <form className="login-form-container" onSubmit={handleSubmit(formSubmit)}>
          <input
            htmlFor="custom-input"
            placeholder="Email"
            className="login-input_user"
            type="email"
            id="email"
            name="email"
            autoComplete="false"
            {...register('email', { required: true })}
          />

          <input
            htmlFor="custom-input"
            placeholder="Password"
            className="login-input_user"
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            {...register('password', { required: true })}
          />

          <button className="login-button" type="submit" disabled={send}>
            Iniciar sesión
          </button>
        </form>
      </div>

      <div className="login-text">
        <p className="parrafoLogin">
          Estás registrado?
          <Link className="parrafoRegisterHere" to="/register">
            <span className="login-span-two">Registrate aquí</span>
          </Link>
        </p>
        <p> Has olvidado la contraseña?</p>
        <Link to="/forgotpassword" className="anchorCustom">
          &nbsp;&nbsp;<span className="login-span-one">Cambiar Contraseña</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
