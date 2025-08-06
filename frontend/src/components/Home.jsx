import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <div className="flex flex-col">
          <Link to="/make"><button className="bg-blue-300 text-2xl font-bold p-1 px-4 mb-2"  >Add NOTE </button></Link>
             <Link to="/view"> <button className="bg-blue-300 text-2xl font-bold p-1 px-4">View NOTES </button></Link>
        </div>
  )
}
