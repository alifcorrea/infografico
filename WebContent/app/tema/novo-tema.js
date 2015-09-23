masterGraphicsApp.controller('NovoTemaCtrl', function ($scope, $location, TemaService, RegiaoService) {
	
	$scope.regioes = [];
	$scope.regioes = RegiaoService.query();
	
	$scope.tema = new TemaService();
	
	var idTema = $location.path().split(/[\s/]+/).pop();	
	
	if(idTema != null){		
		TemaService.get({id: idTema},
			function(data){
				$scope.tema = data;
				
				document.getElementById('nmPessoa').value = data.conta.pessoa.nome;
				document.getElementById('nome').focus();
			}
		);
	}
	
	$scope.salvar = function(){		
		$scope.tema.$save({id: null},
			function(){
				console.log($scope.tema);
				alert('sucesso!!');
				$location.path("/tema");
			},
			function(response){
				alert('erro!!');
			}
		);		
	};

	
	$scope.escolherRegiao = function(regiao){
		$scope.tema.regiao = regiao;
		$scope.nome = regiao.nome;
	}
	
});