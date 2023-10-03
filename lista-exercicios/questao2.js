let numPar = 0;
let numImpar = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt(`Digite o ${i}º número:`));
  
  if (num % 2 === 0) {
    numPar++;
  } else {
    numImpar++;
  }
}

console.log(`Quantidade de números pares: ${numPar}`);
console.log(`Quantidade de números ímpares: ${numImpar}`);