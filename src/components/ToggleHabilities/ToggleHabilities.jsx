import './ToggleHabilities.css';

import { useEffect, useRef, useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

import { useAuth } from '../../contexts/authContext';

const ToggleHabilities = ({ setArrayHabilities, arrayHabilities }) => {
  const [valuePather, setValuePather] = useState('');
  const [elementId, setElementId] = useState(null);
  const { user } = useAuth();
  const buttonRef = useRef(null);

  const handleAddHability = async () => {
    const data = buttonRef.current.parentElement.attributes[1].textContent;
    setValuePather(data);
    setArrayHabilities((value) => {
      if (value.includes(data)) {
        const copyValue = [];
        value.forEach((element) => {
          if (element != data) {
            copyValue.push(element);
          }
        });

        return copyValue;
      } else {
        const copyValue = [...value];
        copyValue.push(data);
        return copyValue;
      }
    });
  };
  useEffect(() => {}, [arrayHabilities]);

  useEffect(() => {
    setElementId(buttonRef?.current?.parentElement?.attributes[1]?.textContent);
  }, []);

  return (
    <button
      style={{ background: 'none', border: 'none' }}
      onClick={handleAddHability}
      disabled={user == null}
      ref={buttonRef}
      className={
        arrayHabilities.includes(valuePather) || arrayHabilities.includes(elementId)
          ? 'favorite'
          : 'noFavorite'
      }
    >
      {arrayHabilities.includes(valuePather) || arrayHabilities.includes(elementId) ? (
        <AiTwotoneHeart size={15} className="favorite-icon-red" />
      ) : (
        <AiOutlineHeart size={15} className="favorite-icon" />
      )}
    </button>
  );
};

export default ToggleHabilities;
