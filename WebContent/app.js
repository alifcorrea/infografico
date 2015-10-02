$(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();
});

angular.module('appControllers', ['ngRoute']);
angular.module('appServices', []);
angular.module('appDirectives', []);
angular.module('appFilters', []);

var masterGraphicsApp = angular.module(
   'masterGraphicsApp',
   [
      'appControllers',
      'appServices',
      'appDirectives',
      'appFilters',
      'ngResource',
      'ngRoute',
      'ngAnimate',
      'mgcrea.ngStrap.tooltip'
   ]
);

masterGraphicsApp.config(function($routeProvider, $locationProvider){

	  $routeProvider

    // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
    .when('/principal', {
       templateUrl : 'app/template/index.html',
       controller     : 'PrincipalCtrl',
    })

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/grafico', {
	      templateUrl : 'app/grafico/grafico.html',
	      controller     : 'GraficoCtrl',
	   })

	 .when('/quadro', {
      templateUrl : 'app/quadro/quadro.html',
      controller  : 'QuadroCtrl',
	 })

   .when('/quadro/cadastro', {
	  templateUrl : 'app/quadro/novo-quadro.html',
	  controller  : 'NovoQuadroCtrl',
	})

  .when('/quadro/larva', {
   templateUrl : 'app/quadro/blocoMovimento/quadro-movimento.html',
   controller  : 'QuadroLarvaCtrl',
 })

	.when('/quadro/cadastro/:id', {
      templateUrl : 'app/quadro/novo-quadro.html',
      controller     : 'NovoQuadroCtrl',
   })

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/conta', {
      templateUrl : 'app/conta/conta.html',
      controller     : 'ContaCtrl',
   })

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/conta/cadastro', {
      templateUrl : 'app/conta/nova-conta.html',
      controller     : 'NovaContaCtrl',
   })

   .when('/conta/cadastro/:id', {
      templateUrl : 'app/conta/nova-conta.html',
      controller     : 'NovaContaCtrl',
   })

   .when('/regiao', {
      templateUrl : 'app/regiao/regiao.html',
      controller     : 'RegiaoCtrl',
   })

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/regiao/cadastro', {
      templateUrl : 'app/regiao/nova-regiao.html',
      controller: 'NovaRegiaoCtrl',
   })

   .when('/regiao/cadastro/:id', {
      templateUrl : 'app/regiao/nova-regiao.html',
      controller     : 'NovaRegiaoCtrl',
   })

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/tema', {
      templateUrl : 'app/tema/tema.html',
      controller: 'TemaCtrl',
   })

   .when('/tema/cadastro', {
      templateUrl : 'app/tema/novo-tema.html',
      controller     : 'NovoTemaCtrl',
   })

   .when('/tema/cadastro/:id', {
      templateUrl : 'app/tema/novo-tema.html',
      controller     : 'NovoTemaCtrl',
   })

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/indicador', {
      templateUrl : 'app/indicador/indicador.html',
      controller: 'IndicadorCtrl',
   })
   
    .when('/indicador/cadastro', {
      templateUrl : 'app/indicador/novo-indicador.html',
      controller: 'NovoIndicadorCtrl',
   })
   
   .when('/indicador/:id', {
      templateUrl : 'app/indicador/indicador.html',
      controller: 'IndicadorCtrl',
   })   
   
   .when('/indicador/cadastro/:id', {
      templateUrl : 'app/indicador/novo-indicador.html',
      controller: 'NovoIndicadorCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/tema' });

});
