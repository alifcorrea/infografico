masterGraphicsApp.controller('NovoTemaCtrl', function ($scope, $location, TemaService, ContaService) {
	
	$scope.contas = [];
	$scope.contas = ContaService.query();
	
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
	
	$scope.escolherUsuario = function(conta){
		$scope.tema.conta = conta;
		$scope.campoContaNm = conta.pessoa.nome;
	}
	
});