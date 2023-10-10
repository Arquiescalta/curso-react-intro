import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreate } from './TodoCreate';
import { TodoItem } from './TodoItem';

import React from 'react';

const defaultToDos = [
  {text : 'cardio', doit : true},
  {text : 'programacion', doit : false},
  {text : 'piano', doit : false},
  {text : 'estados derivados', doit : true},
  {text : 'estadssos derivadsos', doit : true},
];

function App() {
  const [toDos, setToDos] = React.useState(
    defaultToDos);

  const [searchValue, setSearchValue] = React.
  useState('');

  const completedToDos = toDos.filter(todo => !!todo.doit).length;
  const totalToDos = toDos.length;

  return (

    <>
<TodoCounter completed={completedToDos} 
  total={totalToDos}/>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      
      <TodoList>


        {defaultToDos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          doit={todo.doit}/>
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


