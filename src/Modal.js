import React from 'react';
import ReactDOM from 'react-dom';


function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="Modal"  
        style={
            {
                display : 'flex',
                justifyContent : 'center',
                alignContent : 'center',
                height : '300px',
                width : '300px',
                background : 'red',
                borderRadius : '30px',
            }
        }
            >
            
            {children}
        </div>,
        document.getElementById('Modal')
    )
}

export {Modal}