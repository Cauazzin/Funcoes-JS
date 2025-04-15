/* var num1 = 6
var num2 =7 */

/* function soma(){
    var soma = num1 + num2
    alert(soma)
}
soma() */


/* function soma(){
    var resultado = num1 + num2
    return resultado
}
alert(soma()) */


/* function soma(num1, num2){
     return num1 + num2
}
alert(soma(num1, num2)) */


var peso = Number(prompt("Digite seu peso"))
var altura = Number(prompt("Digite sua altura"))

function imc (peso, altura){
    return (peso / (altura * altura)).toFixed(2)
}

var resultado = imc(peso, altura)
alert("Seu IMC é: " + resultado)



