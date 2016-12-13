var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer;
var l = 100;
var d = 0;
window.onload = function(){
	//encender/apagar al apretar/soltar una tecla
	
	document.onkeydown = function(){
		document.getElementById("war").src = "img/nave02.jpg";
		a = -g;  
		d = 10;
		
	}
	document.onkeyup = function(){
		document.getElementById("war").src = "img/nave01.jpg"; 
		  a = g;
		  d = 0;
	}
	//encender/apagar el motor al mantener click en la pantalla
	document.onmousedown = function(){
		
		document.getElementById("war").src = "img/nave02.jpg";
		a = -g;  
		d = 10;
		}
	document.onmouseup = function () {
		document.getElementById("war").src = "img/nave01.jpg"; 
		  a = g;
		  d = 0;	
		}
	//mostrar menú móvil
	
    document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
	start();
	}
	
	
	//Empezar a mover nave
	start();
	
}



function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}
function verificar() {
	if  (v<5){ 
		alert("ENHORABUENA ATERRIZAJE EXITOSO");
		clearInterval(timer);
	} 
	else { 
	document.getElementById("war").src = "img/explosion.jpg";
		clearInterval(timer);
	}
}	



function stop(){
	clearInterval(timer);
}

function moverNave(){
	
	l -= d * dt;
    document.getElementById("fuel").innerHTML=l;
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v;
	y +=v*dt;
	document.getElementById("altura").innerHTML=y;
	
	//mover hasta que top sea un 70% de la pantalla
	
	if  (y<10){ 
		stop();
	}
		
	else if (y<70){ 
		document.getElementById("nave").style.top = y+"%";
		
		
	} else { 
	

		verificar();
	}
}
