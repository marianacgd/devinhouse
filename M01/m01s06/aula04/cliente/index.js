//API
const BASE_URL = 'http://localhost:3000/tarefas';

const cadastrarTarefa = async (tarefa) => {
  try {
    //Faz a requisicao para a api
    const response = await fetch(BASE_URL, {
      //Definido o metodo para criar itens
      method: 'POST',
      //Convertido objeto JS para JSON e envia no corpo da requisicao
      body: JSON.stringify(tarefa),
      //Cria headers para enviar na requisicao, definindo o tipo de dado trafegado
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    //Converte o retorno da api para um objeto/array
    const data = await response.json();
    console.log('Sucesso!', data);
  } catch (error) {
    console.log('Erro:', error);
  }
};

const obterTarefas = async (filtro = '') => {
  try {
    //Faz a requisicao para a api
    const response = await fetch(`${BASE_URL}${filtro}`);

    //Converte o retorno da api para um objeto/array
    const data = await response.json();

    //Executa funcao para renderizar as tarefas no html
    listaTarefas(data);
  } catch (error) {
    console.log('Erro:', error);
  }
};

const atualizarStatusTarefa = async (id, status) => {
  try {
    //Faz a requisicao para a api
    const response = await fetch(`${BASE_URL}/${id}`, {
      //Definido o metodo para criar itens
      method: 'PATCH',
      //Cria headers para enviar na requisicao, definindo o tipo de dado trafegado
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      //Convertido objeto JS para JSON
      body: JSON.stringify({
        concluida: status,
      }),
    });
    //Converte o retorno da api para um objeto/array
    const data = await response.json();
    console.log('Sucesso:', data);
  } catch (error) {
    console.log('Erro:', error);
  }
};

const obterTarefa = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch {
    console.error(error);
  }
};

const atualizarTarefa = async (tarefa) => {
  try {
    // Faz a requisição para a api
    const response = await fetch(`${BASE_URL}/${tarefa.id}`, {
      // Definido o metodo para criar itens
      method: 'PUT',
      // Convertido objeto JS para JSON e envia no corpo da requisição
      body: JSON.stringify(tarefa),
      // Cria headers para enviar na requisição, definindo o tipo de dado trafegado
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    // Converte o retorno da api para um objeto/array
    const data = await response.json();
    console.log('Sucesso!', data);
  } catch (error) {
    console.error('Erro:', error);
  }
};

//Aplicacao

const formCadastro = document.getElementById('form-cadastro');
formCadastro.addEventListener('submit', async (event) => {
  event.preventDefault();

  const id = event.target.id.value;
  const concluida = event.target.concluido.value;

  const tarefa = {
    // id: new Date().getTime(), //API vai gerar
    titulo: event.target.titulo.value,
    prioridade: event.target.prioridade.value,
    descricao: event.target.descricao.value,
    concluida: false,
  };

  if (id) {
    //Edicao
    const tarefaEditada = {
      ...tarefa,
      id,
      concluida: concluida === 'true' ? true : false,
    };
    //Chamar a funcao para atualizar no servidor
    await atualizarTarefa(tarefaEditada);
  } else {
    //Novo cadastro
    await cadastrarTarefa(tarefa); //Chama funcao cadastrarTarefa
  }

  formCadastro.reset();
  document.getElementById('id').value = null;
  document.getElementById('concluido').value = null;

  await obterTarefas();
});

// Formatar prioridade de acordo com valor selecionado
const obterPrioridade = (idPrioridade) => {
  if (idPrioridade === '0') {
    return {
      nome: 'Alta',
      classe: 'color-red',
    };
  } else if (idPrioridade === '1') {
    return {
      nome: 'Média',
      classe: 'color-yellow',
    };
  } else {
    return {
      nome: 'Baixa',
      classe: 'color-green',
    };
  }
};

//Funcao para popular o formulario
const popularForm = (tarefa) => {
  const id = document.getElementById('id');
  id.value = tarefa.id;

  const concluido = document.getElementById('concluido');
  concluido.value = tarefa.concluida;

  const titulo = document.getElementById('titulo');
  id.value = tarefa.titulo;

  const prioridade = document.getElementById('prioridade');
  id.value = tarefa.prioridade;

  const descricao = document.getElementById('descricao');
  id.value = tarefa.descricao;
};

// Criar os elementos no html, recebe uma lista de tarefas, ou usa o valor default
const listaTarefas = (listaTarefas) => {
  // Obtem a lista (ul) do html
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  listaTarefas.forEach((tarefa) => {
    // Criando li e add classe
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    // Cria titulo, add classe, adiciona o elemento criado no li
    const titulo = document.createElement('h3');
    titulo.classList.add('subtitle', 'text-center');
    titulo.innerText = tarefa.titulo;
    listItem.appendChild(titulo);

    // Obter prioridade formatada
    const prioridadeFormatada = obterPrioridade(tarefa.prioridade);

    // Cria prioridade, add classe, adiciona o elemento criado no li
    const prioridade = document.createElement('p');
    prioridade.classList.add('text-center', 'priority', prioridadeFormatada.classe);
    prioridade.innerText = prioridadeFormatada.nome;
    listItem.appendChild(prioridade);

    // Cria descricao, add classe, adiciona o elemento criado no li
    const descricao = document.createElement('p');
    descricao.classList.add('description');
    descricao.innerText = tarefa.descricao;
    listItem.appendChild(descricao);

    // Cria div para posicionar o checkbox
    const div = document.createElement('div');
    div.classList.add('list-item-footer');

    // Cria o checkbox e adiciona ele na div
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'concluida';
    checkbox.classList.add('checkbox');
    checkbox.checked = tarefa.concluida;
    checkbox.addEventListener('change', async (event) => {
      // Atualizar apenas o status da tarefa clicada
      const status = event.target.checked;
      console.log('status', status);

      //Chama metodo para atualizar o status na api
      await atualizarStatusTarefa(tarefa.id, status);
    });
    div.appendChild(checkbox);

    //Criar botao de editar tarefa
    const button = document.createElement('button');
    button.innerText = 'Editar';
    button.classList.add('button-primary');
    button.addEventListener('click', async () => {
      const data = await obterTarefa(tarefa.id);
      popularForm(data);
      console.log(data);
    });
    div.appendChild(button);

    // Adiciona a div no li
    listItem.appendChild(div);

    // Adiciono o li na ul
    lista.appendChild(listItem);
  });
};

// Criar busca
//Obter o botão
const butaoBusca = document.getElementById('button-search');
butaoBusca.addEventListener('click', () => {
  // Obtem o valor digitado no input
  const valorBusca = document.getElementById('input-busca').value;

  //Montando o filtro
  const filtro = valorBusca ? `?titulo_like=${valorBusca}` : '';

  //Buscar tarefas filtradas
  obterTarefas(filtro);

  // Aplica o filtro
  // const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.titulo.includes(valorBusca));

  // // Cria os elementos filtrados no html
  // listaTarefas(tarefasFiltradas);
});

//Carregar lista de tarefas ao carregar a pagina
window.addEventListener('load', async () => {
  await obterTarefas();
});
