let valorbase = document.getElementById('valorbase').value;
let peso = document.getElementById('peso').value;
let envio = document.getElementById('envcost');
let total = document.getElementById('total');

let costenv = parseFloat(peso) * 8;
let totaleng = parseFloat(valorbase) + parseFloat(costenv);

function calcular(){        
    if (!valorbase.trim() || !peso.trim()){
        alert("Ingrese sus valores");
    } else if (valorbase.trim() < 400){
        envio.value = costenv.toFixed(2);
        total.value = totaleng.toFixed(2);
    } else{ 
        alert("Valores mayores a 400 USD usar la otra calculadora") 
    }
    }
    
function limpiar(){
    let valorbase = document.getElementById('valorbase');
    let peso = document.getElementById('peso');
    valorbase.value = "";
    peso.value = "";
    envio.value = "";
    total.value = "";
    }