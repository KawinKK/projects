import { useState } from "react";
import "./studentList.css";
import Item from "./item";

export default function StudentList(props) {
  const [show, setShow] = useState(true);
  const {students, deleteStudent}=props;
  const btnStyle = {
    background: show? "green" : "blue"
  }

  return (
    <>
      <ul>
        <div className="header">
          <h2 style={{color:"green", fontSize:"40px"}}>number of students = {students.length}</h2>
          <button onClick={() => setShow(!show)} style={btnStyle}>{show?"hide":"show"}</button>
        </div>
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent}/>
          ))}
      </ul>
    </>
  );
}