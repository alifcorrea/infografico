'use strict';

angular.module('appServices')
  .factory('ContaService', function ($resource) {

    var resources = $resource('http://localhost:8081/infoGrafico/rest/conta/:id',{
      id: '@id'
    });

    return resources; 

  });