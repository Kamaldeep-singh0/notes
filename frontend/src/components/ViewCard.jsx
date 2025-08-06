import React from 'react'

function ViewCard({title,body,id,onDelete}) {
  return (
    <div className='p-2 bg-amber-100 m-1'>
        <div className='flex justify-between'>
           <h1>{title}</h1>
           <button className='p-0.5 bg-red-500' 
           onClick={async()=>
            {await fetch(`http://localhost:3000/notes/${id}`, {method:"DELETE"});
            onDelete(id);
          }}
           >Delete</button>
        </div>
      <h2>{body}</h2>
    </div>
  )
}

export default ViewCard
