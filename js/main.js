function calcular(){
    var valorbase = document.getElementById('valorbase').value;
    var iva = document.getElementById('iva');
    var fodinfa = document.getElementById('fodinfa');
    var total = document.getElementById('total');
    var peso = document.getElementById('peso').value;
    var envio = document.getElementById('enviocost');
    
    var pesoenv = parseFloat(peso) * 8;
    var ivatot = parseFloat(valorbase) * 0.15;
    var fodinfa_total = parseFloat(valorbase) * 0.05;
    var totalfin = parseFloat(valorbase) + 
    parseFloat(ivatot) + parseFloat(fodinfa_total) + parseFloat(pesoenv);
    
    if (valorbase.trim() == "" && peso.trim() == ""){
        alert("Ingrese sus valores")
    } else if (valorbase.trim() == "" || peso.trim() == ""){
        alert("Ingrese sus valores")
    } else {
        iva.value = ivatot.toFixed(2);
        fodinfa.value = fodinfa_total.toFixed(2);
        total.value = totalfin.toFixed(2);
        envio.value = pesoenv.toFixed(2);
        }
    }
    
    function limpiar(){
        var envio = document.getElementById('enviocost');
        peso.value = "";
        valorbase.value = "";
        iva.value = "";
        fodinfa.value = "";
        total.value = "";
        envio.value = "";
    }