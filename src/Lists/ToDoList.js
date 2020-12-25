import React from 'react';

const ToDoList = props =>{
    return(
        <div className="task">
            <p>{props.text}</p>
            <button onClick={props.removeText}>Delete</button>
        </div>
    );
};
export default ToDoList;