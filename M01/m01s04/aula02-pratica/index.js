const lista = document.getElementById('lista');
const dados = [
  {
    nome: 'Jonathas',
    frase: 'Olá, mundo!',
  },
  {
    nome: 'Willian',
    frase: 'A vingança nunca é plena mata a alma e envenena',
  },
  {
    nome: 'Mariana',
    frase: 'O inteligente aprende com os proprios erros. Um sabio aprende com os erros dos outros.',
  },
];
dados.forEach((element) => {
  const item = document.createElement('li');
  const imagem = document.createElement('img');
  const span = document.createElement('p');
  const frase = document.createElement('p');

  imagem.src =
    'https://img.myloview.com.br/fotomurais/pessoa-icone-vetorial-macho-usuario-perfil-avatar-simbolo-em-circulo-apartamento-cor-glyph-pictograma-ilustracao-700-140985837.jpg';
  imagem.width = 80;
  span.innerText = element.nome;
  frase.innerText = element.frase;
  item.appendChild(imagem);
  item.appendChild(span);
  item.appendChild(frase);
  lista.appendChild(item);
});
