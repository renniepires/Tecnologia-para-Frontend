let populacao1 = 80000;
let cresc1 = 0.03;

let populacao2 = 200000; // População inicial do país B
let cresc2 = 0.015; // Taxa de crescimento anual do país B

let anos = 0;

// Enquanto a população do país A for menor ou igual à população do país B
while (populacao1 <= populacao2) {
  populacao1 *= (1 + cresc1);
  populacao2 *= (1 + cresc2);
  anos++;
}

console.log(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);