angular.module('appControllers')
.controller('QuadroCtrl', function ($scope, $location, QuadroService) {

	$scope.quadros = []; 
	$scope.quadros = QuadroService.query();
	
  	$scope.novoQuadro = function(quadro){
  		$location.path("/quadro/cadastro/");
  	};
  	
  	$scope.excluir = function (quadro) {
  		
  		var confirmacao = confirm("Deseja realmente excluir este registro?");
  		
  		if(!quadro || confirmacao == false){
  		
	  		for(var i = 0; i < $scope.quadros.length; i++){
	  				
		  			if ($scope.quadros[i].selecionado) {
		 
		  				QuadroService.delete(
				  			$scope.quadros[i],
				  			function(data){
				  				$scope.quadros = QuadroService.query();
				  				console.log("Sucesso!");
				  			}, 
				  			function(data){
				  				console.log('Errou');
				  			}
		  				);
		  			};
	  			};
	  			
  		} else {

  			QuadroService.delete(
	  			{
	  				id: quadro.id,
	  			},
	  			function(data){
	  				$scope.quadros = QuadroService.query();	  				
	  			},
	  			function(data){
	  				console.log('Erro');
	  			}
	  		);
  		};	
  	}
  	
  $scope.alterar = function(quadro){	  
  	$location.path("/quadro/cadastro/"+quadro.id);
  };
  
 });