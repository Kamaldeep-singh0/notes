import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Make() {
        const [title,setTitle] = useState("");
        const [body, setBody] = useState("");
        const navigate = useNavigate();

        const callerFunction = async ()=>{
            await fetch('http://localhost:3000/notes',{
               method: "POST",
               body: JSON.stringify({Title:title,
                     Body:body
               }),
               headers:{
                  "Content-Type": "application/json"
               }  
            })
            navigate("/view");
        
        }
  return (
    <div className='flex flex-col justify-center' ><div className='mb-2'>
        <h1 className='text-2xl font-bold m-1'>Title</h1>
      <input className='w-xl bg-amber-100 px-2' onChange={(e)=>setTitle(e.target.value)}></input>
      {console.log(title)}
    </div>
    <div className='mb-2'>
        <h1 className='text-2xl font-bold m-1'>Body</h1>
      <textarea className='w-xl bg-amber-100 px-2'onChange={(e)=>setBody(e.target.value)}></textarea>
    </div>
    <div className='mb-2'>
        <h1 className='text-2xl font-bold m-1'>Category</h1>
    
      <select className='w-xl bg-amber-100 px-2'>
        <option>Urgent</option>
        <option>Work</option>
          <option>Personal</option>
      </select>
    </div>
    <button className='p-3 px-16 rounded-xl bg-red-500 hover:bg-red-700 text-black text-2xl font-bold'
    onClick={callerFunction}
    >Add</button>
    </div>
    
  )
}

export default Make
