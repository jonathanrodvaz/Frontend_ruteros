// import { updateToken } from '../../util/updateToken';
// import { API } from './service.config';

// // ----------------- Get All Offers from DB -----------
// export const offer_getAll = async () => {
//   return API.get('/offers/')
//     .then((res) => res)
//     .catch((error) => {
//       return error;
//     });
// };

// // ----------------- Get Offer by Id from DB -----------
// export const getOfferById = async (id) => {
//   return API.get(`/offers/${id}`)
//     .then((res) => res)
//     .catch((error) => {
//       return error;
//     });
// };

// // ---------- Toggle the offer taht the user is interested in -----------
// export const offer_toggleInterestedOfferToUser = async (id) => {
//   return API.post(`/offers/toggleInterestedOfferToUser/${id}`, {
//     headers: {
//       Authorization: `Bearer ${updateToken()}`,
//     },
//   })
//     .then((res) => res)
//     .catch((error) => {
//       return error;
//     });
// };

// // ---- Get the Status of the following (interested) offer that the user is interested in -----------
// export const offer_getFollowingStatus = async (id) => {
//   return API.get(`/offers/offerFollowingStatus/${id}`, {
//     headers: {
//       Authorization: `Bearer ${updateToken()}`,
//     },
//   })
//     .then((res) => res)
//     .catch((error) => {
//       return error;
//     });
// };

// export const createOffer = async (formData) => {
//   return API.post('/offers/createOffer', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${updateToken()}`,
//     },
//   })
//     .then((res) => res)
//     .catch((error) => {
//       return error;
//     });
// };

// export const updateOffer = async (id, formData) => {
//   return API.patch(`/offers/updateOffer/${id}`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${updateToken()}`,
//     },
//   })
//     .then((res) => res)
//     .catch((error) => {
//       return error;
//     });
// };

// //! -----------------------DELETE OFFER -----------------------------------
// export const deleteOffer = async (id) => {
//   return API.delete(`/offers/deleteOffer/${id}`)
//     .then((res) => res)
//     .catch((error) => {
//       return error;
//     });
// };
