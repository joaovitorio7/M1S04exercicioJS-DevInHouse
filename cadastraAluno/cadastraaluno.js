var aluno = {
  nome: "",
  idade: 0
};

aluno.nome = prompt("Digite o nome do aluno:");
aluno.idade = parseInt(prompt("Digite a idade do aluno:"), 10);

console.log("Nome do aluno:", aluno.nome);
console.log("Idade do aluno:", aluno.idade);
