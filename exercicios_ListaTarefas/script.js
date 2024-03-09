document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('taskInput').focus();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="toggleTask(this)">Concluir</button>
            <button onclick="removeTask(this)">Remover</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }
}

function toggleTask(button) {
    const task = button.parentNode;
    task.classList.toggle('completed');
}

function removeTask(button) {
    const task = button.parentNode;
    task.parentNode.removeChild(task);
}
