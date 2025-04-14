import { Routes, Route } from "react-router-dom";

import "./App.css";

import BLOG_POSTS from "./utilities/mockData";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";

// Initialize blog posts in localStorage only once
if (!localStorage.getItem("blogPosts")) {
  localStorage.setItem("blogPosts", JSON.stringify(BLOG_POSTS));
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Home />} />
        <Route path="/posts/:id" element={<Blog />} />
      </Routes>
    </Layout>
  );
}

export default App;
