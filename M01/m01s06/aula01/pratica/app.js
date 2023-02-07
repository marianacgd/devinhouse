// Deve ser criada uma Promise e os retornos dela serem capturados corretamente;
// A promise só pode ser rejeitada ou resolvida após 2 segundos;
// Independente do tipo do retorno deve ser exibido uma mensagem que o processamento
//foi finalizado.

const num = document.getElementById('numero');
const buttonVerificar = document.getElementById('button-verificar');

function resultado(texto) {
  const span = document.createElement('p');
  span.innerText = texto;
  document.body.appendChild(span);
}

const verificar = (event) => {
  new Promise((resolve, reject) => {
    if (num.value % 2 === 0) {
      setTimeout(() => {
        resolve('Numero Par!');
      }, 1000);
    } else {
      setTimeout(() => {
        reject('Numero Impar!');
      }, 1000);
    }
  })
    .then((res) => {
      resultado(res);
    })
    .catch((res) => {
      resultado(res);
    })
    .finally(() => {
      resultado('Finalizado!');
    });
};

buttonVerificar.addEventListener('click', verificar);
