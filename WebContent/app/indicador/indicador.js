angular.module('appControllers')
.controller('IndicadorCtrl', function ($scope, $location, IndicadorService, TemaService) {

	$scope.indicadores = [];
	$scope.indicadores = IndicadorService.query();

	$scope.temas = [];
	$scope.temas = TemaService.query();

	$scope.temaIndicador = function () {

		$scope.indicadores;
		$scope.temas;
	};

  	$scope.novoIndicador = function(){
  		$location.path("/indicador/cadastro");
  	};

  	$scope.excluir = function (indicador) {

  		var confirmacao = confirm("Deseja realmente excluir este registro?");

  		if(!indicador || confirmacao == false){

	  		for(var i = 0; i < $scope.indicadores.length; i++){

		  			if ($scope.indicadores[i].selecionado) {

		  				IndicadorService.delete(
				  			$scope.indicadores[i],
				  			function(data){
				  				$scope.indicadores = IndicadorService.query();
				  				console.log("Sucesso!");
				  			},
				  			function(data){
				  				console.log('Errou');
				  			}
		  				);
		  			};
	  			};

  		} else {

  			IndicadorService.delete(
	  			{
	  				id: indicador.id,
	  			},
	  			function(data){
	  				$scope.indicadores = IndicadorService.query();
	  				$scope.conta = ContaService.query();

	  			},
	  			function(data){
	  				console.log('Erro');
	  			}
	  		);
  		};

  	}


  $scope.alterar = function(indicador){
  	$location.path("/indicador/cadastro/"+indicador.id);
  };



 });
