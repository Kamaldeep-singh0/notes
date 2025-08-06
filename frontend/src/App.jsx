import Make from "./components/Make"
import View from "./components/View"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
   
      <div className="bg-amber-200 w-screen h-screen flex items-center justify-center">
        <div className="bg-sky-200 w-3xl h-9/12 flex items-center justify-center  ">
        <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="make" element={<Make/>}/>
          <Route path="view" element={<View/>}/>
        </Routes>
        </BrowserRouter>
        </div>
      </div>
    
    </>
  )
}

export default App
