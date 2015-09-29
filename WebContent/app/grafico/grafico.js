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
	$scope.mostraFormGraficoVel = false;

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

		$scope.abriGraficoVel = function(){
			$scope.abreSelecionaGrafico = false;
			$scope.mostraFormGraficoVel = true;
		};

		$scope.geraGraficoVel = function(){

			$scope.objVel = {};
			$scope.objVel.name = $scope.chaveVel;
			$scope.objVel.data = [];
			$scope.objVel.data.push($scope.valorVel);


    $('#containerV').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: $scope.tituloVel
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 1,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            plotBands: [{
                from: 0,
                to: 0.3,
                color: '#DF5353' // red
            }, {
                from: 0.3,
                to: 0.6,
                color: '#DDDF0D' // yellow
            }, {
                from: 0.6,
                to: 1,
								color: '#55BF3B' // green
            }]
        },

        series: [$scope.objVel]

    });
}

$scope.abriGrafico3D = function(){
	$scope.abreSelecionaGrafico = false;
	$scope.mostraFormGrafico3D = true;
};

	$scope.rels = [];

$scope.geraGrafico3D = function(){

	for (var i = 0; i < $scope.series.length; i++) {
		$scope.series[i].pointPlacement = 'on';
		$scope.series[i].data = Object.keys($scope.series[i].data).map(function (key) {return parseInt($scope.series[i].data[key])});
	}

	console.log($scope.series);

	$('#containerLin').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: $scope.linha.titulo,
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: $scope.categorias,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: $scope.series

    });

}

 });
