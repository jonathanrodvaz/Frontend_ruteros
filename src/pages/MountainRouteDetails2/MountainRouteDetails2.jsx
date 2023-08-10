import './MountainRouteDetails2.css';
import './MountainRouteDetails2Description.css';
import './MountainRouteDetails2Comments.css';
import '../../styles/swal_styles.css';

import { Avatar, Button, Divider, Grid, Paper, TextField, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { BiTime } from 'react-icons/bi';
import { FaMapMarker } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { MdReportProblem } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import Carousel_imgs from '../../components/Carousel_imgs/Carousel_imgs';
import Comments from '../../components/Comments/Comments';
import DeleteCommentComponent from '../../components/DeleteComment/DeleteComment';
import ReadOnlyMountainRouteRating from '../../components/ratings/ReadOnlyMountainRouteRating/ReadOnlyMountainRouteRating';
import WriteRatingForMountainRoute from '../../components/ratings/WriteRatingForMountainRoute/WriteRatingForMountainRoute';
import RouteMap from '../../components/RouteMap/RouteMap';
import { itemsToCarryArr } from '../../data/object.itemsToCarry';
import { createMasChat } from '../../services/API_proyect/chat.service';
import {
  createComment,
  getByReference,
} from '../../services/API_proyect/comment.service';
import { getMountainRouteById } from '../../services/API_proyect/mountainRoute.service';

const MountainRouteDetails2 = () => {
  const [res, setRes] = useState({});
  const [resComment, setResComment] = useState({});
  const [resNewChat, setResNewChat] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPrivateComment, setShowPrivateComment] = useState(true);
  const [inputValue, setInputValue] = useState(null);
  const [mountainRoute, setMountainRoute] = useState(null);
  const [comments, setComments] = useState(null);
  const theme = useTheme();
  const { state } = useLocation();
  const { id } = state;

  const getData = async () => {
    setLoading(true);
    setRes(await getMountainRouteById(id));
    setLoading(false);
  };

  const handleComment = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Publico',
      referenceMountainRouteComment: id,
    };
    setLoading(true);
    setResComment(await createComment(customFormData));
    setLoading(false);
  };

  const handleCommentPrivate = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Privado',
      referenceMountainRouteComment: id,
    };
    setLoading(true);
    setResNewChat(await createMasChat(customFormData));
    setLoading(false);
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

  const getComments = async () => {
    const dataComments = await getByReference('MountainRoute', id);
    console.log(dataComments);
    const filterData = dataComments.data.filter(
      (singleCommets) => singleCommets.commentType == 'Publico',
    );

    console.log(filterData);
    setComments(filterData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (res.status == 200) {
      setMountainRoute(res.data);
    }

    // TODO: swal alert in case of error !!!!
  }, [res]);

  useEffect(() => {
    if (mountainRoute != null) {
      getComments();
    }
  }, [mountainRoute]);

  useEffect(() => {
    if (res.status == 200) {
      getComments();
    }

    // TODO: swal alert in case of error !!!!
  }, [resComment]);

  return (
    <div className="mountainRouteDetails2-container">
      <div className="mountainRouteDetails2-carousel-imgs-container">
        {mountainRoute && <Carousel_imgs images={mountainRoute.images} />}
      </div>

      <div className="mountainRouteDetails2-image-and-info-container">
        <img
          className="mountainRouteDetails2-image"
          src={mountainRoute?.image}
          alt="imagen ruta ciudad"
        ></img>
        <div className="mountainRouteDetails2-info-container">
          <div className="mountainRouteDetails2-title-and-state">
            <div className="mountainRouteDetails2-title">{mountainRoute?.routeName}</div>
            <div className="mountainRouteDetails2-mountainRouteState">
              {mountainRoute?.routeState}
            </div>
          </div>
          <div className="mountainRouteDetails2-read-ratings">
            {mountainRoute && (
              <ReadOnlyMountainRouteRating mountainRoute={mountainRoute} />
            )}{' '}
            ({mountainRoute?.ratings.length})
          </div>
          <div className="mountainRouteDetails2-info-localization-distance-difficulty-durartion">
            <div className="mountainRouteDetails2-info-routeDistance">
              <p className="textoDistancia">Distancia</p>
              <div className="mountainRouteDetails2-GiPathDistance">
                <GiPathDistance />{' '}
                <span style={{ color: 'black' }}>{mountainRoute?.routeDistance} Kms</span>
              </div>
            </div>
            <div className="mountainRouteDetails2-info-routeDuration">
              <p className="textoDuracion">Duración</p>
              <div className="mountainRoute-BiTime">
                <BiTime style={{ fontSize: '1.6em', color: 'green' }} />{' '}
                <span style={{ color: 'black' }}>
                  {mountainRoute?.routeDuration}
                  hora/s
                </span>
              </div>
            </div>
            <div className="mountainRouteDetails2-info-routeDifficulty">
              <p className="textoDificultad">Dificultad</p>
              <div className="mountainRoute-MdReportProblem">
                <MdReportProblem style={{ fontSize: '1.6em' }} />{' '}
                <span style={{ color: 'black ' }}>{mountainRoute?.difficulty} </span>
              </div>
            </div>
            <div className="mountainRouteDetails2-info-routeLocation">
              <p className="textoLocalizacion">Localización</p>
              <div className="mountainRoute-FaMapMarker">
                <FaMapMarker style={{ fontSize: '1.6em', color: '#2880CA' }} />{' '}
                <span style={{ color: 'black' }}>{mountainRoute?.routeLocation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mountainRouteDetails2-mountainRoute-rating-writeRating-container">
        <p>Valora esta ruta</p>
        {mountainRoute && (
          <WriteRatingForMountainRoute mountainRouteToRate={mountainRoute} />
        )}{' '}
      </div>

      {mountainRoute && showRouteMap(mountainRoute)}

      <div className="mountainRouteDetails2-itemsToCarry-container">
        <h3>Equipación recomendada</h3>

        <div className="mountainRouteDetails2-info-itemsToCArry">
          <h5>
            <BiCodeAlt /> Equipo
          </h5>
          <div className="mountainRouteDetails2-info-itemToCarry">
            {/* ----------Show Mountain route's items to carry -------------------- */}
            <div className="mountainRouteDetails2-icons-itemsToCarry-container">
              {itemsToCarryArr
                .filter((itemToCarry) =>
                  mountainRoute?.itemsToCarry.includes(itemToCarry.name),
                )
                .map((itemToCarry, index) => (
                  <figure
                    key={`${itemToCarry.name}_${index}`}
                    className="mountainRouteDetails2-tecnologia-item"
                    id={itemToCarry.name}
                  >
                    <div className="mountainRouteDetails2-icon-container">
                      <img
                        className="mountainRouteDetails2-itemToCarry-image"
                        src={itemToCarry.image}
                        alt={itemToCarry.name}
                      />
                      <p>{itemToCarry.name}</p>
                    </div>
                  </figure>
                ))}
            </div>
            {/* //------------------------ Show Mountain Route item's to carry -------------------- */}
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* ----------------------- Mountain Route Description ----------------------- */}
      <div className="mountainRouteDetails2-mountainRoute-description">
        <h3>Descripción</h3>
        <p>{mountainRoute?.descriptionGeneral}</p>
      </div>
      {/* ----------------------- Mountain Route Description ----------------------- */}

      {/* -------------------COMMENTS ----------------------------- */}
      {/* <button className="mountainRouteDetails2-private-comment-btn" onClick={() => setShowPrivateComment(!showPrivateComment)}>
        Chat privado
      </button> */}

      <div className="mountainRouteDetails2-public-comments-container">
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
              <Avatar alt="Remy Sharp" src={mountainRoute?.image} />
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
            {comments != null &&
              comments.map((singleComment) => (
                <div className="singlecomment-div" key={singleComment._id}>
                  <Comments comment={singleComment} setComentsByChild={setComments} />
                  <DeleteCommentComponent
                    className="trash-icon"
                    commentId={singleComment._id}
                  />
                </div>
              ))}
          </div>
        </Paper>
      </div>

      {showPrivateComment ? (
        <div className="mountainRouteDetails2-private-comments-container">
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
                <Avatar alt="Remy Sharp" src={mountainRoute?.image} />
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
      {/* ------------------ COMMENTS ------------------------------- */}
    </div>
  );
};

const showRouteMap = (mountainRoute) => (
  <RouteMap
    geolocations={[
      [mountainRoute.routeStartLatitude, mountainRoute.routeStartLongitude],
      [mountainRoute.routeEndLatitude, mountainRoute.routeEndLongitude],
    ]}
  />
);

export default MountainRouteDetails2;
