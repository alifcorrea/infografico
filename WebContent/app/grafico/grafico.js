angular.module('appControllers')
.controller('GraficoCtrl', function ($scope, $location) {

	$scope.editor = false;

	$scope.mostraFormGraficoPizza = false;
	$scope.abreSelecionaGrafico = true;
	$scope.titDialog = "Escolha um grafico";
	$scope.tpGrafico = '';
	$scope.tpMedida = '';

	$scope.abreEditor = function(){
		$scope.editor = true;
		$scope.titDialog = "Adicione os o valores";
	};

	$scope.objs =  [];
	$scope.obj = {};
	$scope.geraNovoCampo = function(){

		if(!$scope.obj.name || !$scope.obj.y){
			alert('campo vazio');
			return;
		}
		$scope.objs.push($scope.obj);
		$scope.obj = {};
	};

	$scope.geraGraficoPIE = function(){
		$scope.mostraFormGraficoPizza = true;
		$scope.abreSelecionaGrafico = false;
	};

	$scope.geraGraficoColuna = function(){
		$scope.mostraFormGraficoColuna = true;
		$scope.abreSelecionaGrafico = false;
	};

	$scope.abriGraficoVelocimetro = function(){
		$scope.mostraFormVelocimetro = true;
		$scope.abreSelecionaGrafico = false;
	};


	$scope.geraDadosGraficoColuna = function(){
	$('#container1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: $scope.tituloGraficoColuna
        },
        subtitle: {
            text: null
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: null
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:6px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}'+$scope.tpMedida+'</b> do total<br/>'
        },
				series: [{
            colorByPoint: true,
            data: $scope.objs
        }]
    });
	};

  $scope.geraGraficoPizza = function(){
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: $scope.tituloGraficoPizza
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.2f}'+$scope.tpMedida+'</b>'
        },
        series: [{
            colorByPoint: true,
            data: $scope.objs
        }]
    });
  };

	$scope.mostraFormGraficoColunaHorizontal = false;
	$scope.mostraFormCategoria = true;
	$scope.mostraFormSeries = false;

	$scope.trocaTelaCategoriaParaSerie = function(){
		$scope.mostraFormCategoria = false;
		$scope.mostraFormSeries = true;
	}


	$scope.abriGraficoColunaHorizontal = function(){
		$scope.abreSelecionaGrafico = false;
		$scope.mostraFormGraficoColunaHorizontal = true;
		$scope.tpGrafico = 'line';
	};

	$scope.abriGraficoArea = function(){
		$scope.abreSelecionaGrafico = false;
		$scope.mostraFormGraficoColunaHorizontal = true;
		$scope.tpGrafico = 'area';
	}

	$scope.abriGraficoBar = function(){
		$scope.abreSelecionaGrafico = false;
		$scope.mostraFormGraficoColunaHorizontal = true;
		$scope.tpGrafico = 'bar';
	}


	$scope.series = [];
	  $scope.categorias = [];

		$scope.linha = {};

	  $scope.gerarGrafico = function() {

	  	for (var i = 0; i < $scope.series.length; i++) {
	  		$scope.series[i].data = Object.keys($scope.series[i].data).map(function (key) {return parseInt($scope.series[i].data[key])});
	  	};
	  	$('#containerH').highcharts({
				chart: {
            type: $scope.tpGrafico
        },
	        title: {
	            text: $scope.linha.titulo,
	        },
	        xAxis: {
	            categories: $scope.categorias
	        },
	        yAxis: {
	            title: {
	                text: $scope.linha.lateral
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]

	        },
	        tooltip: {
	            valueSuffix: $scope.linha.tpMedida
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: $scope.series
	    });
	  };



 });
