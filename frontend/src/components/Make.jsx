import React from 'react'

function Make() {
  return (
    <div className='flex flex-col justify-center' ><div className='mb-2'>
        <h1 className='text-2xl font-bold m-1'>Title</h1>
      <input className='w-xl bg-amber-100 px-2'></input>
    </div>
    <div className='mb-2'>
        <h1 className='text-2xl font-bold m-1'>Body</h1>
      <textarea className='w-xl bg-amber-100 px-2'></textarea>
    </div>
    <button className='p-3 px-16 rounded-xl bg-red-500 hover:bg-red-700 text-black text-2xl font-bold'>Add</button>
    </div>
    
  )
}

export default Make
