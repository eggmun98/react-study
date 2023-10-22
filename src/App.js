import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import ClassPage from "./class";
import Lifecycle from "./lifecycle";
import Sass from "./sass";
import "./exercise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/sass" element={<Sass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
