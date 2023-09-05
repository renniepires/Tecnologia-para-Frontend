
let maiorAltura = 0;
let menorAltura = Infinity;
let somaAlturaHomens = 0;
let numMulheres = 0;

for (let i = 1; i <= 15; i++) {
  const alturaCm = parseFloat(prompt(`Digite a altura da pessoa ${i} em centímetros:`));
  const genero = prompt(`Digite o gênero da pessoa ${i} (H para homem, M para mulher):`).toUpperCase();

  if (!isNaN(alturaCm)) {

    const alturaMetros = alturaCm / 100;


    if (alturaMetros > maiorAltura) {
      maiorAltura = alturaMetros;
    }
    if (alturaMetros < menorAltura) {
      menorAltura = alturaMetros;
    }

    if (genero === 'H') {
      somaAlturaHomens += alturaMetros;
    } else if (genero === 'M') {
      numMulheres++;
    }
  } else {
    alert(`Altura inválida para a pessoa ${i}. Por favor, digite um número válido.`);
    i--;
  }
}


const mediaAlturaHomens = somaAlturaHomens / (15 - numMulheres);

const resultadosDiv = document.createElement('div');
resultadosDiv.innerHTML = `
  <h2>Resultados:</h2>
  <p>Maior altura do grupo: ${maiorAltura.toFixed(2)} metros</p>
  <p>Menor altura do grupo: ${menorAltura.toFixed(2)} metros</p>
  <p>Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)} metros</p>
  <p>Número de mulheres: ${numMulheres}</p>
`;

document.body.appendChild(resultadosDiv);
