angular.module('appControllers').controller('TemaCtrl', function ($scope, $location, TemaService) {

	$scope.temas = new TemaService();
	
	TemaService.query(
		  function(data){
			  $scope.temas = data;
		  	}, function(response){
		}
	);

	$scope.excluirTema = function (tema){		
		
		var confirmacao = confirm("Deseja realmente excluir este tema?");
		
		if(!tema || confirmacao == false){		
			
	  		for(var i = 0; i < $scope.temas.length; i++){
	  			if ($scope.temas[i].selecionado) {
			  		TemaService.delete(
			  			$scope.temas[i],
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
	  		TemaService.delete(
	  			{
	  				id: tema.id
	  			},
	  			function(data){
	  				console.log('Sucesso else');
	  			},
	  			function(data){
	  				console.log('Errou');
	  			}
	  		);
  		};
		
		TemaService.query(
			function(data){
				$scope.temas = data;
			}, function(response){
		});
	}
		
	$scope.registrarTema = function(){
		$location.path("/tema/cadastro");
	};
	
	$scope.alterarTema = function(tema){
		$location.path("/tema/cadastro/"+tema.id);
	};
	 
	$scope.listaIndicadores = function(){
		$location.path("/indicador");
	};
  
  });