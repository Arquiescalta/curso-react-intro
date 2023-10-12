import React from "react";

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
            borderWidth : '4px',
            borderRadius : '16px',
            borderStyle : "dotted",
            borderColor : "pink",
            fontSize : '24px',
            fontWeight : "bold",
            width : '100%'
        }}

        onClick={() => {

            console.log('click')

        }}> + </button>
    
        </div>

    );
  }
  
  export {TodoCreate}