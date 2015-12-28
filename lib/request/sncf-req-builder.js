var SncfReq = require('./sncf-req');

var resources = {
  networks: 'networks',
  lines: 'lines',
  routes: 'routes',
  stop_points: 'stop_points',
  stop_areas: 'stop_areas',
  departures: 'departures',
  arrivals: 'arrivals',
  commercial_modes: 'commercial_modes',
  physical_modes: 'physical_modes',
  companies: 'companies',
  places: 'places',
  places_nearby: 'places_nearby'
};

var SncfReqBuilder = function(api) {
  this.api = api;
  this.parts = [];
  this.params = [];
};

SncfReqBuilder.prototype.withNetwork = function(networkId) {
  this.listNetworks().parts.push(networkId);
  return this;
};

SncfReqBuilder.prototype.listNetworks = function() {
  this.parts.push(resources.networks);
  return this;
};

SncfReqBuilder.prototype.listLines = function() {
  this.parts.push(resources.lines);
  return this;
};

SncfReqBuilder.prototype.withLine = function(lineId) {
  this.listLines().parts.push(lineId);
  return this;
};

SncfReqBuilder.prototype.listRoutes = function() {
  this.parts.push(resources.routes);
  return this;
};

SncfReqBuilder.prototype.withRoute = function(routeId) {
  this.listRoutes().parts.push(routeId);
  return this;
};

SncfReqBuilder.prototype.buildUrl = function() {
  var url = '';
  var that = this;
  this.parts.forEach(function(part, index){
    url += part;
    if(index < that.parts.length -1) {
      url += '/';
    }
  });
  this.params.forEach(function(param, index){
    if(index === 0) {
      url += '?';
    }
    else {
      url += '&';
    }
    url += part;
  });
  //console.log(url);
  if(!url) {
    throw new Error('req is empty');
  }
  return url;
};

SncfReqBuilder.prototype.build = function() {
  return new SncfReq(this.api, this.buildUrl());
};

module.exports = SncfReqBuilder;
