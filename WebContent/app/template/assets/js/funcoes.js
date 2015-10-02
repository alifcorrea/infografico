$(document).ready(function(){

  $("#tema1, #tema2, #tema3, #tema4, #tema5").tipsy();

  $("#tema1").click(function(){

    $(".fundo-menu-indicador").slideToggle('fast');
    $("#indicador1, #indicador2, #indicador3, #indicador4, #indicador5, #indicador6, #indicador7, #indicador8, #indicador9, #indicador10, #indicador11, #indicador12, #indicador13, #indicador14, #indicador15, #indicador16, #indicador17, #indicador18, #indicador19").tipsy();

  });

});
