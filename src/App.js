import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreate } from './TodoCreate';
import { TodoItem } from './TodoItem';
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import React from 'react';

// const defaultToDos = [
//   {text : 'cardio', doit : true},
//   {text : 'programacion', doit : false},
//   {text : 'piano', doit : false},
//   {text : 'estados derivados', doit : true},
//   {text : 'Casco moto', doit : true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos))

function UseLocalStorage(itemName, initialValue ) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  

  React.useEffect(()=>{
    setTimeout(()=>{
      const localStorageItem = localStorage.getItem(itemName);

      let parsedItem;
  
      try {
        if (!localStorageItem) {
          localStorage.setItem(itemName,
          JSON.stringify([initialValue]));
          parsedItem = [];
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }}, 1000);

}, [])

  const saveItem= (newItems) => {
    localStorage.setItem(itemName, 
    JSON.stringify(newItems))
    setItem(newItems);
  };

  return {item, saveItem, loading, error};
}

function App() {

  const {item : toDos,
     saveItem: saveTodos,
      loading,
       error} = UseLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.
  useState('');

  const [openModal, setOpenModal] = React.useState(false);
  const completedToDos = toDos.filter(todo => !!todo.doit).length;
  const totalToDos = toDos.length;

  const searchTodos = toDos.filter(
    (todo) => {    
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })

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

        {loading && <p
        style={{
          fontSize : '12px',
          textAlign : 'center',
          margin : 0,
          padding : '32px',
      }}>Estamos cargando...</p>}
        {error && <p>Desesperate, error</p>}
        {((!loading && totalToDos == 0)) && <p
        style={{
          fontSize : '24px',
          textAlign : 'center',
          margin : 0,
          padding : '32px',
      }}
      >Crea tu primer Todo</p>}
        {((!loading && searchTodos == 0 && totalToDos > 0)) && <p
        style={{
          fontSize : '24px',
          textAlign : 'center',
          margin : 0,
          padding : '32px',
      }}>No hay coincidencias</p>}
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
      <TodoCreate
      setOpenModal={setOpenModal}/>

      {openModal && ( 
      <Modal>
        <TodoForm/>
      </Modal>)}


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


