'use strict';

angular.module('appServices')
  .factory('IndicadorService', function ($resource) {

    var resouces = $resource('http://localhost:8081/infoGrafico/rest/indicador/:id',{
      id: '@id'
    });

    return resouces; 

  });