import './TodoItem.css'
function TodoItem({deleted, text, doit, onComplete }) {
    return (
      <div style={{
        display : "flex",
      }}>
      <li      className="TodoItem"
        style={{
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
        <span 
        className={`Icon-check ${doit && 'Icon-check--active'}`}  
        onClick={onComplete}

        > V </span>

        <p className={`TodoItem-p ${doit && 'TodoItem-p--complete'}` } > {text} </p>
       
        <span className='Icon-delete'> X </span>   
      </li>
      </div>
    );
  }

  export {TodoItem}
