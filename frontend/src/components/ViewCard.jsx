import React, { useState } from 'react'

function ViewCard({title,body,id,onDelete,category,done}) {
        const [isDone , SetIsDone] = useState(done);

           async function onDoneFunction() {
           const newDone = !isDone; 
             SetIsDone(newDone);

               await fetch(`http://localhost:3000/notes/${id}`, {
                    method: "PUT",
                      headers: {
                     "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ Done: newDone }),
                     });
             }
        

  return (
    <div className='p-2 bg-amber-100 m-1'>
        <div className='flex justify-between'>
           <h1>{title}</h1>
             <div className='p-1 bg-cyan-500 rounded-3xl' >{category}</div>
           <button className='p-0.5 bg-red-500' 
           onClick={async()=>
            {await fetch(`http://localhost:3000/notes/${id}`, {method:"DELETE"});
            onDelete(id);
          }}
           >Delete</button>
         
        </div>
      <h2>{body}</h2>
      <button onClick={onDoneFunction} className='p-0.5 bg-blue-400 rounded-3xl' > {isDone ? "Completed" : "Mark as Completed"}</button>
    </div>
  )
}

export default ViewCard
