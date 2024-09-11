const tasks = document.getElementById("tasks");
tasks.style.display = "none";

function addTask(){

    tasks.style.display = "block"
    const value = document.getElementById("input").value;
    
    const task = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const title = document.createElement("input");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");


    title.value = value;
    editBtn.innerHTML = "Edit";
    delBtn.innerHTML = "Delete"

    task.className = "h-auto w-[100%] sm:grid sm:grid-cols-[3%_67%_15%_15%] flex felx-wrap-wrap px-[5px] border-b-[1px] border-[gray]"

    title.readOnly = true;
    title.className = "h-[80%] w-[100%] outline-none flex justify-center pl-[10px] pt-[7px] bg-[#0f172a] "

    editBtn.className= "bg-[orange] h-[80%] my-[3px] py-[5px] px-[20px] mr-[10px] rounded-[5px]  "
    
    delBtn.className= "bg-[red] h-[80%] my-[3px] py-[5px] px-[20px] rounded-[5px]  "
    


    task.appendChild(checkbox);
    task.appendChild(title);
    task.appendChild(editBtn);
    task.appendChild(delBtn);

    document.getElementById("tasks").appendChild(task);

    document.getElementById("input").value = "";


    delBtn.addEventListener('click', ()=>{
    document.getElementById("tasks").removeChild(task);
    })

    editBtn.addEventListener('click', ()=>{
        if(editBtn.innerHTML == "Edit"){
            title.readOnly = false;
            title.focus();
            const newTask = title.value;

            editBtn.innerHTML = "Save";
            editBtn.style.backgroundColor = "green"            
        }
        else{
            title.readOnly = true;
            editBtn.innerHTML = "Edit"
            editBtn.style.backgroundColor = "orange";
        }
    });

    checkbox.addEventListener('change', ()=>{
        if(checkbox.checked){
            title.style.textDecoration = "line-through";
            title.style.color = "#98FB98"
        }
        else{
            title.style.textDecoration = "none";
            title.style.color = "#d2d2d2"
        }
    })

}
