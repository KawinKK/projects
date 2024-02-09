import Header from "./component/header.js";
import StudentList from "./component/studentList.js";
import AddForm from "./component/addForm.js";
import { useState } from "react";
import "./App.css";
function App() {
  
  const [students, setStudent] = useState([]);
  
  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header title="Homie"/>
      <main>
        <AddForm students={students} setStudent={setStudent}/>
        <StudentList students={students} deleteStudent={deleteStudent}/>  
      </main>
    </div>
  );
}

export default App;
