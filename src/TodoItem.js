import React from 'react';
import './TodoItem.css'
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
function TodoItem({text, doit, onComplete, onDelete }) {
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
        
        <CompleteIcon
          className={`Icon-check ${doit && "Icon-check--active"}`}
          onClick={onComplete}
        />
         
        <p className={`TodoItem-p ${doit && 'TodoItem-p--complete'}` } > {text} </p>

                <DeleteIcon className="Icon-delete" onClick={onDelete} />      
      </li>
      </div>
    );
  }

  export {TodoItem}
