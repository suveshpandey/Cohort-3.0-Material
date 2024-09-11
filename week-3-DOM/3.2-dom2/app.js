// const input = document.getElementById("input")
// const tasks = document.getElementById("tasks")

// function addTodo(){
//     let value = input.value;
//     const title = document.createElement("span");
//     const del = document.createElement("button");

//     title.innerHTML = value;
//     del.innerHTML = "delete";

//     //
//     const task = document.createElement("div");
//     task.appendChild(title);
//     task.appendChild(del);
//     //

//     tasks.appendChild(task);



//     del.addEventListener('click', () => {
//         task.removeChild(title);
//         task.removeChild(del);
//     })
// }

let todos = [];
function addTodo(){
    todos.push({
        title: document.getElementById("input").value
    })
    render();
}   
function todoComp(todo, index){
        const div = document.createElement("div");
        const task = document.createElement("h3");
        const del = document.createElement("button");

        task.innerHTML = todo.title;
        del.innerHTML = "delete";
        del.setAttribute("onclick", "deleteTodoAt(" + index + ")");

        div.appendChild(task);
        div.appendChild(del);


        return div;
}

function deleteTodoAt(index){
    todos.splice(index, 1);
    render();
}

function deleteFirstTodo(){
    todos.splice(0,1);
    render();
}
function deleteLastTodo(){
    todos.splice(todos.length-1, 1);
    render();
}

function render(){
    document.getElementById("tasks").innerHTML = "";

    for(let i = 0; i<todos.length; i++){
        const el = todoComp(todos[i], i);
        document.getElementById('tasks').appendChild(el);
    }
}