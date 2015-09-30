angular.module('appControllers')
.controller('IndicadorCtrl', function ($scope, $location, IndicadorService, TemaService, parametroTema) {
	
	/* PARAMETRO PASSADO DO TEMA */
	$scope.idTema = $location.path().split(/[\s/]+/).pop();		
	parametroTema.setIdentificacaoTema($scope.idTema);
	/* FIM PARAMETRO PASSADO DO TEMA */
	
	$scope.indicadores = [];
	IndicadorService.query(function(data){
		 $scope.indicadores = data;
		
		$scope.indicadoresDoTema = [];
		$scope.listagemIndicadores = [];		
		for ( var i = 0; i < $scope.indicadores.length; i++) {			
			if($scope.indicadores[i].tema.id == $scope.idTema){				 				
				$scope.indicadoresDoTema = $scope.indicadores[i];				
				console.log($scope.indicadoresDoTema);
				$scope.listagemIndicadores.push($scope.indicadoresDoTema);
		 	}
		}
		
	});
	
	$scope.novoIndicador = function(){
		$location.path("/indicador/cadastro");
	};
	
	$scope.temas = [];
	TemaService.query(function(data){
		$scope.temas = data;
		$scope.NomeTema = "";
	  	
	  	for ( var i = 0; i < $scope.temas.length; i++) {  		
	  		if($scope.temas[i].id == $scope.idTema){  			
	  			$scope.NomeTema = $scope.temas[i].nome;
	  		}
		}
	});  	
	
	
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
