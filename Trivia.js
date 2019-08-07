function check(){
	var pregunta1 = document.quiz.pregunta1.value;
	var pregunta2 = document.quiz2.pregunta2.value;
	var pregunta3 = document.quiz.pregunta3.value;
	var pregunta4 = document.quiz2.pregunta4.value;
	var pregunta5 = document.quiz.pregunta5.value;
	var pregunta6 = document.quiz2.pregunta6.value;
	var pregunta7 = document.quiz.pregunta7.value;
	var pregunta8 = document.quiz2.pregunta8.value;
	var pregunta9 = document.quiz.pregunta9.value;
	var pregunta10 = document.quiz2.pregunta10.value;
	var correcta = 0;
	
	   if(pregunta1 == "opcion2"){
		   correcta++;
	   }
	   if(pregunta2 == "opcion3"){
		   correcta++;
	   }
	   if(pregunta3 == "opcion1"){
		   correcta++;
	   }
	   if(pregunta4 == "opcion4"){
		   correcta++;
	   }
	   if(pregunta5 == "opcion2"){
		   correcta++;
	   }
	   if(pregunta6 == "opcion1"){
		   correcta++;
	   }
	   if(pregunta7 == "opcion4"){
		   correcta++;
	   }
	   if(pregunta8 == "opcion3"){
		   correcta++;
	   }
	   if(pregunta9 == "opcion1"){
		   correcta++;
	   }
	   if(pregunta10 == "opcion3"){
		   correcta++;
	   }
	   
var mensajes = ["Segui participando.", "Eso esta bien.", "Bien Hecho!", "Perfecto!!"];
var imagenes = ["img/mal.gif", "img/meh.gif", "img/regular.gif", "img/perfecto.jpg"];
var range;
    if(correcta < 3){
		range = 0;
	}
	if(correcta > 2 && correcta < 5){
		range = 1;
	}
	if(correcta > 4 && correcta <10){
		range = 2;
	}
	if(correcta > 9){
		range = 3;
	}
	   
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("mensajes").innerHTML = mensajes[range];
document.getElementById("opcion_correcta").innerHTML = "Tienes " + correcta + " respuestas correctas";
document.getElementById("imagen").src = imagenes[range];
}