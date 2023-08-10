import './ChangeEmail.css';

import React, { useEffect, useState } from 'react';

import useChangeEmailError from '../../hooks/useChangeEmail';
import { changeEmail, verifyNewEmail } from '../../services/API_proyect/user.service';

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [step, setStep] = useState(1);
  const [changeEmailOK, setChangeEmailOK] = useState(false);

  const handleEmailChange = async () => {
    try {
      const response = await changeEmail({ newEmail });
      useChangeEmailError(response, setChangeEmailOK);
      if (response.status === 200) {
        setStep(2);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCodeConfirmation = async () => {
    try {
      const response = await verifyNewEmail({ confirmationCode });
      useChangeEmailError(response, setChangeEmailOK);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(changeEmailOK);
  }, [changeEmailOK]);

  return (
    <div>
      {step === 1 ? (
        <div>
          <p className="changeEmail-text-new-email">Cambiar Email</p>
          <div className="changeEmail_container-new-email-general">
            <input
              className="changeEmail_container-new-email"
              type="email"
              placeholder="Introduzca el nuevo email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button className="btn_profile_general" onClick={handleEmailChange}>
              CAMBIAR EMAIL
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="changeEmail-text-new-email">Enviar el código de confirmación</p>
          <div className="changeEmail_container-new-email-general">
            <input
              className="changeEmail_container-new-email"
              type="text"
              placeholder="Introducir el código de confirmación"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <button
              className="btn_profile_general btn_profile_general-send-code"
              onClick={handleCodeConfirmation}
            >
              ENVIAR CÓDIGO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeEmail;
