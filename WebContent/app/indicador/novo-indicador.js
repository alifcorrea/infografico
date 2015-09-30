masterGraphicsApp.controller('NovoIndicadorCtrl', function ($scope, $location, IndicadorService, TemaService, parametroTema){
	
	$scope.indicador = new IndicadorService();

	/*parametroTema*/
	$scope.idTema = parametroTema.getIdentificacaoTema();
	
	$scope.temas = [];
	TemaService.query(function(data){
		$scope.temas = data;
		$scope.NomeTema = "";
		$scope.NomeTema = $scope.temas[0].nome;
	}); 
	
	var idIndicador = $location.path().split(/[\s/]+/).pop();

	if(idIndicador != null){
		IndicadorService.get({id: idIndicador},
			function(data){
				$scope.indicador = data;
			}
		);
	}

	$scope.salvarNovoIndicador = function () {
		
		if($scope.indicador.id === undefined){
			$scope.indicador.id = 0;
		}
		
		$scope.indicador.tema = {};
		$scope.indicador.tema.id = $scope.idTema;
		
		console.log($scope.indicador);
		
		$scope.indicador.$save({id: null},

			function(data){
				console.log('Sucesso');
				$location.path("/indicador/"+$scope.idTema);
			},
			function(data){
				console.log('Erro');
			}
		);
	};
	
	$scope.cancelarCadastroIndicador = function(){
		$location.path("/indicador/"+$scope.idTema);
	}
	
});
