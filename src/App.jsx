import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Product from "./pages/Product.jsx"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element= {<Product/>}/>

    </Routes>
    </>
  )
}

export default App
