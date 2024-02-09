import Home from "./component/Home";
import About from "./component/About";
import Blogs from "./component/Blogs";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
import Detail from "./component/Detail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/home" element={<Navigate to="/"/>}></Route>
        <Route path="/info" element={<Navigate to="/about"/>}></Route>
        <Route path="/blog/:id" element={<Detail/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
