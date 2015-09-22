masterGraphicsApp.controller('NovoQuadroCtrl', function ($scope, $location, QuadroService){
	
	$scope.novoQuadro = new QuadroService();
	

	var idQuadro = $location.path().split(/[\s/]+/).pop();

	if(idQuadro != null){
		QuadroService.get({id: idQuadro}, 
			function(data){
				$scope.novoQuadro = data;
			}
		);
	}

	$scope.salvarNovoQuadro = function (quadro) {
		
		//console.log(quadro);
		$scope.novoQuadro.$save({id: null},
					
			function(data){
				console.log('Sucesso');
				$location.path("/tema");
			},
			function(data){
				console.log('Erro');
			}
		);
	};
	
});