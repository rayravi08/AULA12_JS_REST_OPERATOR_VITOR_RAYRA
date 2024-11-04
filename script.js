//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2, aluno3, aluno4) {
//   console.log("Sejam bem vindos todos os alunos!");
//   console.log(aluno1);
//   console.log(aluno2);
//   console.log(aluno3);
//   console.log(aluno4);
// }

//na função não temos como saber de antemão quantos parâmetros serão passado
//ai entra em ação o Rest Operator que irá transformar os parâmetros em um array

//vamos reescrever a função utilizando o Rest Operator
function listaAlunos(...alunos) {
  console.log("Sejam bem vindos todos os alunos!");
  console.log(alunos);
  console.log(alunos[0]);
  console.log(alunos[3]);
}
listaAlunos("Adamastor", "Benevides", "Conegundes", "Demeval", "Emergada");

//outro exemplo: sorteador de números primos menores do que 20

function sorteadorPrimo(...numeros) {
  console.log(numeros);
  //const numeroSorteado = Math.random() * numeros.length;

  const numeroSorteado = Math.floor(Math.random() * numeros.length);
  console.log(`posição ${numeroSorteado}`);
  console.log(`Numero primo: ${numeros[numeroSorteado]}`);
}

sorteadorPrimo(2, 3, 5, 7, 11, 13, 17, 19);

function sorteadorNomes(...nomes) {
  console.log(nomes);
  //const nomeSorteado = Math.random() * nomes.length;

  const nomeSorteado = Math.floor(Math.random() * nomes.length);
  console.log(`posição ${nomeSorteado}`);
  console.log(`Nome pessoa: ${nomes[nomeSorteado]}`);
}

sorteadorNomes(
  "Aline",
  "Ana Clara",
  "Andre",
  "Bernado",
  "Daniel",
  "Deivid",
  "Enrique",
  "Fernanda",
  "Gabriel Rossa",
  "Gabriel Zattera",
  "Heloise",
  "Izadora",
  "Jeft",
  "João Matheus",
  "João Maurício",
  "José Vitor",
  "Julia",
  "Kamila",
  "Karina",
  "Kevin",
  "Leonardo Freitas",
  "Leonardo S",
  "Lorenzo",
  "Lucas",
  "Matheus",
  "Nycolas",
  "Nylocas",
  "Pedro Portela",
  "Rafaela",
  "Raphael",
  "Rayra",
  "Valentina",
  "Vinícius",
  "Vitor garret",
  "Vitor Schuski",
  "Pedro da Silva",
  "Ana luiza"
);
