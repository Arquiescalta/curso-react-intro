import React from "react";

function TodoForm({setOpenModal}) {

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
            }}>
                Escribe tu nuevo ToDo
            </textarea>
            <div>

            <button className="aceptarTodos"
            onClick={(state) => {
                setOpenModal(state => !state)
        }}>Aceptar</button>

            <button className="cancelar"
            onClick={(state) => {
                setOpenModal(state => !state)
        }}>Cancelar</button>
            </div>
        </form>
    )
}

export {TodoForm}