const todoinput =  document.querySelector('.input-todo'); 
const todoButton =  document.querySelector('.todo-button'); 
const todoList =  document.querySelector('.todo-list'); 

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteandcheck);
document.addEventListener("DOMContentLoaded",getLocalItem);

 function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoinput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)
    saveLocalTodo(todoinput.value)
    todoinput.value = "";

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-checked"></i> check';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i> Delete';
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv); 
 }

 function deleteandcheck(e){
    const item = e.target;

    if( item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeItem(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("complete");
         document.querySelectorAll(".trash-btn").disabled = true;
    }
 }

 function saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos") ===  null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
 }

function getLocalItem(){
    let todos;
    if(localStorage.getItem("todos") ===  null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo => {
        
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)
    saveLocalTodo(todoinput.value)

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-checked"></i> check';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i> Delete';
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv); 

    });
}

function removeItem(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem("todos",JSON.stringify(todos))
}
