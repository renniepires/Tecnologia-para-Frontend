const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

const resultadoElement = document.getElementById("resultado");

resultadoElement.textContent = `A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`;