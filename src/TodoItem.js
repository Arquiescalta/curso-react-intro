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
        margin : '4px 24px 4px 24px',
        padding : '8px 24px 8px 24px',
        borderWidth : '2px',
        borderColor : "pink",
        borderStyle : "dotted",
        borderRadius : '16px',
        
      }
      }>
          <span style={{
            margin : 0,
            fontWeight : "bold",    
             }}> V </span>
          <p style={{
            margin : 0,
          }}> {text} </p>
          <span style={{
            margin : 0,
            fontWeight : "bold",   
          }}> X </span>   
      </li>
      </div>
    );
  }

  export {TodoItem}