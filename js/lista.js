// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    const descricao = document.getElementById("Desc").value;
    const autor = document.getElementById("author").value;
    const departamento = document.getElementById("depart").value;
    const importancia = document.getElementById("impor").value;
    const valor = document.getElementById("valor").value;
    const duracao = document.getElementById("duracao").value;

    const tarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        valor,
        duracao,
    };

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = `Descrição: ${descricao} - Autor: ${autor} - Departamento: ${departamento} - Importância: ${importancia} - Valor: ${valor} - Duração: ${duracao}`;
    taskList.appendChild(listItem);

    // Limpar campos do formulário
    document.getElementById("taskForm").reset();
}

// Adiciona o evento de clique no botão "Adicionar tarefa"
document.getElementById("btLista").addEventListener("click", adicionarTarefa);

// ... (seu código JavaScript existente) ...

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    const descricao = document.getElementById("Desc").value;
    const autor = document.getElementById("author").value;
    const departamento = document.getElementById("depart").value;
    const importancia = document.getElementById("impor").value;
    const valorCheckbox = document.getElementById("chkValor");
    const duracaoCheckbox = document.getElementById("chkDuracao");

    let valor = "";
    let duracao = "";

    if (valorCheckbox.checked) {
        valor = document.getElementById("valor").value;
    }

    if (duracaoCheckbox.checked) {
        duracao = document.getElementById("duracao").value;
    }

    const tarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        valor,
        duracao,
    };

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = `Descrição: ${descricao} - Autor: ${autor} - Departamento: ${departamento} - Importância: ${importancia} - Valor: ${valor} - Duração: ${duracao}`;
    taskList.appendChild(listItem);

    // Limpar campos do formulário
    document.getElementById("taskForm").reset();
}

// Adiciona o evento de clique no botão "Adicionar tarefa"
document.getElementById("btLista").addEventListener("click", adicionarTarefa);

// ... (seu código JavaScript existente) ...

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    const descricao = document.getElementById("Desc").value;
    const autor = document.getElementById("author").value;
    const departamento = document.getElementById("depart").value;
    const importancia = document.getElementById("impor").value;
    const valorCheckbox = document.getElementById("chkValor");
    const duracaoCheckbox = document.getElementById("chkDuracao");

    let valor = "";
    let duracao = "";

    if (valorCheckbox.checked) {
        valor = prompt("Informe o valor da tarefa:");
    }

    if (duracaoCheckbox.checked) {
        duracao = prompt("Informe a duração da tarefa:");
    }

    const tarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        valor,
        duracao,
    };

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = `Descrição: ${descricao} - Autor: ${autor} - Departamento: ${departamento} - Importância: ${importancia} - Valor: ${valor} - Duração: ${duracao}`;
    taskList.appendChild(listItem);

    // Limpar campos do formulário
    document.getElementById("taskForm").reset();
}

// Adiciona o evento de clique no botão "Adicionar tarefa"
document.getElementById("btLista").addEventListener("click", adicionarTarefa);

// Função para excluir tarefas 
function excluirTarefasConcluidas() {
    const taskList = document.getElementById("taskList");
    const tarefas = taskList.getElementsByTagName("li");

    for (let i = tarefas.length - 1; i >= 0; i--) {
        const tarefa = tarefas[i];
        const descricao = tarefa.innerText.split(" - ")[0]; // Obtém a descrição da tarefa
        //Remove a tarefa
        taskList.removeChild(tarefa); 

    }
}

// Adiciona o evento de clique no botão "Excluir tarefas concluídas"
document.getElementById("btExcluirConcluidas").addEventListener("click", excluirTarefasConcluidas);

