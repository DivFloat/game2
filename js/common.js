$(function(){
	var w1=$("#img").width();
	$("#img").css("height",w1);
	var h=$(window).height();
	$(".content-wrap").css("height",h*0.278+"px");
	$("body").css("height",h);
	var w1=$("#img").width();
	$("#img").css("height",w1);
	var h2=$("#d1-img").height();
	$("#d1-img").css("width",h2);
	var h4=$("#d2-img").height();
	$("#d2-img").css("width",h4);
	var h1=$("#hotgame").height();
	$("#hotgame").css("lineHeight",h1+"px");
	var h3=$("#icon").height();
	$("#icon").css("marginTop",h3*(-0.5)+"px");
	var w2=$(".d1").width();
	$(".d1 h2,.d2 h2,.d2 p,.d1 p").css("left",w2*0.08+h2+"px");
	var w3=$(".d1 h2").width();
	$(".d1 ul,.d2 ul").css("marginLeft",w3+w2*0.04+"px");
	var w4=$(".d1 span").width();
	$(".d1 span,.d2 span").css("marginLeft",w3+h2/2+w2*0.02+w4+"px");
});

