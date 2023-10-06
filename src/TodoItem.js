function TodoItem({deleted, text, doit}) {
    return (
      <div style={{
        display : "flex",
      }}>
      <li style={{
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        width : '100%',    
        margin : '0px 24px 0px 24px',
        padding : '12px',
        borderWidth : '2px',
        borderColor : "pink",
        borderStyle : "dotted",
        borderRadius : '16px',
      }
      }>
          <span> V </span>
          <p> {text} </p>
          <span> X </span>   
      </li>
      </div>
    );
  }

  export {TodoItem}