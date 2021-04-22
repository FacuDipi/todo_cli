import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const todosLocation = path.join(__dirname, 'todos.json');

const saveTodo = (todos) =>
  fs.writeFileSync(todosLocation, JSON.stringify(todos));
  
// const editTodo = ()=> 
// fs.readFileSync(todosLocation, JSON.stringify(todos));
// ;

const getTodos = () => JSON.parse(fs.readFileSync(todosLocation));


// const deleteTodo = ()=> ;

export { saveTodo, getTodos,}; // editTodo, deleteTodo 
