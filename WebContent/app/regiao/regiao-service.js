'use strict';

angular.module('appServices')
  .factory('RegiaoService', function ($resource) {

    var resources = $resource('http://localhost:8081/infoGrafico/rest/regiao/:id',{
      id: '@id'
    });

    return resources; 

  });