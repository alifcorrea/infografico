$(function () {
			$('#grafico-PIB').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'PIB a preços correntes no ano (por mil reais)'
				},
				subtitle: {
					text: 'Fonte: IBGE 2013'
				},
				xAxis: {
					type: 'category'
				},
				yAxis: {
					title: {
						text: 'Por mil reais'
					}

				},
				legend: {
					enabled: false
				},
				plotOptions: {
					series: {
						borderWidth: 0,
						dataLabels: {
							enabled: true,
							format: '{point.y:.1f}'
						}
					}
				},

				tooltip: {
					headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
					pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.0f}</b> total<br/>'
				},

				series: [{
					name: "Cidade",
					colorByPoint: true,
					data: [{
						name: "Araquari",
						y: 637726,
						drilldown: "Araquari"
					}, {
						name: "Balneário Barra do Sul",
						y: 113971,
						drilldown: "Balneário Barra do Sul"
					}, {
						name: "Barra Velha",
						y: 569899,
						drilldown: "Barra Velha"
					}, {
						name: "Garuva",
						y: 457452,
						drilldown: "Garuva"
					}, {
						name: "Itapoá",
						y: 241947,
						drilldown: "Itapoá"
					}, {
						name: "Joinville",
						y: 18299283,
						drilldown: "Joinville"
					}, {
						name: "São Francisco do Sul",
						y: 5068800,
						drilldown: "São Francisco do Sul"
					}, { 
						name: "São João",
						y: 65129,
						drilldown: "São João"
					}]
				}]
			});
		});	
		
		
		
		$(function () {
		$('#grafico-setores-economicos').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Participação dos setores econômicos (%/ano)'
			},
			subtitle: {
				text: 'Fonte: IBGE 2012'
			},
			xAxis: {
				categories: ['Araquari', 'Balneário Barra do Sul', 'Barra Velha', 'Garuva', 'Itapoá', 'Joinville', 'São Francisco do Sul', 'São João'],
				tickmarkPlacement: 'on',
				title: {
					enabled: false
				}
			},
			yAxis: {
				title: {
					text: 'Porcentagem'
				},
				labels: {
					formatter: function () {
						return this.value;
					}
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: '%'
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
				}
			},
			series: [{
				name: 'Primário',
				data: [2, 6, 2, 2, 3, 0, 0, 14]
			}, {
				name: 'Secundário',
				data: [42,20, 35, 50, 14, 37, 21, 41]
			}, {
				name: 'Terciário',
				data: [45, 70, 54, 38, 75, 51, 38, 38]
			}, {
				name: 'Impostos	',
				data: [11, 4, 8, 10, 8, 13, 41, 7]
			}]
		});
	});
	
	
	
	$(function () {
		$('#grafico-producao-pesqueira').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Produção pesqueira e aquícola em kg/ano'
			},
			subtitle: {
				text: 'Fonte: IBGE 2013'
			},
			xAxis: {
				categories: ['Araquari', 'Balneário Barra do Sul', 'Barra Velha', 'Garuva', 'Itapoá', 'Joinville', 'São Francisco do Sul', 'São João'],
				tickmarkPlacement: 'on',
				title: {
					enabled: false
				}
			},
			yAxis: {
				title: {
					text: 'Kg/ano'
				},
				labels: {
					formatter: function () {
						return this.value;
					}
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: 'kg'
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
				}
			},
			series: [{
				name: 'Peixe',
				data: [112000, 4000, 68440, 450000, 0, 1700000, 30000, 15000]
			}, {
				name: 'Camarão',
				data: [6400, 22000, 0, 0, 0, 0, 151600, 0]
			}, {
				name: 'OVM',
				data: [10000, 0, 0, 0, 0, 0, 145000, 0]
			}, {
				name: 'Pesca (dados não encontrados)',
				data: []
			}]
		});
	});

	$(function () {
			$('#grafico-empresas-atuantes').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'Número de empresas atuantes/ano (2013)'
				},
				subtitle: {
					text: 'Fonte: IBGE 2013'
				},
				xAxis: {
					type: 'category'
				},
				yAxis: {
					title: {
						text: 'Número de Empresas'
					}

				},
				legend: {
					enabled: false
				},
				plotOptions: {
					series: {
						borderWidth: 0,
						dataLabels: {
							enabled: true,
							format: '{point.y:.1f}'
						}
					}
				},

				tooltip: {
					headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
					pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.0f}</b><br/>'
				},

				series: [{
					name: "Cidade",
					colorByPoint: true,
					data: [{
						name: "Araquari",
						y: 1394,
						drilldown: "Araquari"
					}, {
						name: "Balneário Barra do Sul",
						y: 415,
						drilldown: "Balneário Barra do Sul"
					}, {
						name: "Barra Velha",
						y: 1123,
						drilldown: "Barra Velha"
					}, {
						name: "Garuva",
						y: 880,
						drilldown: "Garuva"
					}, {
						name: "Itapoá",
						y: 687,
						drilldown: "Itapoá"
					}, {
						name: "Joinville",
						y: 21424,
						drilldown: "Joinville"
					}, {
						name: "São Francisco do Sul",
						y: 1783,
						drilldown: "São Francisco do Sul"
					}, { 
						name: "São João",
			 			y: 119,
						drilldown: "São João"
					}]
				}]
			});
		});	
		
		
	$(function () {
		$('#grafico-producao-pesqueira-reais').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Produção pesqueira e aquícola em mil reais/ano'
			},
			subtitle: {
				text: 'Fonte: IBGE 2013'
			},
			xAxis: {
				categories: ['Araquari', 'Balneário Barra do Sul', 'Barra Velha', 'Garuva', 'Itapoá', 'Joinville', 'São Francisco do Sul', 'São João'],
				tickmarkPlacement: 'on',
				title: {
					enabled: false
				}
			},
			yAxis: {
				title: {
					text: 'Mil reais/ano'
				},
				labels: {
					formatter: function () {
						return this.value;
					}
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: ' mil reais'
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
				}
			},
			series: [{
				name: 'Peixe',
				data: [302, 11, 185, 1215, 0, 4590, 81, 45]
			}, {
				name: 'Camarão',
				data: [96, 0, 0, 0, 0, 0, 2274, 0]
			}, {
				name: 'OVM',
				data: [0, 0, 0, 0, 0, 0, 477, 0]
			}, {
				name: 'Pesca (dados não encontrados)',
				data: []
			}]
		});
	});
	
	
	$(function () {
			$('#grafico-empresas-atuantes').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'Número de empresas atuantes/ano (2013)'
				},
				subtitle: {
					text: 'Fonte: IBGE 2013'
				},
				xAxis: {
					type: 'category'
				},
				yAxis: {
					title: {
						text: 'Número de Empresas'
					}

				},
				legend: {
					enabled: false
				},
				plotOptions: {
					series: {
						borderWidth: 0,
						dataLabels: {
							enabled: true,
							format: '{point.y:.1f}'
						}
					}
				},

				tooltip: {
					headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
					pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.0f}</b><br/>'
				},

				series: [{
					name: "Cidade",
					colorByPoint: true,
					data: [{
						name: "Araquari",
						y: 1394,
						drilldown: "Araquari"
					}, {
						name: "Balneário Barra do Sul",
						y: 415,
						drilldown: "Balneário Barra do Sul"
					}, {
						name: "Barra Velha",
						y: 1123,
						drilldown: "Barra Velha"
					}, {
						name: "Garuva",
						y: 880,
						drilldown: "Garuva"
					}, {
						name: "Itapoá",
						y: 687,
						drilldown: "Itapoá"
					}, {
						name: "Joinville",
						y: 21424,
						drilldown: "Joinville"
					}, {
						name: "São Francisco do Sul",
						y: 1783,
						drilldown: "São Francisco do Sul"
					}, { 
						name: "São João",
			 			y: 119,
						drilldown: "São João"
					}]
				}]
			});
		});	
		
		
	$(function () {
		$('#grafico-bruto-industria-precos').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Valor adicionado bruto da indústria a preços correntes/ano'
			},
			subtitle: {
				text: 'Fonte: IBGE 2013'
			},
			xAxis: {
				categories: ['Araquari', 'Balneário Barra do Sul', 'Barra Velha', 'Garuva', 'Itapoá', 'Joinville', 'São Francisco do Sul', 'São João'],
				tickmarkPlacement: 'on',
				title: {
					enabled: false
				}
			},
			yAxis: {
				title: {
					text: 'Preços correntes/ano'
				},
				labels: {
					formatter: function () {
						return this.value;
					}
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: ' reais'
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
				}
			},
			series: [{
				name: 'Agropecuária (Mil reais)',
				data: [16150, 6347, 13247, 7390, 7946, 35349, 7004, 9111]
			}, {
				name: 'Indústria',
				data: [268176, 22708, 199503, 227185, 32781, 6710552, 1054357, 26502]
			}, {
				name: 'Serviços',
				data: [285439, 79922, 309572, 176109, 182128, 9248009, 1905277, 25069]
			}]
		});
	});
	
	
$(function () {

		/* ini */
		$('#grafico-producao-lavouras').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Produção das lavouras permanentes em toneladas/ano'
			},
			subtitle: {
				text: 'Fonte: IBGE 2013'
			},
			xAxis: {
				categories: ['Araquari', 'Balneário Barra do Sul', 'Barra Velha', 'Garuva', 'Itapoá', 'Joinville', 'São Francisco do Sul', 'São João'],
				tickmarkPlacement: 'on',
				title: {
					enabled: false
				}
			},
			yAxis: {
				title: {
					text: 'Toneladas/ano'
				},
				labels: {
					formatter: function () {
						return this.value;
					}
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: ' toneladas'
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
				}
			},
			series: [{
            name: 'Banana',
            data: [6800, 0, 20700, 26400, 2200, 20700, 1440, 37500]

        }, {
            name: 'Maracujá',
            data: [360, 0, 0, 0, 0, 0 , 0, 0]

        }, {
            name: 'Palmito',
            data: [80, 175, 225, 1300, 0, 2000, 200, 200]

        }]
		
		});
		/* fim */
		
		
		/* ini */
		$('#grafico-numero-portos').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Número de portos presentes na região'
			},
			subtitle: {
				text: 'Fonte: ANTAQ 2014'
			},
			xAxis: {
				type: 'category'
			},
			yAxis: {
				title: {
					text: 'Portos'
				}

			},
			legend: {
				enabled: false
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					dataLabels: {
						enabled: true,
						format: ''
					}
				}
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
			},

			series: [{
				name: "Detalhes",
				colorByPoint: true,
				data: [{
					name: "Araquari",
					y: 0,
					drilldown: "Araquari"
				}, {
					name: "Barra do Sul",
					y: 0,
					drilldown: "Barra do Sul"
				}, {
					name: "Barra Velha",
					y: 0,
					drilldown: "Barra Velha"
				}, {
					name: "Garuva",
					y: 0,
					drilldown: "Garuva"
				}, {
					name: "Itapoá",
					y: 1,
					drilldown: "Itapoá"
				}, {
					name: "Joinville",
					y: 0,
					drilldown: "Joinville"
				}, {
					name: "São Chico",
					y: 2,
					drilldown: "São Chico"
				}, {
					name: "São João",
					y: 0,
					drilldown: "São João"
				}]
			}]
		});
		/* fim */
		
		
		/* ini */
		$('#grafico-faturamento-turismo-veraneio').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Relação entre o faturamento com turismo de veraneio e meses comuns do ano'
			},
			subtitle: {
				text: 'Fonte: FECOMÉRCIO 2014'
			},
			xAxis: {
				type: 'category'
			},
			yAxis: {
				title: {
					text: 'Porcentagem'
				}

			},
			legend: {
				enabled: false
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					dataLabels: {
						enabled: true,
						format: '{point.y}%'
					}
				}
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}%</b><br/>'
			},

			series: [{
				name: "Detalhes",
				colorByPoint: true,
				data: [{
					name: "Araquari",
					y: 0,
					drilldown: "Araquari"
				}, {
					name: "Barra do Sul",
					y: 0,
					drilldown: "Barra do Sul"
				}, {
					name: "Barra Velha",
					y: 16.3,
					drilldown: "Barra Velha"
				}, {
					name: "Garuva",
					y: 0,
					drilldown: "Garuva"
				}, {
					name: "Itapoá",
					y: 0,
					drilldown: "Itapoá"
				}, {
					name: "Joinville",
					y: 0,
					drilldown: "Joinville"
				}, {
					name: "São Chico",
					y: 22.6,
					drilldown: "São Chico"
				}, {
					name: "São João",
					y: 0,
					drilldown: "São João"
				}]
			}]
		});
		/* fim */
		
		
		/* ini */
		$('#grafico-rendimento-lavouras-permanentes-milreais').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Rendimento das lavouras permanentes por mil reais/ano'
			},
			subtitle: {
				text: 'Fonte: IBGE 2013'
			},
			xAxis: {
				type: 'category'
			},
			yAxis: {
				title: {
					text: 'Por mil reais'
				}

			},
			legend: {
				enabled: false
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					dataLabels: {
						enabled: true,
						format: ''
					}
				}
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> mil reais<br/>'
			},

			series: [{
				name: "Detalhes",
				colorByPoint: true,
				data: [{
					name: "Araquari",
					y: 4775,
					drilldown: "Araquari"
				}, {
					name: "Barra do Sul",
					y: 210,
					drilldown: "Barra do Sul"
				}, {
					name: "Barra Velha",
					y: 8731,
					drilldown: "Barra Velha"
				}, {
					name: "Garuva",
					y: 12358,
					drilldown: "Garuva"
				}, {
					name: "Itapoá",
					y: 912,
					drilldown: "Itapoá"
				}, {
					name: "Joinville",
					y: 16005,
					drilldown: "Joinville"
				}, {
					name: "São Chico",
					y: 1234,
					drilldown: "São Chico"
				}, {
					name: "São João",
					y: 13714,
					drilldown: "São João"
				}]
			}]
		});
		/* fim */
		
		
		/* ini */
		$('#grafico-movimentacao-portuaria-cargas').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Movimentação portuária total de cargas em toneladas/ano'
			},
			subtitle: {
				text: 'Fonte: ANTAQ 2014'
			},
			xAxis: {
				type: 'category'
			},
			yAxis: {
				title: {
					text: 'Toneladas/ano'
				}

			},
			legend: {
				enabled: false
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					dataLabels: {
						enabled: true,
						format: ''
					}
				}
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> toneladas<br/>'
			},

			series: [{
				name: "Detalhes",
				colorByPoint: true,
				data: [{
					name: "Araquari",
					y: 0,
					drilldown: "Araquari"
				}, {
					name: "Barra do Sul",
					y: 0,
					drilldown: "Barra do Sul"
				}, {
					name: "Barra Velha",
					y: 0,
					drilldown: "Barra Velha"
				}, {
					name: "Garuva",
					y: 0,
					drilldown: "Garuva"
				}, {
					name: "Itapoá",
					y: 4439852,
					drilldown: "Itapoá"
				}, {
					name: "Joinville",
					y: 0,
					drilldown: "Joinville"
				}, {
					name: "São Chico",
					y: 18210455,
					drilldown: "São Chico"
				}, {
					name: "São João",
					y: 0,
					drilldown: "São João"
				}]
			}]
		});
		/* fim */
		
});