'use strict';

angular.module('appServices')
  .factory('QuadroService', function ($resource) {

    var resources = $resource('http://localhost:8081/infoGrafico/rest/quadro/:id',{
      id: '@id'
    });

    return resources; 

  });