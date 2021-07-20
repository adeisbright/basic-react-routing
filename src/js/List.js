import React from "react"



//Creating List 
let students = ["Afolabi Wale" , "Tola Owolabi" , "Okezie Emeka" , "Okoye Favour"] 

function DisplayStudents(props){ 
    //Indexes are not good as key names. Use unique ids for keys 
    // You should only add keys to elements where they are listed
    let students = props.students.map((student , i) => 
        <li key={i}>
            {student} 
        </li>
    )
    return(
        <ol>
            {students}
        </ol>
    )
}
export default  function App(){
    return (
        <>
            <h1>Working with List</h1> 
            <DisplayStudents students={students} />
        </>
    )
}