import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Blog from "./pages/blog/blog";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
