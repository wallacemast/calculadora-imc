function exibeTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerText = texto;
}

exibeTextoNaTela("h2","Calculadora de IMC");


function calculaImc() {
    let peso = document.getElementById("peso").value;
    console.log(peso);
    let altura = document.getElementById("altura").value;
    console.log(altura);
    let imc = peso / (altura * altura);
    let resultado = 0;
    if (imc < 17){
         resultado = "Muito abaixo do peso";
    }if (imc >= 17 && imc < 18.5) {
         resultado = "Abaixo do peso";
    }if (imc >= 18.5 && imc < 24.5) {
        resultado = "Peso normal";
    }if (imc >= 25 && imc < 30) {
         resultado = "Acima do peso";
    }if (imc >= 30 && imc < 35) {
        resultado = "Obesidade I";
    }if (imc >= 35 && imc < 40) {
        resultado = "Obesidade II (severa)";
    }if (imc > 40) {
        resultado = "Obesidade III (mórbida)";
    }
    exibeTextoNaTela("h3",`Seu IMC é de ${imc.toFixed(2)}`);
    exibeTextoNaTela("p",`Isso significa: ${resultado}`);
}