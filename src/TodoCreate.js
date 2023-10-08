function TodoCreate() {
    return (
        <div style={{
            display: "flex",
            justifySelf : "center",
            position : "absolute",
            bottom : '40px',
            right : '24px',
            left : '24px'
        }}>
        <button style={{
            backgroundColor : "skyblue",
            opacity : '50%',
            borderWidth : '4px',
            borderRadius : '16px',
            borderStyle : "dotted",
            borderColor : "pink",
            fontSize : '24px',
            width : '100%'
        }}> + </button>
        </div>

    );
  }
  
  export {TodoCreate}