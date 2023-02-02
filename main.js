const todos =[];



window.onload = () => {
   const form = document.getElementById('todo-form');
   form.onsubmit = (e) => {
    e.preventDefault(); 
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value = '';
    todos.push (todoText);
    const tododList = document.getElementById('todo-list');
    tododList.innerHTML = '';
    for(let i = 0; i < todos.length; i++) {
        tododList.innerHTML += '<li>' + todos[i] + '</li>';
    }
   }
}
