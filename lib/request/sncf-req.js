var request = require('request');

var SncfReq = function(api, path) {
  this.api = api;
  this.path = path;
};

SncfReq.prototype.execute = function(callback) {
  request.get(this.api.root+this.path, {
    auth: {
      user: this.api.auth.user,
      password: this.api.auth.password,
      sendImmediately: true
    }
  }, function(error, response, body){
    if(error) {
      return callback(error);
    }
    body = JSON.parse(body);
    if(body.status) {
      return callback(body);
    }
    callback(null, body);
  });
};

module.exports = SncfReq;
