angular.module('appControllers').controller('RegiaoCtrl', function ($scope, $location, RegiaoService) {

	$scope.regioes = new RegiaoService();
	
	RegiaoService.query(
		  function(data){
			  $scope.regioes = data;
		  }, function(response){
		  }
	);
	
	
	$scope.excluirRegiao = function (regiao){	
		
		var confirmacao = confirm("Deseja realmente excluir esta região?");
		
		if(!regiao || confirmacao == false){
	  		for(var i = 0; i < $scope.regioes.length; i++){
	  			if ($scope.regioes[i].selecionado) {
			  		RegiaoService.delete(
			  			$scope.regioes[i],
			  			function(data){
			  				console.log('Sucesso if');
			  			},
			  			function(data){
			  				console.log('Errou');
			  			}
			  		);
	  			};
	  		};
  		} else {
	  		RegiaoService.delete(
	  			{
	  				id: regiao.id
	  			},
	  			function(data){
	  				console.log('Sucesso else');
	  			},
	  			function(data){
	  				console.log('Errou');
	  			}
	  		);
  		};
		
		RegiaoService.query(
	  			  function(data){
	  				  $scope.regioes = data;
	  			  }, function(response){
	  			  }
	  	); 
	}
		
	$scope.registrarRegiao = function(){
		$location.path("/regiao/cadastro");
	};
	
	$scope.alterarRegiao = function(regiao){
		$location.path("/regiao/cadastro/"+regiao.id);
	};
	 
  
  });