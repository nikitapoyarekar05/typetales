import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlogComponent from "./components/organism/BlogPostDetail/index.jsx";

import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <Routes>
      {console.log("to check deployment")}
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<BlogComponent />} />
    </Routes>
  );
}

export default App;
