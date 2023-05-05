import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Blog from "./pages/blog/blog";
import Home from "./pages/home/home";
import Post from "./pages/post/post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
