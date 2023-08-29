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
    //Define a nova lista 
    listItem.innerHTML = `Descrição: ${descricao} - Autor: ${autor} - Departamento: ${departamento} - Importância: ${importancia} - Valor: ${valor} - Duração: ${duracao}`;
    taskList.appendChild(listItem);

    // Adicionando as informações preenchidas no formulário
    document.getElementById("Desc").value = "";
    document.getElementById("author").value = "";
    document.getElementById("depart").value = "";
    document.getElementById("impor").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("duracao").value = "";
}

// Adiciona o evento de clique no botão "Adicionar tarefa"
document.getElementById("btLista").addEventListener("click", adicionarTarefa);

// Função para excluir tarefas concluídas
function excluirTarefasConcluidas() {
    const taskList = document.getElementById("taskList");
    const tarefas = taskList.getElementsByTagName("li");

    for (let i = tarefas.length - 1; i >= 0; i--) {
        const tarefa = tarefas[i];
        if (tarefa.classList.contains("concluida")) {
            taskList.removeChild(tarefa);
        }
    }
}

// Adiciona o evento de clique no botão "Excluir tarefas concluídas"
document.getElementById("btExcluirConcluidas").addEventListener("click", excluirTarefasConcluidas);
