let tarefas = [];

const formCadastro = document.getElementById('form-cadastro');
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  const tarefa = {
    id: new Date().getTime(),
    titulo: event.target.titulo.value,
    prioridade: event.target.prioridade.value,
    descricao: event.target.descricao.value,
    concluida: false,
  };
  tarefas.push(tarefa);
  listaTarefas();
});

//Formatar prioridade de acordo com valor selecionado
const obterPrioridade = (idPrioridade) => {
  if (idPrioridade === '0') {
    return {
      nome: 'Alta',
      classe: 'color-red',
    };
  } else if (idPrioridade === '1') {
    return {
      nome: 'Media',
      classe: 'color-yellow',
    };
  } else {
    return {
      nome: 'Baixa',
      classe: 'color-green',
    };
  }
};

//Cria os elementos no html, recebe uma lista de tarefas, ou usa o valor default
const listaTarefas = (listaTarefas = tarefas) => {
  const lista = document.getElementById('lista'); //Obtem elemento 'lista' (ul) do html
  lista.innerHTML = '';

  tarefas.forEach((tarefa) => {
    const listItem = document.createElement('li'); // Cria elemento 'li'
    listItem.classList.add('list-item'); //Add a classe

    const titulo = document.createElement('h3'); // Cria elemento 'h3'
    listItem.classList.add('subtitle', 'text=center'); //Add a classe
    titulo.innerText = tarefa.titulo;
    listItem.appendChild(titulo); //Add 'h3' em 'li'

    const prioridadeFormatada = obterPrioridade(tarefa.prioridade); //Obtem prioridade formatada

    const prioridade = document.createElement('p'); //Cria elemento p 'prioridade'
    prioridade.classList.add('text-center', 'priority', prioridadeFormatada.classe); //Add classe
    prioridade.innerText = prioridadeFormatada.nome;
    listItem.appendChild(prioridade); //Add 'p' em 'li'

    const descricao = document.createElement('p'); //Cria elemento p 'descricao'
    descricao.classList.add('description'); //Add a classe
    descricao.innerText = tarefa.descricao;
    listItem.appendChild(descricao); //Add 'p' em 'li'

    const div = document.createElement('div'); //Cria div para posicionar checkbox
    div.classList.add('list-item-footer');

    const checkbox = document.createElement('input'); //Cria checkbox
    checkbox.type = 'checkbox';
    checkbox.id = 'concluida';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', (event) => {
      const tarefasAtualizadas = tarefas.map((t) => (t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t));
      tarefas = tarefasAtualizadas;
      console.log(tarefas);
    });
    div.appendChild(checkbox); //Add checkbox na div

    listItem.appendChild(div); //Add a 'div' em 'li'

    lista.appendChild(listItem); //Add 'li' em 'ul'
  });
};

//Cria Busca
const botaoBusca = document.getElementById('button-search'); //Obtem o botao
botaoBusca.addEventListener('click', () => {
  const valorBusca = document.getElementById('input-busca').value; //Obtem o valor digitado no input

  const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.titulo.includes(valorBusca)); //Aplica o filtro

  listaTarefas(tarefasFiltradas); //Cria os elementos filtrados no html
});
