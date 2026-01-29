const todoInput = document.getElementById("todo-text") as HTMLInputElement;
const todoAdd = document.getElementById("todo-add") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

todoAdd.addEventListener('click', ()=>{
    const todoText = todoInput.value;
    console.log(todoText);
});