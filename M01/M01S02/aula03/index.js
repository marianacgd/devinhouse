var isAutenticado = true;
if (!isAutenticado) {
  console.log('não está autenticado');
}

var nota1 = 8;
var nota2 = 7;
var nota3 = 6;

var media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
  console.log('Superou a média!');
} else if (media === 7) {
  console.log('Ficou na média!');
} else {
  console.log('Não atingiu a média!');
}

var produto = 'caneta';
switch (produto) {
  case 'copo':
  case 'caneca':
    console.log('5,00');
    break;
  case 'caneta':
    console.log('1,50');
    break;
  default:
    console.log('Produto não encontrado');
}

var teste = null;

if (teste === null) {
  console.log('é nulo');
}
