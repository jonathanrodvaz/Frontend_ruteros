import './RuteroDetails.css';
import '../../styles/swal_styles.css';

import { Avatar, Button, Divider, Grid, Paper, TextField, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { FaMapMarker } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdGroupAdd } from 'react-icons/md';
import { MdPeople } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import Carousel_imgs from '../../components/Carousel_imgs/Carousel_imgs';
import Comments from '../../components/Comments/Comments';
import DeleteCommentComponent from '../../components/DeleteComment/DeleteComment';
import ReadOnlyDeveloperRating from '../../components/ratings/ReadOnlyUserRating/ReadOnlyUserRating';
import WriteRatingForRutero from '../../components/ratings/WriteRatingForRutero/WriteRatingForRutero';
import RuteroLocationMap from '../../components/RuteroLocationMap/RuteroLocationMap';
import { useAuth } from '../../contexts/authContext';
import { habilitiesArr } from '../../data/object.habilities';
import { createMasChat } from '../../services/API_proyect/chat.service';
import {
  createComment,
  getByReference,
} from '../../services/API_proyect/comment.service';
import { getByUserExperience } from '../../services/API_proyect/experience.service';
import { getUserById } from '../../services/API_proyect/user.service';

const RuteroDetails = () => {
  const { user } = useAuth();
  const [res, setRes] = useState({});
  const [resComment, setResComment] = useState({});
  const [resNewChat, setResNewChat] = useState({});
  const [showPrivateComment, setShowPrivateComment] = useState(true);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [rutero, setRutero] = useState(null);
  const [comments, setComments] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const theme = useTheme();
  const { state } = useLocation();
  const { id } = state;

  const [deletedCommentId, setDeletedCommentId] = useState(null);

  const handleCommentDelete = (commentId) => {
    setDeletedCommentId(commentId);
  };

  const imgLink =
    'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800';

  const getData = async () => {
    setLoading(true);
    setRes(await getUserById(id));
    setLoading(false);
  };

  const handleComment = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Publico',
      referenceUser: id,
    };
    setLoading(true);
    setResComment(await createComment(customFormData));
    setLoading(false);
  };

  const handleCommentPrivate = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Privado',
      referenceUser: id,
    };

    setLoading(true);
    setResNewChat(await createMasChat(customFormData));
    setLoading(false);
  };

  const getComments = async () => {
    const dataComments = await getByReference('User', id);

    const filterData = dataComments.data.filter(
      (singleCommets) => singleCommets.commentType == 'Publico',
    );
    setComments(await filterData);
  };

  const getExperiences = async () => {
    const dataExperiences = await getByUserExperience(id);

    setExperiences(await dataExperiences);
  };

  useEffect(() => {
    if (resNewChat?.status == 200) {
      setShowPrivateComment(!showPrivateComment);
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'custom-swal-bg',
      });
      setResNewChat({});
    }
  }, [resNewChat]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (res.status == 200) {
      setRutero(res.data);
    }

    // TODO: swal alert in case of error !!!!
  }, [res]);

  useEffect(() => {
    if (rutero != null) {
      getComments();
      getExperiences();
    }
  }, [rutero]);

  useEffect(() => {
    if (res.status == 200) {
      getComments();
    }

    // TODO: swal alert in case of error !!!!
  }, [resComment]);

  useEffect(() => {
    if (deletedCommentId) {
      const updatedComments = comments.filter(
        (comment) => comment?._id !== deletedCommentId,
      );
      setComments(updatedComments);
      setDeletedCommentId(null);
    }
  }, [deletedCommentId, comments]);

  return (
    <div className="ruteroDetails-container">
      <div className="ruteroDetails-carousel-imgs-container">
        {showCarousel(rutero?.images)}
      </div>

      <div className="ruteroDetails-image-and-info-container">
        <img
          className="ruteroDetails-image"
          src={rutero?.image}
          alt="imagen rutero"
        ></img>

        <div className="ruteroDetails-info-container">
          <div className="ruteroDetails-name-surname-and-developerType">
            <div className="ruteroDetails-name-surname">
              {rutero?.name} {rutero?.surname}
            </div>
            <div className="ruteroDetails-developerType">Top Rutera/o</div>
          </div>
          <div className="ruteroDetails-read-ratings">
            {rutero && <ReadOnlyDeveloperRating user={rutero} />} (
            {rutero?.ratingsByOthers.length})
          </div>
          <div className="ruteroDetails-info-city-email-following-followers">
            <div className="ruteroDetails-info-city">
              <p>Localización</p>
              <div className="ruteroDetails-info-developer-detail">
                <FaMapMarker /> {rutero?.city}
              </div>
            </div>
            <div className="ruteroDetails-info-email">
              <p>Email</p>
              <div className="ruteroDetails-info-developer-detail">
                <MdEmail /> {rutero?.email}
              </div>
            </div>
            <div className="ruteroDetails-info-following">
              <p>Following</p>
              <div className="ruteroDetails-info-developer-detail">
                <MdGroupAdd /> ({rutero?.following.length})
              </div>
            </div>
            <div className="ruteroDetails-info-followers">
              <p>Followers</p>
              <div className="ruteroDetails-info-developer-detail">
                <MdPeople /> ({rutero?.followers.length})
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ruteroDetails-developer-rating-writeRating-container">
        <div>Danos tú valoración</div>
        {rutero && <WriteRatingForRutero userToRate={rutero} />}
      </div>

      <div className="ruteroDetails-ruteroLocationMap-container">
        {rutero && <RuteroLocationMap placeName={rutero?.city} />}
      </div>

      <div className="ruteroDetails-technologies">
        <h3>Habilidades ruteras</h3>

        <div className="ruteroDetails-info-technologies">
          <h5>
            <BiCodeAlt /> Habilidades
          </h5>
          <div className="ruteroDetails-info-technology">
            {/* //------------------------ Show Rutero's Habilities -------------------- */}
            <div className="ruteroDetails-icons-technologies-container">
              {habilitiesArr
                .filter((hability) => rutero?.habilities.includes(hability.name))
                .map((hability, index) => (
                  <figure
                    key={`${hability.name}_${index}`}
                    className="ruteroDetails-tecnologia-item"
                    id={hability.name}
                  >
                    <div className="ruteroDetails-icon-container">
                      <img
                        className="ruteroDetails-tech-image"
                        src={hability.image}
                        alt={hability.name}
                      />
                      <p>{hability.name}</p>
                    </div>
                  </figure>
                ))}
            </div>
            {/* //------------------------ Show Rutero's Habilities -------------------- */}
          </div>
        </div>
      </div>

      <div className="ruteroDetails-developer-description">
        <h3>Descripción</h3>
        <p>{rutero?.description}</p>
      </div>

      {/* ------------------- Developer job experiences ---------------------*/}

      <div className="ruteroDetails-experiences-container">
        <h3>Experiencias</h3>
        {experiences != null &&
          experiences.map((experience) => (
            <div
              className="ruteroDetails-single-experience-container"
              key={experience?._id}
            >
              <h3>Nombre experiencia</h3>
              <p>{experience.title}</p>
              <h3>Descripción</h3>
              <p>{experience.description}</p>
              <h3>Habilidades</h3>

              {/* //------------------------ Show router experience's Habilities -------------------- */}
              <div className="ruteroDetails-icons-technologies-container">
                {habilitiesArr
                  .filter((hability) => experience.habilities?.includes(hability.name))
                  .map((hability, index) => (
                    <figure
                      key={`${hability.name}_job_experience_${index}`}
                      className="ruteroDetails-tecnologia-item"
                      id={hability.name}
                    >
                      <div className="ruteroDetails-icon-container">
                        <img
                          className="ruteroDetails-tech-image"
                          src={hability.image}
                          alt={hability.name}
                        />
                        <p>{hability.name}</p>
                      </div>
                    </figure>
                  ))}
              </div>

              {/* //------------------------ Show router experience's Habilities -------------------- */}
              <h3>Duración</h3>
              <p>{experience.duration} hora/s</p>
            </div>
          ))}
      </div>

      {/* ------------------- Developer job experiences ---------------------*/}

      {/* <button
        className="ruteroDetails-private-comment-btn"
        onClick={() => setShowPrivateComment(!showPrivateComment)}
      >
        Chat privado
      </button> */}

      {/* ------------------- PUBLIC COMMENTS ----------------------------- */}
      <div style={{ padding: 0 }} className="ruteroDetails-public-comments-container">
        <Paper
          style={{
            padding: '40px 20px 0px',
            backgroundColor: 'var(--header-bg-color)',
            border: '0px solid red',
            width: '100%',
          }}
        >
          <h3>Comentario público</h3>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={user ? user?.image : imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <TextField
                id="newComent"
                label="Pon tu comentario"
                variant="outlined"
                style={{ width: '100%' }}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  border: 'none',
                  borderRadius: '30px',
                  height: '39px',
                  width: '270px',
                  [theme.breakpoints.down('sm')]: {
                    width: '120px',
                  },
                  backgroundColor: 'var(--btn-bg-color)',
                  color: 'white',
                  fontSize: '16px',
                  transition: 'linear .2s',
                  marginTop: '30px',
                  ':hover': {
                    borderBottom: '1.5px solid #25d366',
                    backgroundColor: 'var(--header-bg-color)',
                    color: 'var(--btn-bg-color)',
                    fontSize: '18px',
                    cursor: 'pointer',
                  },
                }}
                onClick={() => handleComment()}
                disabled={loading}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
          <div className="Dev-comments" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {comments != null
              ? comments.map((singleComment) => (
                  <div className="singlecomment-div" key={singleComment?._id}>
                    <Comments comment={singleComment} setComentsByChild={setComments} />
                    <DeleteCommentComponent
                      className="trash-icon"
                      commentId={singleComment?._id}
                      onDelete={handleCommentDelete}
                    />
                  </div>
                ))
              : null}
          </div>
        </Paper>
      </div>
      {/* ------------------ PUBLIC COMMENTS ------------------------------- */}

      {/* ------------------ PRIVATE COMMENTS ------------------------------- */}
      {showPrivateComment ? (
        <div className="ruteroDetails-private-comments-container">
          <Paper
            style={{
              padding: '40px 20px 55px',
              backgroundColor: 'var(--header-bg-color)',
              border: '0px solid red',
              width: '100%',
            }}
          >
            <h3>Comentario privado</h3>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={user ? user?.image : imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <TextField
                  id="newComent"
                  label="Pon tu comentario"
                  variant="outlined"
                  style={{ width: '100%' }}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    border: 'none',
                    borderRadius: '30px',
                    height: '39px',
                    width: '270px',
                    [theme.breakpoints.down('sm')]: {
                      width: '120px',
                    },
                    backgroundColor: 'var(--btn-bg-color)',
                    color: 'white',
                    fontSize: '16px',
                    transition: 'linear .2s',
                    marginTop: '30px',
                    ':hover': {
                      borderBottom: '1.5px solid #25d366',
                      backgroundColor: 'var(--header-bg-color)',
                      color: 'var(--btn-bg-color)',
                      fontSize: '18px',
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => handleCommentPrivate()}
                  disabled={loading}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ) : null}
      {/* ------------------ PRIVATE COMMENTS ------------------------------- */}
    </div>
  );
};

const showCarousel = (images) => {
  if (images) {
    const filteredImages = images.filter((_, index) => index !== 0);
    return <Carousel_imgs images={filteredImages} />;
  }
};

export default RuteroDetails;
