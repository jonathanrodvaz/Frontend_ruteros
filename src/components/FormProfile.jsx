import './FormProfile.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useAuth } from '../contexts/authContext';
import useUpdateError from '../hooks/useUpdateError';
import { updateUser } from '../services/API_proyect/user.service';
import FigureUser from './FigureUser';
import Uploadfile from './Uploadfile';

const FormProfile = () => {
  const { setUser, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [changeProfileDataOk, setChangeProfileDataOk] = useState(false);
  const defaultData = {
    name: user?.user,
  };
  //! --------- funcion que controla el formulario-----------------------
  const formSubmit = async (formData) => {
    Swal.fire({
      title: '¿Deseas cambiar los detalles de tu perfil?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(73, 193, 162)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      customClass: 'custom-swal-bg',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const inputfile = document.getElementById('file-upload').files;
        let customFormData;

        if (inputfile.length !== 0) {
          customFormData = { ...formData, image: inputfile[0] };
          setSend(true);
          setRes(await updateUser(customFormData));
          setSend(false);
        } else {
          customFormData = { ...formData };
          setSend(true);
          setRes(await updateUser(customFormData));
          setSend(false);
        }
      }
    });
  };

  //! --------------- USEEFFECT  que controla la gestion de errores ----------------------
  useEffect(() => {
    useUpdateError(res, setChangeProfileDataOk);
  }, [res]);

  //! ---------------- LOS CONDICIONALES CON LOS ESTADOS DE NAVEGACION --------------------

  if (changeProfileDataOk) {
    //! no utilizamos el logout aunque no pasaria nada. No lo utlizo porque da warning
    setUser(() => false);
    localStorage.removeItem('user');
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="containerProfile">
        <div className="containerDataNoChange"></div>
        <div className="form-wrap-formProfile">
          <p className="formProfile-text-new-profile">Cambiar datos del perfil</p>
          <div className="containerDataNoChange">
            <FigureUser user={user} />
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container-form-group">
              <label htmlFor="custom-input" className="custom-placeholder"></label>
              <input
                className="input-user-perfil"
                placeholder="Introducir el Nombre"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                defaultValue={defaultData?.name}
                {...register('name', { required: true })}
              />
            </div>
            <Uploadfile />
            <div className="btn_container-center-papa">
              <div className="btn_container">
                <button
                  className="btn_profile_general"
                  type="submit"
                  disabled={send}
                  // style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                  // style={{ background: send ? "#008000" : "#37A08E" }}
                  // style={
                  //   {
                  //     background: send ? '#008000' : 'var(--background-color-button-login)',
                  //   }
                  // }
                >
                  CAMBIAR PERFIL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormProfile;
