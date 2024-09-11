const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const tasks = document.getElementById("tasks");
const task = document.getElementById("task");

addBtn.addEventListener("click", ()=>{
    let value = inputBox.value;

    const title = document.createElement("h3");
    const delBtn = document.createElement("button");

    title.innerHTML = value;
    delBtn.innerHTML = "Delete";
    

    task.appendChild(title);
    task.appendChild(delBtn);


    inputBox.value = "";

    delBtn.addEventListener("click", ()=>{
        task.removeChild(title);
        task.removeChild(delBtn);
    })
})