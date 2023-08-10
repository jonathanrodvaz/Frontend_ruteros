import React from 'react';
import { BiTrashAlt } from 'react-icons/bi';

import { useAuth } from '../../contexts/authContext';
import { deleteComment } from '../../services/API_proyect/comment.service';

const DeleteCommentComponent = ({ commentId }) => {
  const { user } = useAuth();

  const handleDelete = async () => {
    try {
      const response = await deleteComment(commentId, user);
      if (response.status === 200) {
        console.log(response.data.message);
      } else {
        console.error('Error al eliminar el comentario');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="trash-icon" onClick={handleDelete}>
      <BiTrashAlt size={20} className="trash-icon" />
    </button>
  );
};

export default DeleteCommentComponent;
