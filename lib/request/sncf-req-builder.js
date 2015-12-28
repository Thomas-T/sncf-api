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

SncfReqBuilder.prototype.listStopPoints = function() {
  this.parts.push(resources.stop_points);
  return this;
};

SncfReqBuilder.prototype.listStopAreas = function() {
  this.parts.push(resources.stop_areas);
  return this;
};

SncfReqBuilder.prototype.listDepartures = function() {
  this.parts.push(resources.departures);
  return this;
};

SncfReqBuilder.prototype.listArrivals = function() {
  this.parts.push(resources.arrivals);
  return this;
};

SncfReqBuilder.prototype.listCommercialModes = function() {
  this.parts.push(resources.commercial_modes);
  return this;
};

SncfReqBuilder.prototype.listPhysicalModes = function() {
  this.parts.push(resources.physical_modes);
  return this;
};

SncfReqBuilder.prototype.listCompanies = function() {
  this.parts.push(resources.companies);
  return this;
};

SncfReqBuilder.prototype.listPlaces = function() {
  this.parts.push(resources.places);
  return this;
};

SncfReqBuilder.prototype.listPlacesNearby = function() {
  this.parts.push(resources.places_nearby);
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
