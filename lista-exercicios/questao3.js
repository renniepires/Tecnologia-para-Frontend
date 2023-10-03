function calcular(num) {
    if (num.length === 0) {
      return null;
    }
  
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let somaValores = 0;
  
    for (let i = 0; i < num.length; i++) {
      const numero = num[i];
      somaValores += numero;
  
      if (numero < menorValor) {
        menorValor = numero;
      }
  
      if (numero > maiorValor) {
        maiorValor = numero;
      }
    }
  
    return {
      menorValor,
      maiorValor,
      somaValores
    };
  }
  
  // Aplicação
  const numeros = [18, 5, 25, 10, 2];
  const resultados = calcular(numeros);
  
  if (resultados) {
    console.log(`Menor valor: ${resultados.menorValor}`);
    console.log(`Maior valor: ${resultados.maiorValor}`);
    console.log(`Soma dos valores: ${resultados.somaValores}`);
  } else {
    console.log('Nenhum número foi fornecido.');
  }