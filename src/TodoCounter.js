
function TodoCounter({total, completed,}) {
    return (
        total == 0 ? 
        <h2
        style={{
            fontSize : '24px',
            textAlign : 'center',
            margin : 0,
            padding : '32px',
        }}
        
        >Esperando ToDos</h2>:

        total==completed && total !== 0 ? 
        
        <h2 style={{
            fontSize : '24px',
            textAlign : 'center',
            margin : 0,
            padding : '32px',
        }}
>
            Has completado todas tus tareas Felicitaciones!
        </h2>
        :
        <h2 style={{
            fontSize : '24px',
            textAlign : 'center',
            margin : 0,
            padding : '32px',
        }}
>
            You have completed {completed} of {total} ToDo's
        </h2>

        

    );
  }
  
  export {TodoCounter};