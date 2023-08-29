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



