import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreate } from './TodoCreate';
import { TodoItem } from './TodoItem';

import React from 'react';

// const defaultToDos = [
//   {text : 'cardio', doit : true},
//   {text : 'programacion', doit : false},
//   {text : 'piano', doit : false},
//   {text : 'estados derivados', doit : true},
//   {text : 'Casco moto', doit : true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos))

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

if (!localStorageTodos) {
  localStorage.setItem("TODOS_V1",JSON.stringify([]));
  parsedTodos = [];
}else{
  parsedTodos = JSON.parse(localStorageTodos);
}

  const [toDos, setToDos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.
  useState('');

  const completedToDos = toDos.filter(todo => !!todo.doit).length;
  const totalToDos = toDos.length;

  const searchTodos = toDos.filter(
    (todo) => {    
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })

    const saveTodos = (newTodos) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
      setToDos(newTodos);
    };

    const completeTodo = (text) => {
      const newTodos = [...toDos]
      const index = newTodos.findIndex(
        (todo => todo.text == text)
      )
  
      if (newTodos[index].doit == false) {
        newTodos[index].doit = true
        
      }else {
        newTodos[index].doit = false
        
      }
      saveTodos (newTodos);
    }

    const deleteTodo = (text) => {
      const newTodos = [...toDos]
      const index = newTodos.findIndex(
        (todo => todo.text == text)
      );
      newTodos.splice(index, 1)
      saveTodos (newTodos);
    }

  return (

    <>
<TodoCounter completed={completedToDos} 
  total={totalToDos}/>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          doit={todo.doit}
          onComplete = {()=> {completeTodo(todo.text)}}
          onDelete = {()=> {deleteTodo(todo.text)}}

/>
        ))}
      </TodoList >

      <TodoCreate/>

    </>   
  );
}

export default App;

/* Una forma de renderizar el componente TodoItem es
insertar este componente dentro del componente App, 
Se hace de la siguiente manera ''<TodoItem />'' */

/* Gracias a que extraimos el componente, para crear
Mas de este en el HTML solo debemos copiar el 
componente y pasara con todo su contenido*/

/* <React.Fragment>  </React.Fragment>  
llama a react, por lo tanto, debemos importarlo. 
De otra manera para tener la misma funcionalidad
podemos usar <>  </> para tener separado todo*/


