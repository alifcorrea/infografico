angular.module('appControllers')
.controller('ContaCtrl', function ($scope, $location, ContaService) {

	$scope.contas = []; 
  	$scope.contas = ContaService.query();

  	$scope.novaConta = function(){
  		$location.path("/conta/cadastro/");
  	};

  	$scope.excluir = function (conta) {
  		
  		var confirmacao = confirm("Deseja realmente excluir este registro?");
  		
  		if(!conta || confirmacao == false){
  		
	  		for(var i = 0; i < $scope.contas.length; i++){
	  				
		  			if ($scope.contas[i].selecionado) {
		 
				  		ContaService.delete(
				  			$scope.contas[i],
				  			function(data){
				  				$scope.contas = ContaService.query();
				  				console.log("Sucesso!");				  			},
				  			function(data){
				  				console.log('Errou');
				  			}
				  	);
	  			};
	  		};
  		} else {

	  		ContaService.delete(
	  			{
	  				id: conta.id,
	  			},
	  			function(data){
	  				$scope.contas = ContaService.query();
	  			},
	  			function(data){
	  				console.log('Erro');
	  			}
	  		);
  		};		
  	}

  $scope.alterar = function(conta){	
	  
  	$location.path("/conta/cadastro/"+conta.id);
  };
  
 });