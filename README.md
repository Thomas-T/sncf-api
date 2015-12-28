#Sncf-API

![Travis](https://travis-ci.org/Thomas-T/sncf-api.svg?branch=master "travis result")

This is a simple wrapper for the SNCF (French National Railways Company) API.
[-> for more info on the API itself](https://data.sncf.com/api/fr/documentation "doc link")

#Getting started

Terminal : install from npm

    npm install sncf-api

JS

    // import the wrapper
    var SncfApi = require("sncf-api");

    // set credentials
    SncfApi.withCredentials('username','password');

    // create a request with req(), fill it (here with the listNetworks instructions), when your request is good, use build() then execute()
    SncfApi.req().listNetworks().build().execute(function(err, resp){
      // err is null if everything went good
    });

#Chained instructions

    // to list arrivals in a given networks
    SncfApi.req().withNetwork('given-network-id').listArrivals().build().execute(function(err, resp){
      // err is null if everything went good
    });    

You can chain every type of the following list :

* Networks
* Lines
* Routes
* StopPoints
* StopAreas
* Departures
* Arrivals
* CommercialModes
* PhysicalModes
* Companies
* Places
* PlacesNearby

For every type, you have 2 instructions :

* list
* with

eg : for the Lines type, you can use `listLines()` or `withLine()`
