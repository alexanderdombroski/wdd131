// events.js
let tasks = [];
let number = 0;

const todoList = document.getElementById("todoList");

function renderTasks() {
  number += 1;
  todoList.innerHTML += 
    `<li taskNumber="${number}">
      <p>${tasks[tasks.length - 1]}</p>
      <div>
        <span data-function="delete" onclick="removeTask(${number})">❎</span>
        <span data-function="complete" onclick="completeTask(${number})">✅</span>
      </div>
    </li>`;
}

function newTask() {
  tasks.push(document.getElementById("todo").value)
}

function removeTask(number) {
  todoList.querySelector(`[taskNumber="${number}"]`).remove();
}

function completeTask(number) {
    todoList.querySelector(`[taskNumber="${number}"] > p`).classList.toggle("strike");
}

// Add your event listeners here
document.getElementById("submitTask").addEventListener('click', () => {
    newTask();
    renderTasks();
});