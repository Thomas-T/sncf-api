var SncfReqBuilder = require('./sncf-req-builder');


var SncfApi = {
  auth: {
    user: 'user-not-set',
    password: 'password-not-set'
  },
  root: 'https://api.sncf.com/v1/coverage/sncf/'
};

function withCredentials(user, pwd) {
  SncfApi.auth = {
    user: user,
    password: pwd
  };
  return SncfApi;
}
SncfApi.withCredentials = withCredentials;

function req() {
  return new SncfReqBuilder(this);
}
SncfApi.req = req;

module.exports = SncfApi;
