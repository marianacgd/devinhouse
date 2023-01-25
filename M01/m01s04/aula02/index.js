console.log('Funcionou!');

//GetByTag
const titulo = document.getElementsByTagName('h1');
//Altera cor titulo[0].style.color = 'blue';
titulo[0].innerText = 'Texto alterado'; //Altera conteudo

//Get ById
const titulo1 = document.getElementById('titulo1');
titulo1.style.color = 'red';

//GetByName
const tituloName = document.getElementsByName('titulo');
tituloName[1].style.color = 'blue';

//GetByClass
const titulosErros = document.getElementsByClassName('erro');
for (let index = 0; index < titulosErros.length; index++) {
  titulosErros[index].style.fontSize = '12px';
}

//Array.from(titulosErros).forEach((element) => {
//  element.style.fontSize = '12px';
//});

//QuerySelector
const tituloSelector = document.querySelector('h1#titulo1');
tituloSelector.style.fontSize = '24px';

//QuerySelectorAll
const titulosSelector = document.querySelectorAll('.erro');
titulosSelector.forEach((element) => {
  element.style.fontSize = '36px';
  element.innerText = `${element.innerText} + texto novo`;
});

//Criar elemento html
const paragrafo = document.createElement('p');
paragrafo.innerText = 'Meu primeiro paragrafo';
paragrafo.style.color = 'green';

const paragrafo2 = document.createElement('p');
paragrafo2.innerText = 'Meu segundo paragrafo';
paragrafo2.style.color = 'purple';

//Adicionar elemento criado no html
//document.body.appendChild(paragrafo);
const container = document.getElementById('conteudo');
container.appendChild(paragrafo);

document.body.insertBefore(paragrafo2, container);

//Some elemento'anonimo'
//const elementRemover = document.getElementById('titulo1');
//elementRemover.style.display = 'none';

//Remover elemento no html
const elementRemover = document.getElementById('titulo1');
elementRemover.remove();

//Remover elemento filho no html
container.removeChild(paragrafo);

//Adicionar elemento dentro de outro criado no js
const teste = document.getElementById('teste');

const div2 = document.createElement('div');
//const span = document.createElement('span');
//span.innerText = 'Ola';

const span = document.createElement('img');
span.src = 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png';
span.setAttribute('width', 100);

div2.appendChild(span);
teste.appendChild(div2);
