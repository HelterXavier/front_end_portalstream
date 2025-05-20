import api from './api';

export const loadUsercorp = () => {
  return api
    .get('/usercorp')
    .then(res => {
      return res;
    })
    .catch(err => {
      throw new Error(err);
    });
};

export const loadImplantationTreeById = id => {
  return api
    .get(`/implantation/mobile/tree?site=${id}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw new Error(err);
    });
};

export const loadImplantationInfoById = id => {
  return api
    .get(`/implantation/mobile/info?site=${id}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw new Error(err);
    });
};

export const loadStatic = () => {
  return api
    .get('/implantation/mobile/static')
    .then(res => {
      return res;
    })
    .catch(err => {
      throw new Error(err);
    });
};

export const loadLubricants = () => {
  return api
    .get('/implantation/mobile/static/get_lubricants')
    .then(res => {
      return res;
    })
    .catch(err => {
      throw new Error(err);
    });
};
