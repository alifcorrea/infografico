masterGraphicsApp.controller('NovoIndicadorCtrl', function ($scope, $location, IndicadorService, TemaService){

	$scope.novoIndicador = new IndicadorService();

	$scope.temas = [];
	$scope.temas = TemaService.query();

	var idIndicador = $location.path().split(/[\s/]+/).pop();

	if(idIndicador != null){
		IndicadorService.get({id: idIndicador},
			function(data){
				$scope.novoIndicador = data;
			}
		);
	}

	$scope.addIndicador = function(indicador){
		$scope.indicador.nome.push(indicador);
		//$scope.novaCidade = null;
	};

	$scope.salvarNovoIndicador = function () {
		$scope.novoIndicador.$save({id: null},

			function(data){
				console.log('Sucesso');
			},
			function(data){
				console.log('Erro');
			}
		);
	};

	$scope.removerIndicadorAdicionado = function (indicador){
		for(var i = 0; i < $scope.indicador.nome.length; i++) {
			if(($scope.regiao.cidades[i].nome == cidade.nome) && ($scope.regiao.cidades[i].uf == cidade.uf)){
				$scope.regiao.cidades.splice(i, 1);
			};
		};
	};

});
