//cria funcao cliqueBotao para trocar cor do titulo ao clicar no botao
function cliqueBotao() {
  const titulo = document.getElementById('titulo'); //Obtem 'titulo'
  titulo.style.color = 'red'; //altera cor do titulo
  //console.log('chamou');//console para teste
}

const botao = document.createElement('button'); //cria o elemento button
botao.innerText = 'Botao 2';
botao.onclick = cliqueBotao; //evento externo 'onclick' adicionado no js
document.body.appendChild(botao); //Add elemento criado 'botao' no DOM

//Criacao de Funcao(Arrow function) para simular a busca de um cep
const buscaCep = (event) => {
  //Recebe parametro 'event'
  console.log(event.target.value); //.target.value mostra o valor obtido no campo no console
};

//Input para evento de onblur
const inputCep = document.createElement('input'); //cria o elemento input
inputCep.onblur = buscaCep; //evento onbluer passa o parametro event para funcao buscaCep
inputCep.placeholder = 'Digite o CEP'; //placeholder indica ao usuario oq deve fazer
document.body.appendChild(inputCep); //Add elemento criado 'input' no DOM

const link = document.createElement('a'); //cria o elemento a
link.href = 'https://www.google.com.br/'; //refencia para o link
link.innerText = 'link';
document.body.appendChild(link); //Add elemento criado 'link' no DOM

const cadastrar = (event) => {
  console.log(event);
};
const cadastros = [];
const formCadastro = document.getElementById('cadastro');
formCadastro.onsubmit = (event) => {
  event.preventDefault();
  //console.log(event);
  //Obtem os valores digitados nos inputs
  const nome = event.target.nome.value;
  const idade = event.target.idade.value;

  // cadastros.push({
  //   nome,
  //   idade,
  // });
  //Cria um list item para adicionar na lista
  const item = document.createElement('li');
  item.innerText = `${nome} - ${idade}`;

  // item.onclick = function () {
  //   if(.classList.contains('listItem')){
  //   this.classList.remove('listItem');
  //   } else {
  //     this.classList.add('listItem');
  //   }
  // };

  //Adicionar o list item criado na lista do DOM
  const lista = document.getElementById('lista');
  lista.appendChild(item);

  console.log(nome, idade);
};
//Criar um h1 na tela
const criaH1 = () => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Testo teste';
  document.body.appendChild(h1);
};

//Adiciona event listener
const buttonAddListener = document.createElement('button');
buttonAddListener.innerText = 'Add Listener';
buttonAddListener.addEventListener('click', criaH1);
document.body.appendChild(buttonAddListener);

//Remove  event listener
const buttonRemoveListener = document.createElement('button');
buttonRemoveListener.innerText = 'Remove Listener';
buttonRemoveListener.addEventListener('click', () => {
  buttonAddListener.removeEventListener('click', criaH1);
});
document.body.appendChild(buttonRemoveListener);
