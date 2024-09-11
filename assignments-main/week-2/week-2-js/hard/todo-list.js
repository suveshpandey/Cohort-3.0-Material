/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

let todos = [];

class Todo {
    constructor(todo) {
        this.todo = todo;
        this.completed = false;
    }

    addTodo() {
        todos.push(this);
    }

    removeTodo() {
        const index = todos.indexOf(this);
        if (index > -1) {
            todos.splice(index, 1);
        }
    }

    updateTodo(newTodo) {
        const index = todos.indexOf(this);
        if (index > -1) {
            todos[index].todo = newTodo;
        }
    }
}

const todo1 = new Todo("Buy milk");
todo1.addTodo();
const todo2 = new Todo("Buy samosa");
todo2.addTodo();

// Update todo1
todo1.updateTodo("Buy fruits");
console.log(todos); // Output: [Todo { todo: 'Buy fruits', completed: false }, Todo { todo: 'Buy samosa', completed: false }]

// function clear(){
//     todos.length = 0;
// }
// // clear();
function getTodo(idx){
    return todos[idx];
}
console.log(getTodo(1));


module.exports = Todo;
