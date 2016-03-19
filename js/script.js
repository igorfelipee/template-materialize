/**
 * Created by LUCAS on 18/03/2016.
 */
$( document ).ready(function() {
    //Ativa o menu no mobile
    $(".button-collapse").sideNav();

    //Inicializando Parallax
    $('.parallax').parallax();
    var telaAlt = $( window ).height();
    // Aplica o tamanho da foto de acordo com a tela
    $('.home').css('height',telaAlt);

    /*var menuAlt = $('.menuSite').height();

    var contentHomeAlt = telaAlt - menuAlt;
    $('.contentHome').css('height',contentHomeAlt);*/
});

$(document).ready(function(){
  				 $('.ancora').click(function(){
     			 var alvo = $(this).attr('href').split('#').pop();
      		$('html, body').animate({scrollTop: $('#'+alvo).offset().top }, 1000);
      		return false;
        });
});
$(function(){
      $(".element").typed({
        strings: ["Igor Felipe"],
        typeSpeed: 20
      });
      $(".element-2").typed({
        strings: ["I develop web sites"],
        typeSpeed: 40
      });
  });
