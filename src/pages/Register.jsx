import './Register.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import Uploadfile from '../components/Uploadfile';
import { useAuth } from '../contexts/authContext';
import useUserError from '../hooks/useUserError';
import { registerUser } from '../services/API_proyect/user.service';

const Register = () => {
  const { bridgeData } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [registerOk, setRegisterOk] = useState(false);
  const [send, setSend] = useState(false);
  const [role] = useState(null);

  const formSubmit = async (formData) => {
    const inputfile = document.getElementById('file-upload').files;
    let customFormData;

    if (inputfile.length !== 0) {
      const imageArray = Array.from(inputfile); // Convert FileList to an array

      // customFormData = { ...formData, image: inputfile[0], rol: role };
      customFormData = {
        ...formData,
        images: imageArray,
        rol: role,
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    } else {
      customFormData = { ...formData, rol: role };
      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    console.log(res);
    useUserError(res, setRegisterOk);
    bridgeData('ALLUSER');
  }, [res]);

  if (registerOk) {
    return <Navigate to="/verifyCode" />;
  }

  // if (!role) {
  //   return (
  //     <div className="register-role_selection">
  //       <h3 className="register-title-role">Selecciona tu rol</h3>

  //       <div className="register-buttons-container">
  //         <button className="register-btn-role" onClick={() => setRole('freelance')}>
  //           <p>Freelance</p>
  //           <img
  //             className="register-photo"
  //             src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687278019/ProjectFinalBOOTCAMP/Iconos/programacion_cdn0ri.png"
  //             alt="Freelance icon"
  //           />
  //         </button>

  //         <button className="register-btn-role" onClick={() => setRole('company')}>
  //           <p>Empresa</p>
  //           <img
  //             className="register-photo"
  //             src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687277523/ProjectFinalBOOTCAMP/Iconos/edificio-de-oficinas_1_s9ifty.png"
  //             alt="Company icon"
  //           />
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="register-container">
      <h2>Registro</h2>

      <form className="register-form" onSubmit={handleSubmit(formSubmit)}>
        <input
          htmlFor="custom-input"
          placeholder={role === 'company' ? 'Nombre de la empresa' : 'Nombre'}
          className="register-input-user"
          type="text"
          id="name"
          name="name"
          autoComplete="false"
          {...register('name', { required: true })}
        />

        <input
          htmlFor="custom-input"
          placeholder={role === 'company' ? 'Tipo de empresa' : 'Apellidos'}
          className="register-input-user"
          type="text"
          id="surname"
          name="surname"
          autoComplete="false"
          {...register('surname', { required: true })}
        />

        <input
          placeholder="Ubicación"
          htmlFor="custom-input"
          className="register-input-user"
          type="text"
          id="city"
          name="city"
          autoComplete="false"
          {...register('city', { required: true })}
        />

        <input
          placeholder="Descripción"
          htmlFor="custom-input"
          className="register-input-user"
          type="text"
          id="description"
          name="description"
          autoComplete="false"
          {...register('description', { required: true })}
        />

        <input
          htmlFor="custom-input"
          placeholder="Contraseña"
          className="register-input-user"
          type="password"
          id="password"
          name="password"
          autoComplete="false"
          {...register('password', { required: true })}
        />

        <input
          placeholder="Email"
          htmlFor="custom-input"
          className="register-input-user"
          type="email"
          id="email"
          name="email"
          autoComplete="false"
          {...register('email', { required: true })}
        />

        <Uploadfile />

        <button className="register-button" type="submit" disabled={send}>
          <p>Registarse</p>
        </button>

        <p className="register-parrafoLogin">
          Tienes ya una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
