'use strict';

angular.module('appServices')
  .factory('TemaService', function ($resource) {

    var resources = $resource('http://localhost:8081/infoGrafico/rest/tema/:id',{
      id: '@id'
    });

    return resources; 

  });