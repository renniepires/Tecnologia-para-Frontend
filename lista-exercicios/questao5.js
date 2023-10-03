function calcularArea(raio) {
    const pi = Math.PI;
    const area = pi * raio ** 2;
    const perimetro = 2 * pi * raio;
    
    return {
      area: area,
      perimetro: perimetro
    };
  }
  
  const raio = parseFloat(prompt("Digite o raio do círculo:"));
  const resultado = calcularArea(raio);
  
  console.log(`Área do círculo: ${resultado.area.toFixed(2)}`);
  console.log(`Perímetro do círculo: ${resultado.perimetro.toFixed(2)}`);
  