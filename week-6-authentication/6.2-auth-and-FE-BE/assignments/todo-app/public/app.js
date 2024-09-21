async function signup(){
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    try{
        const response = await axios.post("http://localhost:3000/signup", {
            username : username,
            password : password
        });
        if(response.status == 201){
            alert(response.data.msg);

            //hide the signup ans show signin div
            document.querySelector('.signup').style.display = 'none';
            document.querySelector('.signin').style.display = 'flex';
        }
        else alert("Unexpected status code recieved!");
    }
    catch(error){
        alert("An error occured while siging up.")
        console.log(error);
    }
}
async function signin(){
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    try{
        const response = await axios.post("http://localhost:3000/signin", {
            username : username,
            password : password
        });

        if(response.status == 200){
            localStorage.setItem("token", response.data.token);
            alert(response.data.msg);
            myTodos();
        }
        else alert("Unexpected status code recieved!");
    }
    catch(error){
        alert("An error occured while siging in.")
        console.log(error);
    }
}
async function getMyInfo(){
    const response = await axios.get("http://localhost:3000/me",{
        headers:{
            token: localStorage.getItem("token")
        }
    })
    const username = response.data.username;
    const password = response.data.password;
    clearInfo();
    document.getElementById('usernameInfo').innerHTML += username;
    document.getElementById('passInfo').innerHTML += password;
}
function clearInfo(){
    document.getElementById('usernameInfo').innerHTML = "";
    document.getElementById('passInfo').innerHTML = "";
}

async function myTodos() {
    try {
        const response = await axios.get("http://localhost:3000/my-todos");
        
        // Fetch the todos container
        const todosContainer = document.querySelector(".todos");
        
        // Clear the current todos list
        todosContainer.innerHTML = "";
        
        // Get the list of todos from the response
        const todos = response.data.tasks;
        console.log(todos)
        
        // Loop through each todo and create an element for it
        todos.forEach(task => {
            const todoElement = document.createElement("h2");
            todoElement.textContent = task;
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            const updateBtn = document.createElement("button");
            updateBtn.innerHTML = "Update";
            deleteBtn.onclick = () => deleteTask(task);
            updateBtn.onclick = () => updateTask(task);
            todosContainer.appendChild(todoElement);
            todosContainer.appendChild(deleteBtn);
            todosContainer.appendChild(updateBtn);
        });
    } catch (error) {
        console.log("Error fetching todos: ", error);
    }
}
async function addTask(){
    const task = document.getElementById('addTaskInput').value;
    if(!task){
        alert("Please enter a task.");
        return;
    }
    try{
        const response = await axios.post("http://localhost:3000/add-todo", {
            task: task
        });
        if(response.status == 201){
            alert(response.data.msg);
            document.getElementById('addTaskInput').value = "";

            myTodos();
        }
        else{
            alert("Failed to add task.");
        }
    }
    catch(error){
        console.log("Error", error);
    }
}

async function deleteTask(task){
    try{
        const response = await axios.delete("http://localhost:3000/delete-todo", {
            data: {
                task: task
            }
        });
        if(response.status = 200){
            alert(response.data.msg);
            myTodos();
        }
        else{
            alert("Failed to delete the task.");
        }
    }
    catch(error){
        console.log("Error", error);
    }
}

async function updateTask(oldTask){
    const newTask = prompt("Enter new task: ", oldTask);
    
    try{
        const response = await axios.put("http://localhost:3000/update-todo",{
                task: oldTask,
                newTask: newTask
            }
        );
        if(response.status = 200){
            alert(response.data.msg);
            myTodos();
        }
        else{
            alert("Failed to delete the task.");
        }
    }
    catch(error){
        console.log("Error", error);
    }
}