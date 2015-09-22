masterGraphicsApp.controller('IndexCtrl', function ($scope, $location) {
	$scope.titulo = "Sistema de Indicadores";
	
	$scope.irParaConta = function () {
		$location.path("/conta");
	};
	$scope.irParaNovaConta = function () {
		$location.path("/conta/cadastro");
	};
	$scope.irParaTema = function () {
		$location.path("/tema");
	};	
	$scope.irParaNovoTema = function () {
		$location.path("/tema/cadastro");
	};
	$scope.irParaRegiao = function () {
		$location.path("/regiao");
	};
	$scope.irParaNovaRegiao = function () {
		$location.path("/regiao/cadastro");
	};
	$scope.irParaRegiao = function () {
		$location.path("/regiao");
	};
	$scope.irParaNovaRegiao = function () {
		$location.path("/regiao/cadastro");
	};
	$scope.irParaIndicador = function () {
		$location.path("/indicador");
	};
	$scope.irParaNovoIndicador = function () {
		$location.path("/indicador/cadastro");
	};	
	$scope.irParaQuadro = function () {
		$location.path("/quadro");
	};
	$scope.irParaNovoQuadro = function () {
		$location.path("/quadro/cadastro");
	};
});