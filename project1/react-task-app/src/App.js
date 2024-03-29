import './App.css';
import Header from './component/header.js';
import AddForm from './component/AddForm.js';
import Item from './component/Item.js';
import {useState, useEffect} from "react";

function App() {
  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [title,setTitle]=useState("");
  const [editId,setEditId]=useState(null);
  const [theme,setTheme]=useState(JSON.parse(localStorage.getItem("theme")) || "light");

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
    localStorage.setItem("theme",JSON.stringify(theme));
  },[tasks, theme]);

  function deleteTask(id) {
    const result = tasks.filter(item=>item.id!==id);
    setTasks(result);
  }

  function saveTask(e) {
    e.preventDefault();
    if(!title){
      alert("Please add data in task.");
    }else if(editId){
      const updateTask = tasks.map((item)=>{
        if(item.id===editId){
          return {...item,title:title}
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    }else {
      const newTask={
        id:Math.floor(Math.random()*1000),
        title:title
      }
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item)=>item.id===id);
    setTitle(editTask.title);
  }

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {
            tasks.map((data)=>(
              <Item kay={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
