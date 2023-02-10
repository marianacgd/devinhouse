// Promise All - Executa varias promises de uma vez e gerencia em formato de pilha
// retorna uma unica promise quando tds forem resolvidas.
// caso uma promise seja rejeitada ele rejeita com o motivo da primeira rejeitada.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise1'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ nome: 'promise2' }), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject({ nome: 'promise3' }), 500);
});

// Promise resolvida
Promise.all([promise1, promise2])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

// // Promise rejeitada
Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

//  Promise Race - retorna uma promise q resolve ou rejeita assim q uma delas resolver ou rejeitar.
// tempo de execucao eh oq importa!
// Promise resolvida
Promise.race([promise1, promise2])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

// // Promise rejeitada
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('Sucesso:', result);
  })
  .catch((err) => {
    console.log('Erro:', err);
  });

// Promise AllSettled - Retorna uma promise q eh resolvida apos todas as promises dadas serem resolvidas,
// com um array de objetos q descrevem o resultado de cada promise.
Promise.allSettled([promise1, promise2, promise3]).then((result) => {
  console.log(result);
});
