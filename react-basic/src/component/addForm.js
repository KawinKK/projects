import "./addForm.css"
import { useState } from "react";
export default function AddForm(props) {
    const{students,setStudent}=props; 
    const[name,setName] = useState("");
    const[gender,setGender] = useState("male")
    function saveStudent(e) {
        e.preventDefault();
        if(!name){
            alert("Please insert name");
        }else{
            const newStudent={
                id:Math.floor(Math.random()*1000),
                name:name,
                gender:gender
            }
            setStudent([...students, newStudent]);
            setName("");
        }
    }
    return(
        <section className="container">
            <form onSubmit={saveStudent}>
                <label>Students name</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button type="submit" className="btn-add">Submit</button>
            </form>
        </section>
    );
}