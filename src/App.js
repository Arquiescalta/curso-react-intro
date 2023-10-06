import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreate } from './TodoCreate';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';

const defaultToDos = [
  {text : 'cardio', doit : false},
  {text : 'programacion', doit : false},
  {text : 'piano', doit : false},
]


function App() {
  return (
    <React.Fragment>

<TodoCounter completed={16} total={20}/>
      <TodoSearch/>

      <TodoList>
        {defaultToDos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.doit}/>
        ))}
      </TodoList>

      <TodoCreate/>

    </React.Fragment>   
  );
}

export default App;

/* Una forma de renderizar el componente TodoItem es
insertar este componente dentro del componente App, 
Se hace de la siguiente manera ''<TodoItem />'' */

/* Gracias a que extraimos el componente, para crear
Mas de este en el HTML solo debemos copiar el 
componente y pasara con todo su contenido*/
