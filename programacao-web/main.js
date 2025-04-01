function addNewTask() {
    var list = document.getElementById('list');
    var text = document.getElementById('task_name').value;

    if (text.length === 0) {
        alert('Digite um texto para adicionar a tarefa!');
        return;
    }

    var listItem = document.createElement('li');
    listItem.className = 'list-item';

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}

function removeTask() {
    var list = document.getElementById('list');
    var lastItem = list.lastChild;

    if (lastItem) {
        list.removeChild(lastItem);
    } else {
        alert('Não há mais tarefas para remover!');
    }
}