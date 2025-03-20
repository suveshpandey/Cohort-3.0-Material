import axios from 'axios'

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

const TodoComponent = ({ todo }: {todo: Todo}) => {
    return (
        <div className="w-[300px] rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg">
            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{todo.title}</h3>
                <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    todo.completed
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
                >
                {todo.completed ? 'Completed' : 'Pending'}
                </span>
            </div>
            
            <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                <span>ID: {todo.id}</span>
            </div>
        </div>
    );
}

const fetchTodos = async () => {
    try{
        const response = await axios.get<Todo[]>(
            "https://jsonplaceholder.typicode.com/todos/"
        );
        return response.data;
    }
    catch(error){
        console.error('Error fetching todos:', error);
    }
}

const page = async () => {
    const todos = await fetchTodos();

    return (
        <div className='bg-slate-200 flex flex-col gap-y-2 items-center justify-center'>
            {
                todos?.map((todo) => (
                    <TodoComponent key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}


export default page
