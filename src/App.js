import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Team from "./routes/Team";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

export default function App(){
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={ <Home/>}/>      
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}