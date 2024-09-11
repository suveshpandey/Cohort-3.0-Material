const express = require('express');
const app = express();

app.use(express.json());
let tasksArr = [];


//adding todo
app.post('/', function(req, res){
    let input = req.body.task;
    tasksArr.push(input);
    res.status(201).json({msg: "task added successfully"});
})

//deleting todo
app.delete('/', function(req, res){
    let input = req.body.task;
    if(tasksArr.length == 0){
        res.status(204).json({msg: "no tasks available to delete!"});
    }
    tasksArr = tasksArr.filter(item => item !== input);
    res.status(200).json({msg: "task deleted successfully!"});
});


//updating todo
app.put('/', function(req, res){
    const task = req.body.task;
    const newTask = req.body.newTask;

    let isChanged = false;

    for(let i = 0; i<tasksArr.length; i++){
        if(tasksArr[i] == task){
            tasksArr[i] = newTask;
            isChanged = true;
            break;
        }
    }
    if(isChanged == true) return res.status(200).json({msg :"task updated successfully!"});
    else return res.status(404).json({msg : "task not found"});
})


app.get('/', function(req, res){
    res.status(200).json({tasks: tasksArr});
})

app.listen(3000);
