var demand = require("must");

var SncfReqBuilder = require('../lib/request/sncf-req-builder');

describe('SncfReqBuilder', function() {
  describe('#buildUrl()', function () {

    it('should throw an exception nothing', function () {
      var err;
      try {
          new SncfReqBuilder().buildUrl();
      }
      catch(e) {
        err = e;
      }
      demand(err).not.null();
      demand(err.message).be('req is empty');
    });

    it('should return networks', function () {
      demand(new SncfReqBuilder().listNetworks().buildUrl()).be('networks');
    });

    it('should return networks/yo', function () {
      demand(new SncfReqBuilder().withNetwork('yo').buildUrl()).be('networks/yo');
    });

    it('should return lines', function () {
      demand(new SncfReqBuilder().listLines().buildUrl()).be('lines');
    });

    it('should return lines/yo', function () {
      demand(new SncfReqBuilder().withLine('yo').buildUrl()).be('lines/yo');
    });

    it('should return networks/yo/lines', function () {
      demand(new SncfReqBuilder().withNetwork('yo').listLines().buildUrl()).be('networks/yo/lines');
    });

    it('should return networks/yo/lines/yo', function () {
      demand(new SncfReqBuilder().withNetwork('yo').withLine('yo').buildUrl()).be('networks/yo/lines/yo');
    });

    it('should return networks/yo/lines/yo/routes', function () {
      demand(new SncfReqBuilder().withNetwork('yo').withLine('yo').listRoutes().buildUrl()).be('networks/yo/lines/yo/routes');
    });

    it('should return networks/yo/lines/yo/routes/yeah', function () {
      demand(new SncfReqBuilder().withNetwork('yo').withLine('yo').withRoute('yeah').buildUrl()).be('networks/yo/lines/yo/routes/yeah');
    });


    it('should return lines', function () {
      demand(new SncfReqBuilder().listLines().buildUrl()).be('lines');
    });

    it('should return routes', function () {
      demand(new SncfReqBuilder().listRoutes().buildUrl()).be('routes');
    });

    it('should return stop_points', function () {
      demand(new SncfReqBuilder().listRoutes().buildUrl()).be('stop_points');
    });

    it('should return stop_areas', function () {
      demand(new SncfReqBuilder().listRoutes().buildUrl()).be('stop_areas');
    });

    it('should return departures', function () {
      demand(new SncfReqBuilder().listRoutes().buildUrl()).be('departures');
    });

    it('should return arrivals', function () {
      demand(new SncfReqBuilder().listRoutes().buildUrl()).be('arrivals');
    });

    it('should return commercial_modes', function () {
      demand(new SncfReqBuilder().listRoutes().buildUrl()).be('commercial_modes');
    });

    it('should return physical_modes', function () {
      demand(new SncfReqBuilder().listRoutes().buildUrl()).be('physical_modes');
    });

  });
});
