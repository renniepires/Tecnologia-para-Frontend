function calcularMont(capInicial, taxaJuros, tempoMeses) {
    const taxaJurosDecimal = taxaJuros / 100; // Convertendo a taxa de juros para decimal
    const montante = capInicial * Math.pow(1 + taxaJurosDecimal, tempoMeses);
    return montante;
  }
  

  const capInicial = parseFloat(prompt("Digite o capital inicial investido:"));
  const taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
  const tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));
  

  const montante = calcularMont(capInicial, taxaJuros, tempoMeses);
  console.log(`O montante do investimento é: R$ ${montante.toFixed(2)}`);