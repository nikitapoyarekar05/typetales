import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlogComponent from "./components/organism/BlogComponent/index.jsx";

import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<BlogComponent />} />
    </Routes>
  );
}

export default App;
