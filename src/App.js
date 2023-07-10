import Home from "./component/Home";
import About from "./component/About";
import Blogs from "./component/ฺBlogs";
import Navbar from "./component/์Navbar";
import NotFound from "./component/NotFound";
import Details from "./component/Details";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/Home" element={<Navigate to="/" />}></Route>
        <Route path="/Info" element={<Navigate to="/About" />}></Route>
        <Route path="/blog/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
