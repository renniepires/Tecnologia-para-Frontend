function calcularSalarioAtual(salarioInicial, anoAtual) {
    let salario = salarioInicial;
    let percentualAumento = 0.015;
  
    for (let ano = 1996; ano <= anoAtual; ano++) {
      salario += salario * percentualAumento;
      percentualAumento *= 2; // Aumento dobrado a cada ano a partir de 1997
    }
  
    return salario;
  }
  
  // Solicita ao usuário que insira o salário inicial do funcionário
  const salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
  
  // Obtém o ano
  const anoAtual = parseInt(prompt("Digite o ano atual:"));
  
  const salarioAtual = calcularSalarioAtual(salarioInicial, anoAtual);
  console.log(`O salário atual do funcionário é: R$ ${salarioAtual.toFixed(2)}`);