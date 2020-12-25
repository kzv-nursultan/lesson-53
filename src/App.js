import React, {useState} from "react";
import ToDoList from "./Lists/ToDoList";
import "./App.css";


const App = () => {
  const[taskList,setTaskList]=useState([
    {text:'work', id: 'd1'},
    {text:'read', id: 'd2'}
  ]);

  const removeText = id =>{
    const index = taskList.findIndex(p=>p.id===id);
    const taskListCopy = [...taskList];
    taskListCopy.splice(index,1);
    setTaskList(taskListCopy);
  }

  const numbersArray = [0,1,2,3,4,5,6,7,8,9];
  const lettersArray = ['a','b','c','d','e','f','g','h','i','j'];

  const changeBtn = event =>{
    const task = {};
    task.text = event.target.value;
    const newId = (lettersArray[Math.floor(Math.random() * 10)])+(lettersArray[Math.floor(Math.random() * 10)])+(numbersArray[Math.floor(Math.random() * 10)]);
    console.log(newId)
    task.id = newId;
    const taskListCopy = [...taskList];
    taskListCopy.push(task);
    setTaskList(taskListCopy);
    console.log(taskList);
  }

  const inputBar = (
    <div className="inputBar">
      <input type="text" placeholder="To-do list click here to add" className="input" onClick={changeBtn} autoFocus/>
    </div>
  )

  const toDoList = (
    <>
    {
      taskList.map((task)=>{
        return (
          <ToDoList
            key={task.id}
            text={task.text}
            removeText={()=>removeText(task.id)}>
          </ToDoList>
        )
      })
    }
    </>
  )

  return(
    <div className="App">
      {inputBar}
      {toDoList}
    </div>
  )
}

export default App;
