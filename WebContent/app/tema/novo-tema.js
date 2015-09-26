masterGraphicsApp.controller('NovoTemaCtrl', function ($scope, $location, TemaService, RegiaoService) {

	$scope.regioes = [];
	$scope.regioes = RegiaoService.query();
	
	$scope.tema = [];
	$scope.tema = new TemaService();
	
	$scope.regioes = [];
	$scope.regioes = RegiaoService.query();
	
	var idTema = $location.path().split(/[\s/]+/).pop();	
	
	if(idTema != null){		
		TemaService.get({id: idTema},
			function(data){
				$scope.tema = data;
			}
		);
	}
	
	$scope.salvar = function(){		
		$scope.tema.$save({id: null},
			function(){
				$location.path("/tema");
			},
			function(response){
			}
		);		
	};


	$scope.escolherRegiao = function(regiao){
		$scope.tema.regiao = regiao;
		$scope.tema.regiao.nome = regiao.nome;
	}
	
	$scope.alterarTema = function(tema){
		$location.path("/tema/cadastro/"+tema.id);
	};

});