masterGraphicsApp.controller('NovaRegiaoCtrl', function ($scope, $location, RegiaoService, ContaService) {

	$scope.regiao = new RegiaoService();
	
	$scope.regiao.cidades = [];
	
	$scope.contas = [];
	$scope.contas = ContaService.query();
	
	var idRegiao = $location.path().split(/[\s/]+/).pop();
 
	if(idRegiao != null){
		RegiaoService.get({id: idRegiao},
			function(data){
				$scope.regiao = data;
				console.log($scope.regiao);
				document.getElementById('conta').focus();
			}
		);
	}

	$scope.addCidade = function(cidade){
		$scope.regiao.cidades.push(cidade);
		$scope.novaCidade = null;
	};

	$scope.salvar = function(){
		
		console.log($scope.regiao.conta);
		
		$scope.regiao.$save({id: null},
			function(){
				alert('sucesso!!');
				$location.path("/regiao");
			},
			function(response){
				alert('erro!!');
			}

		);
		
	};
	
	$scope.removerCidadeAdicionada = function (cidade){				
		for ( var i = 0; i < $scope.regiao.cidades.length; i++) {			
			if(($scope.regiao.cidades[i].nome == cidade.nome) && ($scope.regiao.cidades[i].uf == cidade.uf)){				
				$scope.regiao.cidades.splice(i, 1);				
			};			
		};		
	};

});