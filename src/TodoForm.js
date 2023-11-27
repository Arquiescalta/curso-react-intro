import React from "react";

function TodoForm({setOpenModal, addTodo}) {

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={(event)=>{event.preventDefault()}}

        style={{
            display : "grid",
            justifyContent : 'center',
            alignContent : "space-around",
            height : '100%',
            width : '100%',
        }}>
            <label>
                Nuevo ToDo
            </label>
            <textarea
             style={{
                display : "grid",
                justifyContent : 'center',
                alignContent : 'center',
                height : '100px',
                width : '100%',
            }}
            placeholder="escribir ToDo"
            value={newTodoValue}
            onChange={onChange}
            >
                
                
            </textarea> 
            <div>   

            <button className="aceptarTodos"

            onClick={() => {
                addTodo(newTodoValue)
                setOpenModal(state => !state)

        }}>Aceptar</button>

            <button className="cancelar"

            onClick={() => {
                setOpenModal(state => !state)

        }}>Cancelar</button>
            </div>
        </form>
    )
}

export {TodoForm}