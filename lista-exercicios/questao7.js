function exibirAprovados(alunos) {
    for (const aluno of alunos) {
      const nome = aluno.nome;
      const notas = aluno.notas;
      const media = calcularMedia(notas);
  
      if (media >= 7) {
        console.log(`Nome: ${nome}, Média Geral: ${media.toFixed(2)}, Curso: ${aluno.curso}`);
      }
    }
  }
  
  function calcularMedia(notas) {
    const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
    return somaNotas / notas.length;
  }
  
  const alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
  ];
  
  exibirAprovados(alunos);