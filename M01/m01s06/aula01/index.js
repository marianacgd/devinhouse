// Código sincrono
function f1() {
  console.log('Função 1');
}

function f2() {
  console.log('Função 2');
}

// f1();
// console.log('teste');
// f2();
//Funcao 1 - teste - Funcao 2

//Codigo assincrono
function f3() {
  console.log('Função 3');
}

function f4() {
  console.log('Função 4');
}

console.log('Inicio async');
setTimeout(() => f3(), 1000); //Aguarda 1s para executar
f4();
console.log('Fim async');
//Inicio async - Funcao 4 - Fim async - Funcao 3

// Função simples
function digaOlaPara(nome) {
  console.log(`Olá ${nome}`);
}

digaOlaPara('Maria');
setTimeout(digaOlaPara, 0, 'Ana'); //Aguarda 0ms para executar
digaOlaPara('Pedro');
setTimeout(digaOlaPara, 1, 'João'); //Aguarda 1ms para executar
//Ola Maria - Ola Pedro - Ola Ana - Ola Joao

// SetInterval - Temporizador
const repetir = setInterval(() => console.log('Olá'), 1000); //Repete 'Ola' a cada 1s

setTimeout(() => clearInterval(repetir), 7000); //clearInterval para a repeticao e limpa no 7s

//Promise - Representa uma promessa de um valor futuro desconhecido
//o valor pode ser varias coisas (chamada pra API, objeto de erro,...)
//Promise eh um tipo de objeto
//4 estados da promise: pending(pendente) - fulfilled(realizada) - rejected(rejeitada) - settled(estabelecida)

//then() = metodo de retorno de chamada
//catch() = recebe o erro, manipula erro.
//finally() = nao recebe nenhum argumento. independente do resultado ele executa

// Promise resolvida
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, nome: 'Thais' });
  }, 3000);
}).then((resultado) => {
  console.log(resultado);
});

// Promise rejeitada
new Promise((resolve, reject) => {
  setTimeout(() => reject('Erro'), 4000);
})
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

// Tratar erro no .then
new Promise((resolve, reject) => {
  setTimeout(() => reject('Erro'), 4000);
}).then(
  (res) => {
    console.log('Sucesso!', res);
  },
  (err) => {
    console.log('Erro:', err);
  }
);

new Promise((res, rej) => {
  const num = Math.random(); //gera um numero aleatorio e atribui a const num
  console.log(num);
  if (num > 0.5) {
    setTimeout(() => res('Sucesso!'), 3000);
  } else {
    setTimeout(() => rej('Erro!'), 5000);
  }
})
  .then((resultado) => {
    console.log('.then', resultado);
  })
  .catch((erro) => {
    console.log('.catch', erro);
  })
  .finally(() => console.log('Finalizou'));
