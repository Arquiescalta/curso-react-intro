import React from "react";

function TodoSearch({searchValue, setSearchValue })
    {
    return (
        <div style={{
            display: "flex",
            justifyContent : "center"
        }}>
            <input placeholder="Search ToDo" 
            style={{
                padding : '16px', 
                margin : '0px 24px 0px 24px',
                width : '100%',
                borderRadius : '16px',
            }}

            value={searchValue}
            
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}>
            </input>

        </div>
    );
    }
  
  export {TodoSearch}