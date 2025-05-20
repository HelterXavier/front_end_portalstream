import api from '../api';

export const createSession = userData => {
  return api
    .post('/token', userData)
    .then(res => {
      return res;
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
