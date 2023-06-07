/* Função do botão para ver texto sobre professor */

$(".texto_area").addClass("fechada");
	
	$(".botao_texto").click(function() {
        
		var altura = $(".texto_area").height();
		if($(".texto_area").hasClass("fechada")) {
			$(".texto_area").animate({height:'210'},{queue:false, duration:300}).removeClass("fechada");
		}
		else {
			$(".texto_area").animate({height:'0'},{queue:false, duration:300}).addClass("fechada");
		}
	});

$(".texto_area_2").addClass("fechada_2");
	
	$(".botao_texto_2").click(function() {
        
		var altura = $(".texto_area_2").height();
		if($(".texto_area_2").hasClass("fechada_2")) {
			$(".texto_area_2").animate({height:'210'},{queue:false, duration:300}).removeClass("fechada_2");
		}
		else {
			$(".texto_area_2").animate({height:'0'},{queue:false, duration:300}).addClass("fechada_2");
		}
	});

$(".texto_area_3").addClass("fechada_3");
	
	$(".botao_texto_3").click(function() {
        
		var altura = $(".texto_area_3").height();
		if($(".texto_area_3").hasClass("fechada_3")) {
			$(".texto_area_3").animate({height:'210'},{queue:false, duration:300}).removeClass("fechada_3");
		}
		else {
			$(".texto_area_3").animate({height:'0'},{queue:false, duration:300}).addClass("fechada_3");
		}
	});

$(".texto_area_4").addClass("fechada_4");
	
	$(".botao_texto_4").click(function() {
        
		var altura = $(".texto_area_4").height();
		if($(".texto_area_4").hasClass("fechada_4")) {
			$(".texto_area_4").animate({height:'210'},{queue:false, duration:300}).removeClass("fechada_4");
		}
		else {
			$(".texto_area_4").animate({height:'0'},{queue:false, duration:300}).addClass("fechada_4");
		}
	});
	
	