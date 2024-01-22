import { useState } from "react";
export default function StudentList() {
  const [students, setStudent] = useState([
    { id: 1, name: "Dutchie" },
    { id: 2, name: "Kongpop" },
    { id: 3, name: "Music" },
  ]);
  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  const [show, setShow] = useState(true);

  return (
    <>
      <h2>number of students = {students.length}</h2>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        {show &&
          students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name}
              </p>
              <button onClick={() => deleteStudent(item.id)}>delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}
