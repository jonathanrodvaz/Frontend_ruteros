import './ChatTemplate.css';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

import { useAuth } from '../contexts/authContext';
import { createMasChat } from '../services/API_proyect/chat.service';
import { getUserById } from '../services/API_proyect/user.service';

export const Chat = () => {
  const [resChatUser, setResChatUser] = useState({});
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState(null);
  const { user } = useAuth();
  const [send, setSend] = useState(false);
  const [res, setRes] = useState(false);

  const handleMessage = async () => {
    const valueInput = document.querySelector('#textAreaExample').value;

    const customFormData = {
      commentContent: valueInput,
      referenceUser:
        user._id == message.chat.userOne._id
          ? message.chat.userTwo._id
          : message.chat.userOne._id,
    };

    console.log(customFormData);

    setSend(true);
    setRes(await createMasChat(customFormData));
    setSend(false);
  };

  const fetchUser = async () => {
    try {
      const userChat = await getUserById(user._id);
      if (userChat?.status == 200) {
        setResChatUser(userChat);
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  };

  useEffect(() => {
    console.log(send);
  }, [send]);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (resChatUser?.status == 200) {
      if (localStorage.getItem('chatCurrent')) {
        const filterdata = resChatUser.data.chats.filter(
          (chat) =>
            chat.userOne._id == localStorage.getItem('chatCurrent') ||
            chat.userTwo._id == localStorage.getItem('chatCurrent'),
        );
        console.log(filterdata);
        setMessage({ chat: filterdata[0], dataChat: filterdata[0].menssages });
        console.log(resChatUser.data.chats);
        setChats(resChatUser.data.chats);
      }
      setChats(resChatUser.data.chats);
    }
  }, [resChatUser]);

  useEffect(() => {
    console.log(chats);
  }, [chats]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    console.log(res);
    if (res?.status == 200) {
      fetchUser();
    }
  }, [res]);

  return (
    <>
      <div className="contair-father-chat">
        <MDBContainer
          fluid
          className="py-5"
          // style={{ backgroundColor: '#eee' }}
          // style={{ minHeight: '700px', maxWidth: '80vw' }}
        >
          <MDBRow>
            <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>

              {chats.map((chat) => (
                <MDBCard
                  key={chat._id}
                  onClick={() => {
                    localStorage.setItem(
                      'chatCurrent',
                      user._id === chat.userOne._id ? chat.userTwo._id : chat.userOne._id,
                    );
                    setMessage({ chat, dataChat: chat.menssages });
                  }}
                >
                  <MDBCardBody>
                    <MDBTypography
                      listUnStyled
                      className="mb-0"
                      // style={{
                      //   backgroundColor: '#eee',
                      // }}
                    >
                      <li className="p-2 border-bottom">
                        <a href="#!" className="d-flex justify-content-between">
                          <div className="d-flex flex-row">
                            <img
                              src={
                                user?._id == chat?.userOne?._id
                                  ? chat?.userTwo?.image
                                  : chat?.userOne?.image
                              }
                              alt="avatar"
                              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                              width="80"
                              style={{
                                objectFit: 'cover',
                                width: '50px',
                                height: '50px',
                              }}
                            />
                            <div className="pt-1">
                              <p className="fw-bold mb-0">
                                {user?._id == chat?.userOne?._id
                                  ? chat?.userTwo?.name
                                  : chat?.userOne?.name}
                              </p>
                              <p className="small text-muted">
                                {user?._id == chat?.userOne?._id
                                  ? chat?.userTwo?.surname
                                  : chat?.userOne?.surname}
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </MDBTypography>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>

            <MDBCol md="6" lg="7" xl="8">
              <MDBTypography listUnStyled>
                <div
                  style={{
                    height: '450px',
                    overflow: 'auto',
                    padding: '2rem',
                  }}
                >
                  {message != null ? (
                    message?.dataChat.map((mss) => {
                      console.log(mss);
                      return (
                        <>
                          {user._id == mss.owner._id ? (
                            <li className="d-flex justify-content-between mb-4">
                              <MDBCard className="w-100">
                                <MDBCardHeader className="d-flex justify-content-between p-3">
                                  <p className="fw-bold mb-0">
                                    {user?._id == message?.chat?.userOne?._id
                                      ? message?.chat?.userOne?.name
                                      : message?.chat?.userTwo?.name}
                                  </p>
                                  <p className="text-muted small mb-0">
                                    <MDBIcon far icon="clock" /> 12 mins ago
                                  </p>
                                </MDBCardHeader>
                                <MDBCardBody>
                                  <p className="mb-0">{mss.commentContent}</p>
                                </MDBCardBody>
                              </MDBCard>
                              <img
                                style={{
                                  objectFit: 'cover',
                                  width: '70px',
                                  height: '70px',
                                }}
                                src={user.image}
                                alt="avatar"
                                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                                width="60"
                              />
                            </li>
                          ) : (
                            <li className="d-flex justify-content-between mb-4">
                              <img
                                style={{
                                  objectFit: 'cover',
                                  width: '70px',
                                  height: '70px',
                                }}
                                src={
                                  user?._id == message?.chat?.userOne?._id
                                    ? message?.chat?.userTwo?.image
                                    : message?.chat?.userOne?.image
                                }
                                alt="avatar"
                                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                                width="60"
                              />
                              <MDBCard className="w-100">
                                <MDBCardHeader className="d-flex justify-content-between p-3">
                                  <p className="fw-bold mb-0">
                                    {user?._id == message?.chat?.userOne?._id
                                      ? message?.chat?.userTwo?.name
                                      : message?.chat?.userOne?.name}
                                  </p>
                                  <p className="text-muted small mb-0">
                                    <MDBIcon far icon="clock" /> 13 mins ago
                                  </p>
                                </MDBCardHeader>
                                <MDBCardBody style={{ width: '100% !Important' }}>
                                  <p className="mb-0">{mss.commentContent}</p>
                                </MDBCardBody>
                              </MDBCard>
                            </li>
                          )}
                        </>
                      );
                    })
                  ) : (
                    <p>Selecciona un chat para ver los mensajes</p>
                  )}
                </div>

                <li className="bg-white mb-3">
                  <MDBTextArea
                    id="textAreaExample"
                    rows={4}
                    className="chatTemplate-mdbTextArea"
                    style={{ marginTop: '2rem' }}
                  />
                </li>
                <MDBBtn
                  color="black"
                  rounded
                  className="float-end btn-rounded"
                  onClick={() => {
                    console.log(message);

                    handleMessage();
                  }}
                >
                  Send
                </MDBBtn>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};
