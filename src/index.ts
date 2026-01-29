import './style.css';

const todoInput = document.getElementById("todo-text") as HTMLInputElement;
const todoAdd = document.getElementById("todo-add") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

todoAdd.addEventListener('click', ()=>{
    const todoText = todoInput.value;
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    checkbox.type = "checkbox";
    span.innerText = todoText;
    li.appendChild(checkbox);
    li.appendChild(span);
    todoList.appendChild(li);
});