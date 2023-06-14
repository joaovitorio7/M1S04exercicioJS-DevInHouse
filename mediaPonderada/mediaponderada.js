var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var peso1 = parseFloat(prompt("Digite o peso da primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var peso3 = parseFloat(prompt("Digite o peso da terceira nota:"));

var somaPesos = peso1 + peso2 + peso3;
var somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
var mediaPonderada = somaNotas / somaPesos;
mediaPonderada = mediaPonderada.toFixed(2);

console.log("A média ponderada das notas é: " + mediaPonderada);
