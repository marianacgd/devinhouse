//Semana 04 - Aula 01

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 44, 56];

//Obter o tamanho do array
console.log('Tamanho do array', numeros.length); //Tamanho do array 12

//Adicionar elementos ao final do array
const novoTamanho = numeros.push(45);
console.log('Array com push', novoTamanho); //Array com push 13

//Remover ultimo  elemento do array
const elementoRemovido = numeros.pop();
console.log('Array pop', elementoRemovido); //Array pop 45

//Remove primeiro elemento do array
const elementoRemovidoShift = numeros.shift();
console.log('Array shift', elementoRemovidoShift); //Array shift 1
console.table(numeros); //[2, 3, 4, 5, 6, 7, 8, 9, 3, 44, 56]

//Adicionar elemento no inicio do array
const novoTamanhoUnShift = numeros.unshift(80);
console.log('Array com unshift', novoTamanhoUnShift); //Array com unshift 12

//Obter parte de um array
const pedaco = numeros.slice(1, 3);
console.log('numeros: ', numeros); //numeros: [80, 2, 3, 4, 5, 6, 7, 8, 9, 3, 44, 56]
console.log('Array com slice:', pedaco); //Array com slice: [ 2, 3 ]

//Deletar parte de um array
const deletado = numeros.splice(1, 2);
console.log('numeros: ', numeros); //numeros: [ 80, 4, 5, 6, 7, 8, 9, 3, 44, 56]
console.log('Array com splice: ', deletado); //Array com splice: [ 2, 3 ]

//Adicionar item em indice especifico
const teste = numeros.splice(1, 0, 300); //1 indice, 0 elementos a remover, 300 valor a adicionar
console.log('Array com splice + adicao', numeros); //Array com splice + adicao [ 80, 300, 4, 5, 6, 7, 8, 9, 3, 44, 56]
console.log('teste', teste); //Retorna array vazio

//Transforma array em string sem separador
const numerosSemSep = numeros.join();
console.log('Array com Join sem separador', numerosSemSep); //Array com join sem separador 80,300,4,5,6,7,8,9,3,44,56

//Transforma array em string com separador
const numerosComSep = numeros.join(', ');
console.log('Array com Join com separador', numerosComSep); //Array com join com separador 80, 300, 4, 5, 6, 7, 8, 9, 3, 44, 56

//Percorre array
const numerosDobrados = [];
numeros.forEach((elemento, indice) => {
  //COM Arrow function + Comum
  numerosDobrados.push(elemento * 2);
});

//numeros.forEach(function(elemento, indice){ //COM function simples
//  numerosDobrados.push(elemento * 2);
//});

//function duplicar(elemento){
//  numerosDobrados.push(elemento * 2);
//}
//numeros.forEach(duplicar);

console.log('Numeros:', numeros); //Numeros: [80, 300, 4, 5, 6, 7, 8, 9, 3, 44, 56]
console.log('Numeros dobrados', numerosDobrados); //Numeros dobrados [160, 600, 8, 10, 12, 14, 16, 18, 6, 88, 112]

//Percorrer um array, retornando um novo array modificado
const numerosTriplicado = numeros.map((elemento) => elemento * 3);
//const numerosTriplicado = numeros.map(function (elemento) {
//  return elemento * 3;
//});
console.log('Numeros triplicados com map', numerosTriplicado); //Numeros triplicados com map [240, 900, 12, 15, 18, 21, 24, 27, 9, 132, 168]

//Encontrar o primeiro elemento que corresponda ao filtro
const numeroEncontrado = numeros.find((elemento) => elemento % 2 !== 0);
console.log('Numero encontrado com Find', numeroEncontrado); //Numero encontrado com Find 5

//Encontrar elementos que correspondem ao filtro
const numerosEncontrados = numeros.filter((elemento) => elemento % 2 !== 0);
console.log('Numeros encontrados com filter', numerosEncontrados); //Numero encontrado com filter [ 5, 7, 9, 3 ]

//Verificar se ao menos um item corresponde ao filtro
const correspondeSome = numeros.some((elemento) => elemento % 2 !== 0);
console.log('Corresponde com some', correspondeSome); //Corresponde com some true

//Verificar se ao menos um item corresponde ao filtro
const correspondeEvery = numeros.every((elemento) => elemento % 2 !== 0);
console.log('Corresponde com every', correspondeEvery); //Corresponde com every false

//Retorna um unico valor
const soma = numeros.reduce((acc, elemento) => (acc += elemento));

/* 
const soma = numeros.reduce((acc, elemento) => {
  if (elemento % 2 !== 0){
    return (acc = acc + elemento);
  }
  return acc;
},0); */
console.log('Soma com reduce', soma); //Soma com reduce 522

//Objeto

const aluno = {
  id: 1,
  nome: 'Thais',
  turmas: [
    {
      id: 1,
      nome: 'Audaces',
    },
    {
      id: 2,
      nome: 'DevInHouse',
    },
  ],
  teste: 'teste',
};
//Deletar propriedade objeto
delete aluno.teste;

console.log('Objeto com prop deletada', aluno); //Objeto com prop deletada { id: 1, nome: 'Thais', turmas: [{id: 1, nome: 'Audaces'}, {id: 2, nome: 'DevInHouse'}]}

//Adicionar metodo
aluno.imprimeTurma = function () {
  console.log(this.turmas.map((turma) => turma.nome).join()); //this tras informacao q contem //Audaces,DevInHouse
};

aluno.imprimeTurma();

//Obter nomes das chaves de um objeto
const chaves = Object.keys(aluno);
console.log('Object.keys', chaves); //Object.keys [ 'id', 'nome', 'turmas', 'imprimeturma' ]

chaves.forEach((chave) => {
  console.log(chave, aluno[chave]);
});

//Obter chave e valor objeto
const chaveValor = Object.entries(aluno);
console.log('Object.entries', chaveValor[2][1][0]);
