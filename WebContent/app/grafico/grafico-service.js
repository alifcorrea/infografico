'use strict';

angular.module('appServices').factory('GraficoService', function ($resource) {

	var resources = $resource(
		'http://localhost:8081/infoGrafico/rest/post/:id',
		{
			id: '@id'
		}
	);

	return resources;

});
