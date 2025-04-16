import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import BLOG_POSTS from "./utilities/mockData";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";

function App() {
  const [allPosts, setAllPosts] = useState(() => {
      return JSON.parse(localStorage.getItem("blogPosts")) || BLOG_POSTS;
    }),
    [filteredPosts, setFilteredPosts] = useState(allPosts);

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(allPosts));
  }, [allPosts]);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const results = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery)
    );
    setFilteredPosts(results);
  };

  const handleSavePost = (newPost) => {
    const updatedPosts = [
      ...allPosts,
      { ...newPost, id: Date.now(), url: `posts/${Date.now()}` },
    ];
    setAllPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = allPosts.filter((post) => post.id !== postId);
    setAllPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  return (
    <Layout onSearch={handleSearch}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={filteredPosts}
              onSavePost={handleSavePost}
              allPosts={allPosts}
            />
          }
        />
        <Route
          path="/add"
          element={<Home posts={filteredPosts} onSavePost={handleSavePost} />}
        />
        <Route
          path="/posts/:id"
          element={<Blog onDeletePost={handleDeletePost} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
