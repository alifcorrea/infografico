angular.module('appControllers')
.controller('GraficoCtrl', function ($scope, $location, $sce, GraficoService) {

	$scope.editor = false;

	$scope.mostraFormGraficoPizza = false;
	$scope.abreSelecionaGrafico = true;
	$scope.titDialog = "Escolha um grafico";
	$scope.tpGrafico = '';
	$scope.tpMedida = '';

	$scope.snippet = '<p> teste </p>';
   $scope.deliberatelyTrustDangerousSnippet = function(texto) {
     return $sce.trustAsHtml(texto);
	}


$scope.pegarTexto = function(){
	 $scope.textoGrafico = CKEDITOR.instances.editor1.getData();
		console.log($scope.textoGrafico);
}

GraficoService.query(function(response){
	$scope.listGraficos = response;
	});


	$scope.naopodese = function(){
		for (var i = 0; i < $scope.listGraficos.length; i++) {

				$('#grafico'+i).highcharts(JSON.parse($scope.listGraficos[i].grafico));
		}
	}

$scope.geraValoresDosGraficosParaSalvarNoBanco = function(){
		$scope.graficoBD = new GraficoService();
		$scope.graficoBD.texto =  CKEDITOR.instances.editor2.getData();
		$scope.graficoBD.grafico = JSON.stringify($scope.valoresGrafico);

		console.log($scope.graficoBD);
		$scope.graficoBD.$save(function(){
				alert('certooooooooooooooo');
		},function(response){

		});

};

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
		alert('alert');
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
		for (var i = 0; i < $scope.series.length; i++) {
			$scope.series[i].data = Object.keys($scope.series[i].data).map(function (key) {return parseInt($scope.series[i].data[key])});
		};

		$scope.valoresGrafico = {
					chart: {
							type: 'column'
					},
					title: {
							text: $scope.linha.titulo
					},
					xAxis: {
							categories: $scope.categorias,
							crosshair: true
					},
					tooltip: {
							headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
							pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
									'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
							footerFormat: '</table>',
							shared: true,
							useHTML: true
					},
					plotOptions: {
							column: {
									pointPadding: 0.2,
									borderWidth: 0
							}
					},
					series: $scope.series
			};

		$('#containerCol').highcharts($scope.valoresGrafico);
		console.log(JSON.stringify($scope.valoresGrafico));
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

$scope.abriGraficoRegiao = function(){
	$scope.abreSelecionaGrafico = false;
	$scope.mostraFormGraficoRegiao = true;
}

$scope.gerarGraficoRegioes = function(){
	$('#containerCoCor').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: 'Efficiency Optimization by Branch'
	        },
	        xAxis: {
	            categories: [
	                'Seattle HQ',
	                'San Francisco',
	                'Tokyo'
	            ]
	        },
	        yAxis: [{
	            min: 0,
	            title: {
	                text: 'Employees'
	            }
	        }, {
	            title: {
	                text: 'Profit (millions)'
	            },
	            opposite: true
	        }],
	        legend: {
	            shadow: false
	        },
	        tooltip: {
	            shared: true
	        },
	        plotOptions: {
	            column: {
	                grouping: false,
	                shadow: false,
	                borderWidth: 0
	            }
	        },
	        series: [{
	            name: 'Employees',
	            color: 'rgba(165,170,217,1)',
	            data: [150, 73, 20],
	            pointPadding: 0.3,
	            pointPlacement: -0.2
	        }, {
	            name: 'Employees Optimized',
	            color: 'rgba(126,86,134,.9)',
	            data: [140, 90, 40],
	            pointPadding: 0.4,
	            pointPlacement: -0.2
	        }, {
	            name: 'Profit',
	            color: 'rgba(248,161,63,1)',
	            data: [183.6, 178.8, 198.5],
	            pointPadding: 0.3,
	            pointPlacement: 0.2,
	            yAxis: 1
	        }, {
	            name: 'Profit Optimized',
	            color: 'rgba(186,60,61,.9)',
	            data: [203.6, 198.8, 208.5],
	            pointPadding: 0.4,
	            pointPlacement: 0.2,
	            yAxis: 1
	        }]
	    });
}

 });
