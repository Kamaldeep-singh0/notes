import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'

function View() {
    const [notes,setNotes] = useState([]);

    useEffect(()=>{
        const func = async()=>{
        const res = await fetch("http://localhost:3000/notes");
          const result = await res.json();
          setNotes(result);
          console.log(result)
        }
        func();
    },[]);

    const handleDelete = (id)=>{
          setNotes((pre)=> pre.filter(note => note._id!=id));
          console.log("heelo")
    };

  return (
    <div>
             {notes.map(note => 
                (<ViewCard title={note.Title} body={note.Body} key={note._id} id={note._id} onDelete={handleDelete} category={note.Category} done={note.Done}/>)
             )}
    </div>
  )
}

export default View
