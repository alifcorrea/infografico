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

$scope.abriGraficoVel2 = function(){
	$scope.abreSelecionaGrafico = false;
	$scope.mostraFormGraficoVel2 = true;
}

$scope.geraGraficoVel2 = function(){

	$scope.objVel = {};
	$scope.objVel.name = $scope.chaveVel;
	$scope.objVel.data = [];
	$scope.objVel.data.push($scope.valorVel)
	$scope.objVel.dataLabels = {};
	$scope.objVel.dataLabels.format = '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver"></span></div>'

	$scope.objVel.tooltip = {};
	$scope.objVel.tooltip.valueSuffix = 'KM/h';


console.log($scope.tituloVel);


	var gaugeOptions = {

			chart: {
					type: 'solidgauge'
			},

			title: null,

			pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
							backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
							innerRadius: '60%',
							outerRadius: '100%',
							shape: 'arc'
					}
			},

			tooltip: {
					enabled: false
			},

			// the value axis
			yAxis: {
					stops: [
							[0.1, '#DF5353'],  // red
							[0.5, '#DDDF0D'], // yellow
							[0.9, '#55BF3B']	// green
					],
					lineWidth: 0,
					minorTickInterval: null,
					tickPixelInterval: 400,
					tickWidth: 0,
					title: {
							y: -70
					},
					labels: {
							y: 16
					}
			},

			plotOptions: {
					solidgauge: {
							dataLabels: {
									y: 5,
									borderWidth: 0,
									useHTML: true
							}
					}
			}
	};

	// The speed gauge
	$('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
					min: 0,
					max: 1,
					title: {
							text: $scope.tituloVel
					}
			},

			credits: {
					enabled: false
			},

			series: [$scope.objVel]

	}));



}

$scope.abriGrafico3D = function(){
	$scope.abreSelecionaGrafico = false;
	$scope.mostraFormGrafico3D = true;
};

	$scope.rels = [];

$scope.geraGrafico3D = function(){

<<<<<<< HEAD
	for (var i = 0; i < $scope.series.length; i++) {
		$scope.series[i].pointPlacement = 'on';
		$scope.series[i].data = Object.keys($scope.series[i].data).map(function (key) {return parseInt($scope.series[i].data[key])});
	}

	$('#containerLin').highcharts({

=======
	$('#containerRe').highcharts({
>>>>>>> Development
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>2015',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   10.38],
                ['IE',       56.33],
                ['Chrome', 24.03],
                ['Safari',    4.77],
                ['Opera',     0.91],
								['Rodrigo',     16.9],
								['Venturi',     0.20],
								['Hahaha',     7.36],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });

}

 });
