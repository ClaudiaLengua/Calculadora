Calculadora = (function(){
	ope=''
	numero1=''
	numero2=''
	presionar = function() {
        this.style.width = "76px";
		this.style.height = "62px";
    }
	levantar = function() {
        this.style.width = "77px";
		this.style.height = "63px";
    }
	borrar = function(){
		document.getElementById('display').innerHTML='0'
	}
	mostrar = function(){
		valor=document.getElementById('display').innerHTML
		if(this.id==0 && valor==0){
			valor=0
		}else{
			if(valor.length < 8){
				if(valor==0){
					valor=this.id
				}else{
					valor=valor.concat(this.id)
				}
				document.getElementById('display').innerHTML=valor
				console.log(valor.length)
			}
		}
	}
	punto = function(){
		valor=document.getElementById('display').innerHTML
		pos=valor.indexOf(".")
		console.log(pos)
		if(valor.indexOf(".")==-1){
			valor=valor.concat(".")
			pos=valor.indexOf(".")
			document.getElementById('display').innerHTML=valor
		}
	}
	signo = function(){
		valor=document.getElementById('display').innerHTML
		sig=valor.indexOf("-")
		if(this.id==0 && valor==0){
			valor=0
		}else{
			if(valor.length <= 8){
				if(valor==0){
					valor=0
				}else{
					if(valor<0){
						valor=valor.substr(1,valor.length)
					}else if(sig<0){
						valor=("-").concat(valor)
					}
				}
				document.getElementById('display').innerHTML=valor
				console.log(valor.length)
			}
		}
	}
	operacion = function(){
		numero1=document.getElementById('display').innerHTML
		if(this.id=='mas'){ope='+'}else if(this.id=='menos'){ope='-'}else if(this.id=='por'){ope='*'}else if(this.id=='dividido'){ope='/'}
		document.getElementById('display').innerHTML=null
		console.log(numero1)
		console.log(ope)
	}
	calcular = function(){
		num1 = parseFloat(numero1)
		numero2 = document.getElementById('display').innerHTML
		num2 = parseFloat(numero2)
		result=0
		console.log(numero1)
		console.log(numero2)
		console.log(ope)
		if(ope=="+"){
			result=num1+num2
		}else if(ope=="-"){
			result=num1-num2
		}else if(ope=="*"){
			result=num1*num2
		}else if(ope=="/"){
			result=num1/num2
		}
		document.getElementById('display').innerHTML=result
	}
	nombres=document.getElementsByClassName('tecla');
	totl=nombres.length
	for (i=0; i<totl-1;i++){
		press=(nombres[i].id).toString()
		document.getElementById(press).onmousedown = presionar;
		document.getElementById(press).onmouseup = levantar;
		if(press=='on'){
			document.getElementById(press).onclick = borrar;
		}else if(press=='punto'){
			document.getElementById(press).onclick = punto;
		}else if(press=='sign'){
			document.getElementById(press).onclick = signo;
		}else if(press=='menos' || press=='por' || press=='dividido'){
			document.getElementById(press).onclick = operacion;
		}else if(press=='igual'){
			document.getElementById(press).onclick = calcular;
		}else if(press=='raiz'){
			document.getElementById('display').innerHTML=document.getElementById('display').innerHTML
		}else{
			document.getElementById(press).onclick = mostrar;
		}
	}
	
	document.getElementById("mas").onmousedown = function(){this.style.width = "76px"; this.style.height = "137px";}
	document.getElementById("mas").onmouseup = function(){this.style.width = "77px"; this.style.height = "138px";}
	document.getElementById("mas").onclick = operacion;
})();