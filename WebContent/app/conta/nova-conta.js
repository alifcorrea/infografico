masterGraphicsApp.controller('NovaContaCtrl', function ($scope, $location, ContaService) {

	$scope.novaConta = new ContaService();

	var idConta = $location.path().split(/[\s/]+/).pop();
	
	if(idConta != null){
		ContaService.get({id: idConta}, 
			function(data){
				$scope.novaConta = data;
			}
		);
	}

	$scope.salvarNovaConta = function () {
	
		$scope.novaConta.pessoa.cpf = $scope.novaConta.pessoa.cpf.replace(/[^0-9]+/g,'');
		
		//criptografia em base 64
		$scope.novaConta.senha = btoa($scope.novaConta.senha);
		
		$scope.novaConta.$save({id: null},
			
			function(data){
				console.log('Sucesso');
				
			},
			function(data){
				console.log('Erro');
			}
		);
		$location.path("/conta");
	};

});