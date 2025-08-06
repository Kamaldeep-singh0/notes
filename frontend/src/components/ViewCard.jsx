import React from 'react'

function ViewCard() {
  return (
    <div className='p-2 bg-amber-100 m-1'>
        <div className='flex justify-between'>
           <h1>What is Lorem Ipsum?</h1>
           <button className='p-0.5 bg-red-500'>Delete</button>
        </div>
      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h2>
    </div>
  )
}

export default ViewCard
