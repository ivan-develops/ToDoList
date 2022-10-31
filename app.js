//* Selectors ---------------------------------------
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//* Event listeners ---------------------------------
todoButton.addEventListener("click" , addingTodo);
todoList.addEventListener("click" , deletingTodo);

//* Functions ---------------------------------------
/*function conditions (event) {
    event.preventDefault();
    if (todoInput.value == "hi") {

        const callBackFail = document.createElement('div');
        callBackFail.classList.add('callBackFail');
        callBackFail.innerText = "Try again";
        
    
    }
    else {
        addingTodo();
    }
}
*/
function addingTodo (event){
    // prevent submiting form
    event.preventDefault();

    
    // Create DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    // Insert todoDIV inside newTodo
    todoDiv.appendChild(newTodo); 

    // Create mark COMPLETED BUTTON
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeButton);

    // Create mark TRASH BUTTON 
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST UL
    todoList.appendChild(todoDiv);

    // cleaning INPUT
    todoInput.value = "";
}

function deletingTodo (event) {
    // .TARGET above all todo (look what element is selected)
    console.log(event.target);
    const item = event.target;

    if(item.classList[0] === "trash-btn"){
        // earesing element's parent
        const todo = item.parentElement;
        // animation and remove
        todo.classList.add('fall');
        todo.addEventListener("transitionend" , function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("mark-completed")
    }

}
