
function TodoCounter({total, completed}) {
    return (

        <h2 style={{
            fontSize : '24px',
            textAlign : 'center',
            margin : 0,
            padding : '32px',
        }}>
            You have completed {completed} of {total} ToDo's
        </h2>
    );
  }
  
  export {TodoCounter};