var demand = require("must");

var SncfApi = require('../index');

describe('SncfApi', function() {
  describe('#execute()', function () {

    this.timeout(10 * 1000);

    it('should throw an error', function () {
      var err;
      try {
        SncfApi.req().build();
      }
      catch(e) {
        err = e;
      }
      demand(err).not.null();
      demand(err.message).be('req is empty');
    });

    it('should return an unauthorized response', function (done) {
      SncfApi.req().listNetworks().build().execute(function(err, resp){
        demand(err).not.null();
        demand(resp).not.exist();
        demand(err.status).be(401);
        done();
      });
    });

    it('should return an authorized response', function (done) {
      SncfApi.withCredentials('7df45de6-2a4b-40ba-8d76-7ed8b4baddad');
      SncfApi.req().listNetworks().build().execute(function(err, resp){
        demand(err).not.exist();
        demand(resp).not.null();
        done();
      });
    });

  });
});
