angular.module('appDirectives', [])
.directive('larva', ['$document', function($document) {
	return {
		templateUrl: 'diretivas/templates/larva-element.html',
		restrict: 'A',
		transclude: true,
		scope: {
		  'redimencionar': '@',
		  'girar': '@',
		  'mover': '@'
		},
		link: function(scope, element, attr) {

			var startX = 0, startY = 0, x = 0, y = 0, largura, altura, larva, obj;

			var cssLarva = {};
			cssLarva.position = 'absolute';
			cssLarva.cursor = 'pointer';

			if (y < 0) {
				//cssLarva.top = '0px';
			};
			if (x < 0) {
				//cssLarva.left = '0px';
			};

			element.css(cssLarva);

			element.on('mousedown', function(event) {
			// Prevent default dragging of selected content
				event.preventDefault();

				console.log(event.target);
				if(event.target.className.match(/btn-excluir/)){
					console.log('Excluir!!!');
					console.log(procurarLarva(event.target));
					procurarLarva(event.target).remove();
				}

				if(event.button === 2){

					//document.body.oncontextmenu = function() {return false;}

					console.log(element);
					var tempMenu = element.oncontextmenu;
					element.oncontextmenu = function() {return false;}
					menu = element[0].querySelector('.context-menu');
					console.log(menu);
					menu.style.display = 'block';
					menu.onmouseout = function(tempMenu) {
						console.log('Saiu do Menu!');
						console.log(event.fromElement);
						console.log(event.toElement);
						console.log(event.target);
						console.log(event.relatedTarget);
						if (event.target.className.match(/context-menu/)) {
							menu.style.display = 'none';
							menu.onmouseout = null;
							//element.oncontextmenu = tempMenu;
						};
					}

					return;
				}

				if(event.target.className.match(/arrastar/) && scope.mover){

					startX = event.pageX - x;
					startY = event.pageY - y;
				
					$document.on('mousemove', mouseMoveMover);
					$document.on('mouseup', mouseUpMover);
				}
				if(event.target.className.match(/btn-girar/) && scope.girar){

					obj = event.target.parentElement;
					larva = obj.parentElement;

					offSetX = parseInt(larva.style.left);
					offSetY = parseInt(larva.style.top);
					
					startX = offSetX + ( parseInt(obj.style.width) / 2 ) + 285;
					startY = offSetY + ( parseInt(obj.style.height) / 2 ) + 90;

					$document.on('mousemove', mouseMoveGirar);
					$document.on('mouseup', mouseUpGirar);
				}
				if(event.target.className.match(/btn-redimencionar/) && scope.redimencionar){

					obj = event.target.parentElement;

					startX = event.pageX;
					startY = event.pageY;

					largura = parseInt(obj.style.width);
					altura = parseInt(obj.style.height);

					$document.on('mousemove', mouseMoveRedimencionar);
					$document.on('mouseup', mouseUpRedimencionar);
				}
			});

			function mouseMoveMover(event) {
				y = event.pageY - startY;
				x = event.pageX - startX;
				element.css({
					top: y + 'px',
					left:  x + 'px'
				});
			}

			function mouseUpMover() {

				$document.off('mousemove', mouseMoveMover);
				$document.off('mouseup', mouseUpMover);
			}

			function mouseMoveGirar(event) {

				atualX = event.pageX;
				atualY = event.pageY;

				var radians = Math.atan2(atualX - startX, atualY - startY);
		    	var degree = (radians * (180 / Math.PI) * -1) + 180;

		    	obj.style.transform = 'rotateZ(' + degree + 'deg)';

			}

			function mouseUpGirar() {
				$document.off('mousemove', mouseMoveGirar);
				$document.off('mouseup', mouseUpGirar);
			}

			function mouseMoveRedimencionar(event) {

				obj.style.width = largura + (event.pageX - startX) + 'px';
				obj.style.height = altura + (event.pageY - startY) + 'px';
			}

			function mouseUpRedimencionar() {
				$document.off('mousemove', mouseMoveRedimencionar);
				$document.off('mouseup', mouseUpRedimencionar);
			}

			function procurarLarva(obj) {
				if (obj.hasAttribute('larva')) {
					return obj;
				} else {
					if (obj.parentElement) {
						return procurarLarva(obj.parentElement);
					} else {
						console.log('Não achamos a larva');
					}
				}
			}
			
		}
	};
}]);
